import React from "react";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";

const Home = () => {
  return (
    <>
      <div className="main m-2">
        <Sec1 cname="Taskify" />
        <Sec2 />
      </div>
    </>
  );
};

export default Home;
