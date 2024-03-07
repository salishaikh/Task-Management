import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoImage from "./../assets/logo.webp";
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
          <div className="logo h-full">
            <img className="h-full object-contain " src={LogoImage} alt="" />
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
            className="btn lg:px-4 lg:py-2 px-2 py-1 m-3 lg:mt-4  rounded-md  border border-[#3a90f6] text-[#3a90f6]
          hover:text-white
        hover:bg-[#3a90f6] "
          >
            <button onClick={handleLogout}>
              {isLoggedIn ? <div>Logout</div> : <Link to="/login">Login</Link>}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
