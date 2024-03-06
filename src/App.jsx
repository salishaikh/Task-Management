import Login from "./component/authenticationn/Login";

import Dashboard from "./component/Dashboard/Dashboard";
import Signup from "./component/authenticationn/Signup";
import Home from "./component/Home/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Addmodal from "./component/Dashboard/Taskbar/Addmodal";
import { useEffect, useState } from "react";
import { Alert } from "@mui/material";
import Muialert from "./component/muialert";
import { useSelector } from "react-redux";

// import { useEffect } from "react";
// import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const errorMessage = useSelector((state) => state.message.error)
  const Message = useSelector((state) => state.message.message)
  const checkLoggedIn = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      else return setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);
  const [showalert, setShowalert] = useState(true)
  // setTimeout(() => {
  //   setShowalert(false)
  // }, 1000);
  return (
    <>

      {
        errorMessage && (<Muialert msg={errorMessage} severity="danger" />)
      }
      {
        Message && (<Muialert msg={Message} />)
      }
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
