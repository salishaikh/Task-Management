import React from "react";
import { Link } from "react-router-dom";
import back from "./../../assets/back.jpg";
const Sec1 = ({ cname }) => {
  return (
    <>
      <div className="sec1  mt-5 flex justify-start lg:flex-row flex-col font-['Raleway'] font-bold  ">
        <div className="head mt-6 p-2 lg:w-[60rem]  ">
          <div className="lg:text-[5.4rem] text-[1.5rem] mt-8 text-center  ">
            Manage Your Tasks Easily With{" "}
            <div className="brand text-[#3a90f6]">{cname}</div>
          </div>
          <div className="flex justify-center mr-16">
            <button
              className="getstart w-[10rem] h-[2.8rem] align-middle text-center   btn px-4 py-2 ml-10 mt-4 rounded-xl   bg-[#3a90f6]
          text-white
        hover:bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <Link to="/dashboard"> Get started</Link>
            </button>
          </div>
        </div>
        <div className="img lg:w-[60rem]  ">
          <img className="" src={back} alt="" />
        </div>
      </div>
    </>
  );
};

export default Sec1;
// style={{ backgroundImage: `url(${back})` }}
