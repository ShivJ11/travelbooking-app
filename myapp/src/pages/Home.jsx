import React from "react";
import Navbar from "../components/Navbar";
import herobg from "../assets/herobg.jpg";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <img src={herobg}/>
      </div>
    </div>
  );
};

export default Home;
