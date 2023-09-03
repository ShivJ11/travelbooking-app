import React from "react";
import Navbar from "../components/Navbar";
import herobg from "../assets/herobg.jpg";
import SearchArea from "../components/SearchArea";

const Home = ({isShowLogin,handleLoginClick,isShowRegister,handleRegisterClick}) => {
  return (
    <div>
      {/* <Navbar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}></Navbar> */}
      <div class="h-screen bg-cover bg-no-repeat"
      style={{backgroundImage: "url(" + herobg + ")"}}>
        <SearchArea></SearchArea>
      </div>
    </div>
  );
};

export default Home;
