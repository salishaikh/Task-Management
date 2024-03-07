import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
import { backendUrl } from "../../../environ";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setErrorMessage, setMessage } from "../../Message";

const Login = ({ setIsLoggedIn }) => {
  const [credntials, setCredntials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleclick = async () => {
    console.log("login.....");
    const response = await axios.post(`${backendUrl}/api/auth/login`, {
      email: credntials.email,
      password: credntials.password,

    });
    console.log(response.data);
    localStorage.setItem("token", response.data.authtoken);
    navigate("/dashboard");
    setMessage("User Logged In", 2000);
    setIsLoggedIn(true);
  };

  const checkLoggedIn = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      else return navigate("/dashboard");
    } catch (error) {
      console.error(error);

    }
  };

  useEffect(() => {

    checkLoggedIn();
  }, []);

  const onchange = async (e) => {
    setCredntials({ ...credntials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-[#ffffff]">
        <div className="main main lg:w-fit lg:min-w-[30rem] w-full border border-black-500 rounded-md bg-[#ffffff] drop-shadow-2xl subpixel-antialiased mx-6">
          <div className=" container flex flex-col  items-center justify-center pt-14">
            <div className="head m-2">
              <h1 className="text-2xl">Log in</h1>
            </div>

            <div className="cont w-full mt-3 flex flex-col gap-2 p-8">
              <div className="relative h-11 mt-2  w-full">
                <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                  <HiOutlineMail />
                </div>
                <input
                  placeholder=""
                  value={credntials.email}
                  onChange={onchange}
                  name="email"
                  type="email"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900"
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Email
                </label>
              </div>

              <div className="relative h-11 mt-2 w-full">
                <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                  <RiLockPasswordLine />
                </div>
                <input
                  placeholder=""
                  type="password"
                  name="password"
                  onChange={onchange}
                  value={credntials.password}
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-gray-900"
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Password
                </label>
              </div>
            </div>
            <hr className="w-[200px] mt-1" />

            <div className=" mt-2 ">
              <p className=" text-xs">
                Don't have an account?{" "}
                <Link className=" text-[#3a90f6]" to="/signup">
                  Sign up
                </Link>{" "}
                now
              </p>
            </div>
            <div className="btn">
              <button
                onClick={handleclick}
                type="button"
                className="border  px-6 py-2 my-8 rounded-md  bg-[#3a90f6] text-white hover:bg-[#3a7ccd]"
              >
                Log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

{
  /* <hr className="w-[400px] " /> */
}
