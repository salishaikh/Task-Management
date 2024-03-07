import React, { useEffect, useState } from "react";
import AddboardModal from "./AddboardModal";
import CreatedBoard from "./Createdboard";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchboard } from "../../../store/features/BoardSlice";
import Editboardmodal from "./Editboardmodal";

const Sidebar = (props) => {
  const Board = useSelector((state) => state.board.board);
  const dispatch = useDispatch();

  const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
  const [elipsisopen, setElipsisopen] = useState(false);
  useEffect(() => {
    const fetchBoards = async () => {
      await axios
        .post(
          "https://taskmanagement---backend.glitch.me/api/board/fetchboard",
          { id: Board.id },
          {
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch(fetchboard(res.data));
          }
        });
    };

    fetchBoards();
  }, []);
  return (
    <div className="second  border border-transparent h-[calc(100vh-5rem)] min-w-[12rem] bg-white  overflow-y-auto overflow-x-hidden">
      {/* drop-shadow-2xl */}
      <div
        className="sidebarborder-black h-[calc(100%-3rem)] 
     w-full "
      >
        <div className="comp ">
          {/* new task  */}
          <div
            className="addtask  mt-2 mr-1  p-2  rounded-r-full border border-transparent flex justify-center duration-500 ease-in-out
       text-[#3a90f6] cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500  hover:text-white"
          >
            <AddboardModal />
          </div>

          {/* created task  */}

          <div className="createdtask ">
            {Board?.map((t, i) => {
              return <div key={i}>
                {isEditMenuOpen && (
                  <Editboardmodal
                    setIsEditMenuOpen={setIsEditMenuOpen}
                    id={t.id}
                    setElipsisopen={setElipsisopen}
                  />
                )}
                <CreatedBoard name={t.name} id={t.id} setIsEditMenuOpen={setIsEditMenuOpen} /></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
