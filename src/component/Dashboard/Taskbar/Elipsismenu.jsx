import React, { useState } from "react";
import EditModal from "./EditModal";
import { deleteTodo, editTodo } from "../../../store/features/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessage } from "../../../Message";

const Elipsismenu = (props) => {
  const todos = useSelector((state) => state.todos.todos);
  // const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);

  const deletehandler = async () => {
    await axios
      .post(
        "http://localhost:4000/api/tasks/deletetask",
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
      <div
        className={
          props.type === "task"
            ? "absolute right-0 top-4 z-20"
            : "absolute right-0"
        }
      >
        <div className="flex z-0">
          <div className="w-36 text-sm font-medium bg-[#f3f3f3]  shadow-md shadow-[#364e7e1a]   space-y-2 py-1 px-1 rounded-lg h-auto  ">
            <div
              className="cursor-pointer h-10  text-gray-700 flex items-center pl-2 hover:bg-blue-300 rounded-md duration-500 ease-in-out"
              onClick={() => {
                dispatch(editTodo(props.id));
                props.setIsEditMenuOpen(true);

              }}
            >
              Edit {props.type}
            </div>
            <div
              className="cursor-pointer h-10 text-gray-700 flex items-center pl-2 hover:bg-blue-300 rounded-md duration-500 ease-in-out "
              onClick={deletehandler}
            >
              Delete {props.type}
            </div>
          </div>
        </div>
      </div>
      {/* {isEditMenuOpen && (
        <EditModal
          setIsEditMenuOpen={setIsEditMenuOpen}
          id={props.id}
          setElipsisopen={props.setElipsisopen}
        />
      )}  */}
    </>
  );
};

export default Elipsismenu;
