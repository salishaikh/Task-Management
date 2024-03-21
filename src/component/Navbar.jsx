import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "./../assets/logo.webp";
import cover from "../assets/cover.png";
import { setMessage } from "../Message";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate("/login")
    setMessage("User logged out", 2000);
    setIsLoggedIn(false)
  }
  return (
    <>
      <nav className="bg-[#ffffff] h-[50px] font-[ 'Fira Sans']">
        <div className="main flex items-center h-full justify-between m-1">
          <div className="logo h-full ml-2">
            <img className="h-full object-contain " src={cover} alt="" />
          </div>

          <div className="link flex justify-center ">
            <ul className="flex gap-5 ">
              <li>
                <Link
                  to="/"
                  className="font-bold text-[#3a90f6] border-b border-[#3a90f6] hover:border-b-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className=" hover:border-b-2 border-[#3a90f6] "
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link className=" hover:border-b-2 border-[#3a90f6] ">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="btn lg:px-4 lg:py-2 px-2 py-1 m-3 lg:mt-4  relative overflow-hidden  rounded-full group bg-white  [background-size:400%] text-black cursor-pointer drop-shadow-lg before:transition-transform before:duration-300 hover:before:scale-x-100 before:scale-x-0 before:absolute before:top-0 before:left-0  before:origin-[0_50%] before:w-full before:h-full before:rounded-full before:bg-gradient-to-r before:from-cyan-500 before:to-blue-500 "
          >
            <button onClick={handleLogout} className=" relative z-10 w-full h-full flex justify-center items-center group-hover:text-white transition-all duration-300"     >
              {isLoggedIn ? <div>Logout</div> : <Link to="/login">Login</Link>}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
