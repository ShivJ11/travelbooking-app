import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { useState } from 'react';

function App() {
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
      <Home handleLoginClick={handleLoginClick} isShowLogin={isShowLogin} isShowRegister={isShowRegister} handleRegisterClick={handleRegisterClick}></Home>
    </div>
  );
}

export default App;
