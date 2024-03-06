
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd"
import { VscKebabVertical } from "react-icons/vsc";
import Elipsismenu from "./Elipsismenu";
import EditModal from "./EditModal";
const Doingtask = (props) => {
    const [elipsisopen, setElipsisopen] = useState(false);
    const [isEditMenuOpen, setIsEditMenuOpen] = useState(false);
    return (
        <>

            <Draggable draggableId="doingtask">

                {
                    (provided) => (
                        <div
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            className="cont flex items-center p-1 px-2 py-2">

                            <div



                                className="main w-full p-3 items-center text-center border hover:border-blue-600 rounded-xl 
          bg-[#ffffff]  drop-shadow-[0_8px_7px_rgba(0,0,0,0.10)]">

                                <div className="head  flex justify-between items-center min-h-8 w-full  text-black">
                                    {" "}
                                    <div className="left flex justify-center items-center ml-3">
                                        <div className="circle bg-blue-400 rounded-full w-[1rem] h-[1rem]"></div>
                                        <div className="title mx-3 font-semibold ">{props.name}</div>
                                    </div>
                                    <div className="right flex  mr-2">
                                        <div className="kebab cursor-pointer relative">
                                            {elipsisopen && (
                                                <Elipsismenu
                                                    type="task"
                                                    id={props.id}
                                                    setElipsisopen={setElipsisopen}
                                                    setIsEditMenuOpen={setIsEditMenuOpen}
                                                />
                                            )}
                                            <VscKebabVertical
                                                onClick={() => {
                                                    setElipsisopen(!elipsisopen);

                                                }}
                                            />
                                        </div>

                                    </div>
                                </div>

                                <div className="description w-full p-1 max-h-[12rem] overflow-y-auto scrollbar-hide  ">
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

export default Doingtask