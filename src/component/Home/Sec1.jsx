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
          <div className="flex justify-center lg:mr-16">
            <Link to="/dashboard"
              className="relative overflow-hidden h-12 px-8 rounded-full group bg-white  [background-size:400%] text-black cursor-pointer drop-shadow-lg before:transition-transform before:duration-300 hover:before:scale-x-100 before:scale-x-0 before:absolute before:top-0 before:left-0  before:origin-[0_50%] before:w-full before:h-full before:rounded-full before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 "           >


              <span className="relative z-10 w-full h-full flex justify-center items-center group-hover:text-white transition-all duration-300" > Get started</span>

            </Link>


            {/* <button
              className="getstart w-[10rem] h-[2.8rem] align-middle text-center   btn px-4 py-2 ml-10 mt-4 rounded-xl   bg-[#3a90f6]
          text-white
        hover:bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              <Link to="/dashboard"> Get started</Link>
            </button> */}
          </div>
        </div >
        <div className="img lg:w-[60rem]  ">
          <img className="" src={back} alt="" />
        </div>
      </div >
    </>
  );
};

export default Sec1;
// style={{ backgroundImage: `url(${back})` }}
