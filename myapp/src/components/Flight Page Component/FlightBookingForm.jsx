import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import './FlightBookingForm.css';
const FlightBookingForm = () => {
  const[openAccordian,setOpenAccordian] = useState(false);
  const toggleAccordian = ()=>{
    setOpenAccordian((prev)=>!prev)
  }
  let [adultCount, setAdultCount] = useState(0);

  function incrementCount() {
    adultCount = adultCount + 1;
    setAdultCount(adultCount);
  }
  function decrementCount() {
    
    adultCount = adultCount - 1;
    if(adultCount<0) adultCount=0;
    setAdultCount(adultCount);
  }
  let [childCount, setChildCount] = useState(0);

  function incrementChildCount() {
    childCount = childCount + 1;
    setChildCount(childCount);
  }
  function decrementChildCount() {
    childCount = childCount - 1;
    if(childCount<0) childCount=0;
    setChildCount(childCount);
  }
  let [infantCount, setInfantCount] = useState(0);
  function incrementInfantCount() {
    infantCount = infantCount + 1;
    setInfantCount(infantCount);
  }
  function decrementInfantCount() {
    infantCount = infantCount - 1;
    if(infantCount<0) infantCount=0;
    setInfantCount(infantCount);
  }
  return (
    <>
    <div className='flight-form'>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> <h1>Book Cheap <span>Flights</span></h1></div>
        <div>
            <div className='flight-input'>
                <div>
            <input type="radio" id="html" name="trip-type" value="One Way"/>
           <p for="html">One Way</p></div>
           <div>
            <input type="radio" id="css" name="trip-type" value="Round Trip"/>
              <p for="css">Round Trip</p></div></div></div>
    <form action="" className='flight-input-form'>
      <div> <i class="fa fa-plane" aria-hidden="true"></i> <input type='text' placeholder='Departure'></input></div>
    
      <div> <i class='fas fa-map-marked-alt'></i> <input type='text' placeholder='Arrival'></input></div>
      <div> <i class="fa fa-calendar" aria-hidden="true"></i> <input type='date' placeholder='Depart on'></input></div>
      <div onClick={toggleAccordian}> <i class="fa-solid fa-people-group"></i> <input type='text' placeholder='Travellers' disabled ></input>
     </div>
     {openAccordian && <form className='flight-accordian'>
        
       <div style={{display:"flex"}}><p>Adult</p> <button type="button" onClick={incrementCount}>+</button>
      <div>{adultCount}</div>
      <button type="button" onClick={decrementCount}>-</button></div>
      <div style={{display:"flex"}}><p>Child</p> <button type="button" onClick={incrementChildCount}>+</button>
      <div>{childCount}</div>
      <button type="button" onClick={decrementChildCount}>-</button></div>
      <div style={{display:"flex"}}><p>Infant</p> <button type="button" onClick={incrementInfantCount}>+</button>
      <div>{infantCount}</div>
      <button type="button" onClick={decrementInfantCount}>-</button></div>
      
       
        </form>}
     
      <button>Find Flight</button>
      
      
      </form>
      </div>
      
    </>
  )
}

export default FlightBookingForm
