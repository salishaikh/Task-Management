import React, { useState } from "react";
import { addTodo } from "../../../store/features/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMessage } from "../../../Message";
const Addmodal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const boardId = useSelector((state) => state.CurrentBoardId.currentboardid);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const addTodoToBackend = async () => {
    try {
      await axios
        .post(
          "https://taskmanagement---backend.glitch.me/api/tasks/createtask",
          {
            title: name,
            description: desc,
            boardId: boardId,
          },
          {
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch(addTodo({
              name, desc, boardId, id: res.data._id,
              status: res.data.status
            }));
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addTodoHandler = (e) => {
    if (!name) return;
    if (!desc) return;
    e.preventDefault();
    addTodoToBackend();
    setName("");
    setDesc("");
    setModalOpen(false);
    setMessage("Task Created", 2000);
  };

  return (
    <>
      <button
        onClick={() => {
          if (!boardId) return alert("Please select a board");
          setModalOpen(true);
        }}
        className="block lg:w-[10rem] text-white bg-[#3a90f6] hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-500 ease-in-out   focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 "
        type="button"
      >
        Add Task
      </button>

      {modalOpen && (
        <div
          className={`overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${modalOpen ? "flex" : "hidden"
            }`}
        >
          <div className="relative p-4 lg:w-full w-[20rem] lg:max-w-md max-h-full">
            <div className="relative bg-gray-200  rounded-lg  drop-shadow-2xl">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-black">
                <h3 className="text-lg font-semibold text-black ">
                  Create New Task
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
                      Task Name
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
                      placeholder="Type task name"
                    />
                  </div>

                  <div className="col-span-2">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-black "
                    >
                      {" "}
                      Description
                    </label>

                    <textarea
                      onChange={(e) => {
                        e.preventDefault();
                        setDesc(e.target.value);
                      }}
                      value={desc}
                      id="description"
                      rows="4"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                      placeholder="Write  description here"
                    ></textarea>
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
                  onClick={addTodoHandler}
                  className="text-white inline-flex items-center  bg-[#3a90f6] hover:bg-[#3a7ccd] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >

                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Addmodal;
