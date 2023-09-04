import React from 'react'
import './FlightBookingForm.css';
const FlightBookingForm = () => {
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
    <form action="" >
        
      </form>
      </div>
      
    </>
  )
}

export default FlightBookingForm
