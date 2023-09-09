import React from "react";
import herobg from "../assets/herobg.jpg";
import SearchArea from "../components/SearchArea";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* <Navbar handleLoginClick={handleLoginClick} handleRegisterClick={handleRegisterClick}></Navbar> */}
      <div class="h-screen bg-cover bg-no-repeat"
      style={{backgroundImage: "url(" + herobg + ")"}}>
        <SearchArea></SearchArea>
      </div>
    </motion.div>
  );
};

export default Home;
