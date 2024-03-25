import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd"
import { VscKebabVertical } from "react-icons/vsc";
import Elipsismenu from "./Elipsismenu";
import EditModal from "./EditModal";
import { deleteTodo, editTodo } from "../../../store/features/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessage } from "../../../Message";
const Addtodo = (props) => {
  const [elipsisopen, setElipsisopen] = useState(false);
  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const todos = useSelector((state) => state.todos.todos);
  const deletehandler = async () => {
    await axios
      .post(
        "https://taskmanagement---backend.glitch.me/api/tasks/deletetask",
        {
          id: props.id,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            deleteTodo({
              id: props.id,
              todos,
            })
          );
        }
      });
    setMessage("Task Deleted", 2000);
  };
  const dispatch = useDispatch();
  return (
    <>

      <Draggable key={props.id} draggableId={props.id} index={props.index} status={props.status}>

        {
          (provided) => (
            <div

              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className="cont flex items-center p-1 px-2 py-2">

              <div



                className="main w-[300px] p-3 items-center text-center border hover:border-blue-600 rounded-xl hover:scale-105 ease-in-out duration-100
          bg-[#ffffff]  drop-shadow-[0_8px_7px_rgba(0,0,0,0.10)] select-none">

                <div className="head  flex justify-between items-center min-h-8 w-full  text-black">
                  {" "}
                  <div className="left flex justify-center items-center ml-3">
                    <div className={`circle ${props.status === 'done' && 'bg-green-500'} ${props.status === 'todo' && 'bg-blue-500'} ${props.status === 'doing' && 'bg-yellow-500'} rounded-full w-[1rem] h-[1rem]`}></div>
                    <div className="title mx-3 font-semibold scroll-smooth ">{props.name}</div>
                  </div>
                  <div className="right flex  mr-2">
                    <div className="kebab cursor-pointer relative">
                      <div className="icon flex gap-2">

                        <div className="edit" onClick={() => {
                          dispatch(editTodo(props.id));
                          setIsEditMenuOpen(true);

                        }}>
                          <ion-icon name="create-outline"></ion-icon>
                        </div>
                        <div className="delete" onClick={deletehandler}>

                          <ion-icon name="trash-outline"></ion-icon>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="description w-full p-1 max-h-[12rem] overflow-y-auto scrollbar-hide scroll-smooth  ">
                  <div className="desc w-full flex justify-start text-left ml-2">
                    {props.desc}
                  </div>
                </div>
              </div>
            </div>

          )
        }


      </Draggable>{isEditMenuOpen && (
        <EditModal
          setIsEditMenuOpen={setIsEditMenuOpen}
          id={props.id}
          setElipsisopen={setElipsisopen}
        />
      )}
    </>
  );
};

export default Addtodo;
