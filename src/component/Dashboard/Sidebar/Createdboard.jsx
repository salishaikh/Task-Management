import React, { useState } from "react";
import { CurrentBoardId } from "../../../store/features/Currentboardid";
import { useDispatch, useSelector } from "react-redux";
import { VscKebabVertical } from "react-icons/vsc";
import { deleteBoard } from "./../../../store/features/BoardSlice";
import AddboardModal from "./AddboardModal";
import axios from "axios";
import { setMessage } from "../../../Message";
const CreatedBoard = (props) => {
  const dispatch = useDispatch();
  const [elipsisopen, setElipsisopen] = useState(false);
  const boardId = useSelector((state) => state.CurrentBoardId.currentboardid);
  return (
    <div className="relative ">
      <div
        onClick={() => {
          dispatch(CurrentBoardId(props.id));
        }}
        className={`addtask mt-2 mr-1 p-2 rounded-r-full overflow-x-hidden duration-75 ease-in-out border 
        border-transparent cursor-pointer  ${boardId === props.id
            ? " bg-gradient-to-r from-cyan-500 to-blue-500  text-white"
            : ""
          }  hover:bg-gradient-to-r from-cyan-500 to-blue-500  hover:text-white flex justify-between items-center scrollbar-hide duration-500 ease-in-out relative`}
      >
        <div className="ml-2">{props.name}</div>
        <div className="elipsis relative">
          <VscKebabVertical
            onClick={() => {
              setElipsisopen(!elipsisopen);
            }}
          />
        </div>
      </div>
      {elipsisopen && (
        <Elipsismenu
          type="board"
          setElipsisopen={setElipsisopen}
          id={props.id}
          setIsEditMenuOpen={props.setIsEditMenuOpen}
        />
      )}
    </div>
  );
};

export default CreatedBoard;

const Elipsismenu = (props) => {
  const boards = useSelector((state) => state.board.board);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex absolute right-4 top-8 z-10 ">
        <div className="w-36 text-sm font-medium bg-[#f3f3f3]  shadow-md shadow-[#364e7e1a]   space-y-2 py-1 px-1 rounded-lg h-auto  ">
          <div
            className="cursor-pointer h-10 text-gray-700 flex items-center pl-2 hover:bg-blue-300 rounded-md duration-500 ease-in-out"
            onClick={() => {
              console.log("hello");
              // dispatch(editTodo(props.id));
              props.setElipsisopen(false);
              props.setIsEditMenuOpen(true);

            }}
          >
            Edit {props?.type}
          </div>
          <div
            className="cursor-pointer h-8 text-gray-700 flex items-center pl-2 hover:bg-blue-300 rounded-md duration-500 ease-in-out  "
            onClick={async () => {
              await axios
                .post(
                  "http://localhost:4000/api/board/deleteboard",
                  { id: props.id },
                  {
                    headers: {
                      "auth-token": localStorage.getItem("token"),
                    },
                  }
                )
                .then((res) => {
                  if (res.status === 200) {
                    dispatch(
                      deleteBoard({
                        id: props.id,
                        boards,
                      })
                    );
                  }
                });

              props.setElipsisopen(false);
              setMessage("Board Deleted", 1000);
            }}
          >
            Delete {props?.type}
          </div>
        </div>
      </div>
    </>
  );
};
