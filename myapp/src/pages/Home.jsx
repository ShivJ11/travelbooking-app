import React from "react";
import Navbar from "../components/Navbar";
import herobg from "../assets/herobg.jpg";
import Login from "../components/Login";
import Register from "../components/Register";
import Backdrop from "../components/Backdrop";
import SearchArea from "../components/SearchArea";

const Home = ({isShowLogin,handleLoginClick,isShowRegister,handleRegisterClick}) => {
  return (
    <div>
      {/* <Navbar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}></Navbar> */}
      <div class="h-screen bg-cover bg-no-repeat"
      style={{backgroundImage: "url(" + herobg + ")"}}>
        <SearchArea></SearchArea>
      </div>
      {isShowLogin && <Login handleLoginClick={handleLoginClick}></Login>}
      {isShowRegister && <Register></Register>}
      {isShowLogin && <Backdrop showModal = {handleLoginClick}></Backdrop>}
      {isShowRegister && <Backdrop showModal = {handleRegisterClick}></Backdrop>}
    </div>
  );
};

export default Home;
