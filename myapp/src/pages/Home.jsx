import React from "react";
import Navbar from "../components/Navbar";
import herobg from "../assets/herobg.jpg";
import Login from "../components/Login";
import Register from "../components/Register";
import Backdrop from "../components/Backdrop";

const Home = ({isShowLogin,handleLoginClick,isShowRegister,handleRegisterClick}) => {
  return (
    <div>
      <Navbar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}></Navbar>
      <div>
        <img src={herobg}/>
      </div>
      {isShowLogin && <Login></Login>}
      {isShowRegister && <Register></Register>}
      {isShowLogin && <Backdrop showModal = {handleLoginClick}></Backdrop>}
      {isShowRegister && <Backdrop showModal = {handleRegisterClick}></Backdrop>}
    </div>
  );
};

export default Home;
