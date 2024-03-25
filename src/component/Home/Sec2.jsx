import React from "react";

const Sec2 = () => {
  return (
    <>
      <div className="flex  justify-center mb-[5rem] " id="about">
        <div className="sec2 w-[90%] lg-h-[20rem] h-full bg-[#f4f7fd] flex lg:justify-between flex-col lg:flex-row p-2 rounded-3xl  ">
          <div className="tag w-[30%] lg:mt-[6rem]  ml-[5rem] text-center font-[ 'Fira Sans']  text-xl">
            About{" "}
          </div>
          <div className="cont lg:w-[50%] w-full lg:mt-[2rem] lg:mr-[5rem] p-2  leading-8 font-[ 'Fira Sans']">
            At Taskify, we specialize in providing a user-friendly CRUD (Create, Read, Update, Delete) task management system. Our platform is designed to streamline the task management process, making it easier for individuals and teams to organize, track, and prioritize their tasks effectively.

          </div>
        </div>
      </div>
    </>
  );
};

export default Sec2;
