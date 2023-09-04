import React from 'react';
import "./Header.css";
import FlightBookingForm from './FlightBookingForm';
const Header = () => {
  return (
    <div className='flight-header-container'>
        <div className='flight-header-text-area'>
        <p>FLYING BUDGET</p>
        <p>We Are Very Reliable</p>
        <p>Professional, Experienced</p>
        <p><span>ThomasCook</span> is a versitile webiste empowring you</p>
        <p>full service airline offering <span>reduced fare</span> </p>
        </div>
        <div className='flight-form-container'>
      <FlightBookingForm></FlightBookingForm>
        </div>
    </div>
  )
}

export default Header
