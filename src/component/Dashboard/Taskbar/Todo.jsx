import React, { useEffect, useState } from "react";
import Addtodo from "./Addtodo";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchtask } from "../../../store/features/TodoSlice";
import { Droppable } from "react-beautiful-dnd";
const Todo = () => {
  const [todosCount, setTodosCount] = useState(0);

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const boardId = useSelector((state) => state.CurrentBoardId.currentboardid);
  useEffect(() => {
    console.log(boardId);
  }, []);
  useEffect(() => {
    const fetchtasks = async () => {
      await axios
        .post(
          "https://taskmanagement---backend.glitch.me/api/tasks/fetchtask",
          { id: todos.id },

          {
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch(fetchtask(res.data));
          }
        });
    };
    fetchtasks();
  }, []);
  useEffect(() => {
    let filteredTodos = todos.filter((todos) => todos.boardId === boardId && todos.status === "todo");
    setTodosCount(filteredTodos.length);
  }, [boardId, todos]);

  return (
    <>
      <div className="todo lg:w-[30%] w-full flex flex-col  p-3 items-start ">
        <h1 className="pl-12 pb-3 ">TO-Do ({todosCount})</h1>
        <Droppable droppableId="todolist">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-full lg:h-[calc(100vh-15rem)] 
              max-h-[400px]
              overflow-y-auto scrollbar-hide min-h-[250px] scroll-smooth rounded-lg"
            >
              {todos?.map((t, i) => {
                if (t.boardId === boardId && t.status === "todo")
                  return <Addtodo name={t.name} desc={t.desc} status={t.status} id={t.id} key={i} index={i} />;
                else return null;
              })}
              {provided.placeholder}
            </div>
          )}

        </Droppable>
        {/* <div

          className="w-full h-[calc(100vh-15rem)] overflow-y-auto scrollbar-hide min-h-[250px]  rounded-lg"
        >
          {todos?.map((t, i) => {
            if (t.boardId === boardId)
              return <Addtodo name={t.name} desc={t.desc} id={t.id} key={i} />;
            else return null;
            // return <Addtodo name={t.name} desc={t.desc} key={i} />
          })}
        </div> */}
      </div>
    </>
  );
};

export default Todo;
