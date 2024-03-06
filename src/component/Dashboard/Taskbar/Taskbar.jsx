import React, { useEffect } from "react";
import Todo from "./Todo";
import Doing from "./Doing";
import Done from "./Done";
import Addmodal from "./Addmodal";
import { useState } from "react";
import EditModal from "./EditModal";
import { DragDropContext } from "react-beautiful-dnd"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../../store/features/TodoSlice";
import { setMessage } from "../../../Message";


const Taskbar = () => {
  const [todo, setTodo] = useState([]);
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const updateTodoToBackend = async (id, status) => {
    try {
      await axios
        .post(
          "https://taskmanagement---backend.glitch.me/api/tasks/updatetask",
          { id, status },
          {
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data);
            dispatch(
              addTodo({
                name: res.data.title,
                desc: res.data.description,
                boardId: res.data.boardid,
                status: res.data.status,
                id: res.data._id,
              })
            );
          }
        });
    } catch (error) {
      console.log(error);
    }
  };


  const onDragEnd = (result) => {
    console.log(result);
    if (result.destination.droppableId === 'doinglist') {
      dispatch(deleteTodo({ todos, id: result.draggableId }));
      updateTodoToBackend(result.draggableId, 'doing');
      setMessage("Task Moved to Doing", 1000);
    }
    else if (result.destination.droppableId === 'todolist') {
      dispatch(deleteTodo({ todos, id: result.draggableId }));
      updateTodoToBackend(result.draggableId, 'todo');
      setMessage("Task Moved to TO-Do", 1000);
    }
    else if (result.destination.droppableId === 'donelist') {
      dispatch(deleteTodo({ todos, id: result.draggableId }));
      updateTodoToBackend(result.draggableId, 'done');
      setMessage("Task Moved to Done", 1000);
    }


  }
  return (
    <div
      className=" border-black h-full 
     w-full bg-[#f4f7fd] rounded-2xl py-10  m-2"
    >

      <div className="btn flex justify-end mr-10  ">
        <Addmodal setTodo={setTodo} todo={todo} />

      </div>
      <DragDropContext onDragEnd={onDragEnd} >


        <div className="cont flex items-start justify-evenly  gap-2  ">
          <Todo todo={todo} />
          <Doing />
          <Done />
        </div> </DragDropContext>
    </div>
  );
};

export default Taskbar;
