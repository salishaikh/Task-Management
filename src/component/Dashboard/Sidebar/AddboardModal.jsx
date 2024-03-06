import React, { useState } from "react";
import { addBoard } from "./../../../store/features/BoardSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessage } from "../../../Message";

const addboardmodal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const Board = useSelector((state) => state.board.board);

  const addBooardHandler = async (e) => {
    if (!name) return;
    e.preventDefault();
    setName("");
    setModalOpen(false);
    setMessage("Board Created", 1000);
    await axios
      .post(
        "https://taskmanagement---backend.glitch.me/api/board/createboard",
        {
          title: name,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          dispatch(addBoard({ name, id: res.data._id }));
        }
      })
      .catch((err) => {
        console.log(err.response);
      });

  };

  return (
    <>
      <div
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Board ({Board.length})
      </div>

      <div
        className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${modalOpen ? "flex" : "hidden"
          }`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-gray-200 shadow-xl rounded-lg ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-black">
              <h3 className="text-lg font-semibold text-black ">
                Create New Board
              </h3>
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                }}
                className="text-gray-400 bg-transparent hover:bg-red-500 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                data-modal-toggle="crud-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-black"
                  >
                    Board Name
                  </label>

                  <input
                    onChange={(e) => {
                      e.preventDefault();
                      setName(e.target.value);
                    }}
                    value={name}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-primary-500"
                    placeholder="Type board name"
                  />
                </div>
              </div>
              <button
                // onClick={(e) => {
                //   e.preventDefault();
                //   let temp = [...todo];
                //   temp.push({
                //     name: name,
                //     desc: desc,
                //   });
                //   setTodo(temp);
                // }}
                onClick={addBooardHandler}
                className="text-white inline-flex items-center  bg-[#3a90f6] hover:bg-[#3a7ccd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Create Board
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default addboardmodal;
