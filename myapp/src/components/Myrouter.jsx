import React from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotel/Hotels";
import Packages from "../pages/Packages";
import Cruises from "../pages/Cruises";
import Flights from "../pages/Flights";
import Login from "./Login";
import Register from "./Register";
import Backdrop from "./Backdrop";
import HotelDetails from "../pages/Hotel/HotelDetails";

const Myrouter = () => {
  const [isShowLogin,setIsShowLogin] = useState(false);
  const handleLoginClick = ()=>{
    setIsShowLogin((isShowLogin)=>!isShowLogin);
  }
  const [isShowRegister,setIsShowRegister] = useState(false);
  const handleRegisterClick = ()=>{
    setIsShowRegister((isShowRegister)=>!isShowRegister);
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar handleLoginClick={handleLoginClick} isShowLogin={isShowLogin} isShowRegister={isShowRegister} handleRegisterClick={handleRegisterClick}></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/cruises" element={<Cruises />} />
          <Route path="/flights" element={<Flights/>} />
          <Route path="/hotels/details" element={<HotelDetails />} />
        </Routes>
        {isShowLogin && <Login></Login>}
      {isShowRegister && <Register></Register>}
      {isShowLogin && <Backdrop showModal = {handleLoginClick}></Backdrop>}
      {isShowRegister && <Backdrop showModal = {handleRegisterClick}></Backdrop>}
      </BrowserRouter>
    </div>
  );
};

export default Myrouter;
