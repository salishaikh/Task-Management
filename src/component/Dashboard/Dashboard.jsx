import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Taskbar from "./Taskbar/Taskbar";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentBoard, setCurrentBoard] = useState("");
  const [sidemenu, setSidemenu] = useState(true);
  const fetchTasks = async () => { };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) navigate("/login");
  }, []);

  return (
    <>
      <div className="main">
        <div className="second bg-white border border-transparent   lg:h-[calc(100vh-5rem)] lg:w-full  flex ">
          {sidemenu && <Sidebar setCurrentBoard={setCurrentBoard} sidemenu={sidemenu} />}
          <Taskbar currentBoard={currentBoard} sidemenu={sidemenu} setSidemenu={setSidemenu} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
