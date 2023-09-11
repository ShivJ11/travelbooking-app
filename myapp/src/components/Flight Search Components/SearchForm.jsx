import React from "react";
import "./SearchForm.css"; // Updated CSS file name
import { Card } from "@mui/material";
import { citiesList } from "../../static/citiesList";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  tripType: yup.string().required(),
  departureCity: yup
    .string()
    .notOneOf(
      [yup.ref("arrivalCity")],
      "Departure city cannot be the same as arrival city"
    )
    .required(),
  arrivalCity: yup
    .string()
    .notOneOf(
      [yup.ref("departureCity")],
      "Arrival city cannot be the same as departure city"
    )
    .required(),
  departDate: yup.string().required(),
  numberOfTravelers: yup
    .number()
    .positive()
    .required(),
});

function SearchForm({ setFlights }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    const bookingType = data.tripType;
    const departureCity = data.departureCity;
    const arrivalCity = data.arrivalCity;
    const date = data.departDate;

    // Construct the URL with the parameters
    const apiUrl = `http://localhost:5147/api/PublicData/filteredFlightDetails?booking_type=${bookingType}&departure_city=${departureCity}&arrival_city=${arrivalCity}&date=${date}`;
    try {
      const result = await axios.get(apiUrl);
      setFlights(result.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Card variant="outlined" sx={{ p: 3, mb: 4, borderRadius: 0 }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="horizontal-flight-input-form"
      >
        <div className="radio">
          <div className="horizontal-flight-input">
            <div>
              <input
                type="radio"
                id="html"
                name="trip-type"
                value="One Way"
                {...register("tripType")}
              />
              <label htmlFor="html">One Way</label>
            </div>
            <div>
              <input
                type="radio"
                id="css"
                name="trip-type"
                value="Round Trip"
                {...register("tripType")}
              />
              <label htmlFor="css">Round Trip</label>
            </div>
          </div>
        </div>
        <div className="main-form-flex">
          <div className="horizontal-flight-input-form-div">
            <i className="fa fa-plane input-icon" aria-hidden="true"></i>
            <select
              className="horizontal-depart-arrival"
              {...register("departureCity")}
            >
              <option value="" disabled selected>
                --Departure--
              </option>
              {citiesList.map((city, index) => (
                <option key={index} value={city.name}>
                  {`${city.name} (${city.code})`}
                </option>
              ))}
            </select>
            {errors.departureCity && (
              <span className="error-message">
                {errors.departureCity.message}
              </span>
            )}
          </div>
          <div className="horizontal-flight-input-form-div">
            <i className="fas fa-map-marked-alt input-icon"></i>
            <select
              className="horizontal-depart-arrival"
              {...register("arrivalCity")}
            >
              <option value="" disabled selected>
                --Arrival--
              </option>
              {citiesList.map((city, index) => (
                <option key={index} value={city.name}>
                  {`${city.name} (${city.code})`}
                </option>
              ))}
            </select>
            {errors.arrivalCity && (
              <span className="error-message">
                {errors.arrivalCity.message}
              </span>
            )}
          </div>
          <div className="horizontal-flight-input-form-div">
            <i className="fa fa-calendar input-icon" aria-hidden="true"></i>
            <input
              placeholder="Depart On"
              type="date"
              {...register("departDate")}
            />
            {errors.departDate && (
              <span className="error-message">{errors.departDate.message}</span>
            )}
          </div>
          <div className="horizontal-flight-input-form-div">
            <i className="fa-solid fa-people-group input-icon"></i>
            <input
              type="number"
              placeholder="Travellers"
              {...register("numberOfTravelers")}
            />
            {errors.numberOfTravelers && (
              <span className="error-message">
                {errors.numberOfTravelers.message}
              </span>
            )}
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

export default SearchForm;
