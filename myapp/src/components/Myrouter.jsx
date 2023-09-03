import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Hotels from "../pages/Hotels";
import Packages from "../pages/Packages";
import Cruises from "../pages/Cruises";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Myrouter;
