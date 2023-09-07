import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotel/Hotels";
import Packages from "../pages/Packages";
import Cruises from "../pages/Cruises";
import Flights from "../pages/Flights";
import HotelDetails from "../pages/Hotel/HotelDetails";

const Myrouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/cruises" element={<Cruises />} />
          <Route path="/flights" element={<Flights/>} />
          <Route path="/hotels/details" element={<HotelDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Myrouter;
