import React, { useEffect, useState } from "react";
import Addtodo from "./Addtodo";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchtask } from "../../../store/features/TodoSlice";
import { Droppable } from "react-beautiful-dnd";

const Doing = () => {
  const [todosCount, setTodosCount] = useState(0);

  const todos = useSelector((state) => state.todos.todos);
  const boardId = useSelector((state) => state.CurrentBoardId.currentboardid);
  useEffect(() => {
    console.log(boardId);
  }, []);

  useEffect(() => {
    let filteredTodos = todos.filter((todos) => todos.boardId === boardId && todos.status === "doing");
    setTodosCount(filteredTodos.length);
  }, [boardId, todos]);



  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (<>
    <div className="todo lg:w-[30%] w-full flex flex-col  p-3 items-start ">
      <h1 className="pl-12 pb-3 ">Doing ({todosCount})</h1>
      <Droppable droppableId="doinglist">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="w-full lg:h-[calc(100vh-15rem)] 
            max-h-[400px]
            overflow-y-auto scrollbar-hide min-h-[250px] scroll-smooth rounded-lg"
          >
            {todos?.map((todo, i) => {
              if (todo.boardId === boardId && todo.status === "doing")
                return <Addtodo name={todo.name} desc={todo.desc} status={todo.status} id={todo.id} key={i} index={i} />;
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

export default Doing;
