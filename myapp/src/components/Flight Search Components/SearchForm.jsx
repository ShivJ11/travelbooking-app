import React from "react";
import "./SearchForm.css"; // Updated CSS file name
import { Card, Typography } from "@mui/material";

const cities = ["City 1", "City 2", "City 3"];

function SearchForm() {
  return (
    <Card variant="outlined" sx={{ p: 3, mb: 4, borderRadius: 0 }} >
      <form action="" className="horizontal-flight-input-form">
        <div class="radio">
          <div className="horizontal-flight-input">
            <div>
              <input type="radio" id="html" name="trip-type" value="One Way" />
              <p for="html">One Way</p>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="trip-type"
                value="Round Trip"
              />
              <p for="css">Round Trip</p>
            </div>
          </div>
        </div>
        <div class="main-form-flex">
          <div className="horizontal-flight-input-form-div">
            <i className="fa fa-plane input-icon" aria-hidden="true"></i>
            <select className="depart-arrival">
              <option key="default" value="" disabled selected>
                --Departure--
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="horizontal-flight-input-form-div">
            <i className="fas fa-map-marked-alt input-icon"></i>
            <select className="horizontal-depart-arrival">
              <option key="default" value="" disabled selected>
                --Arrival--
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="horizontal-flight-input-form-div">
            <i className="fa fa-calendar input-icon" aria-hidden="true"></i>
            <input type="date" placeholder="Depart on" />
          </div>
          <div className="horizontal-flight-input-form-div">
            <i className="fa-solid fa-people-group input-icon"></i>
            <input type="number" placeholder="Travellers" />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="submit" className="horizontal-flight-submit-btn">
              Search Flights
            </button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default SearchForm; // Updated component name
