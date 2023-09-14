import React, { useState } from "react";
import "../Flight Page Component/Header.css";
import "./CruiseHeader.css";
import CruiseBookingForm from "./CruiseBookingForm";
const CruiseHeader = () => {
  const [Cruise, setCruise] = useState([]);
  return (
    <>
      <div className="flight-header-container cruise-header-container">
        <div className="flight-header-text-area">
          <p>CRUISE IN BUDGET</p>
          <p>We Are Very Reliable</p>
          <p>Professional, Experienced</p>
          <p>
            <span>ThomasCook</span> is a versitile webiste empowring you
          </p>
          <p>
            full service cruise offering <span>reduced fare</span>{" "}
          </p>
        </div>
        <div className="flight-form-container">
          <CruiseBookingForm setCruise={setCruise}></CruiseBookingForm>
        </div>
      </div>
      <div className="cruise-data-container">
        {Cruise.map((arr, index) => {
          return (
            <div class="card" style={{width: "18rem"}} key={index}>
              <img src={arr.cruiseImageUrl} class="card-img-top" alt="..." />
              <div class="card-body">
                <h4 class="card-title fw-bold h5">{arr.cruiseName}</h4>
                <p class="card-text">
                Departure City : {arr.departureCity}
                </p>
                <p class="card-text">
                Destination City : {arr.destinationCity}
                </p>
                <p class="card-text">
                  Suite Price : {arr.suitePrice}
                </p>  
                <a href="#" class="btn btn-primary mt-3">
                  Book
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="top-destination-conatainer">
        <div className="top-dest-section">
          <div class="dd_heading">
            <h2 class="text-center">Top India Destination for you</h2>
            <h3 class="text-center">
              Thomas Cook enables customers to efficiently book flights to
              approximately 70 plus destinations in the country. The top
              domestic destinations include Ahmadabad, Port-Blair, Delhi,
              Guwahati, Cochin, Goa, Bagdogra and Jaipur. When it comes to
              choosing domestic flights, one should consider the following
              factors: preference of airline, class of travel, price, baggage
              allowance, food and on-board entertainment. The aforementioned
              factors will aid in making the most optimal decision.
            </h3>
          </div>
          <main class="page-content">
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Ahemdabad</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Port Blair</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Delhi</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Jaipur</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </main>
          <main class="page-content">
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Ahemdabad</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Port Blair</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Delhi</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Jaipur</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="top-destination-conatainer">
        <div className="top-dest-section">
          <div class="dd_heading">
            <h2 class="text-center">Top International Destination for you</h2>
            <h3 class="text-center">
              Thomas Cook enables customers to seamlessly book flights to
              approximately 100 plus destinations in the world. The top
              international destinations include Dubai, Singapore, Bangkok,
              Istanbul, Kuala Lumpur, Bali, Mauritius and Male (Maldives). When
              it comes to choosing international flights, one must consider the
              following factors: preference of airline, class of travel,
              duration of flight, route, transit stops, wait time, price,
              baggage allowance, food and on-board entertainment, landing
              airport and ground transit. The aforementioned factors will aid in
              making the most optimal decisions.
            </h3>
          </div>
          <main class="page-content">
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Dubai</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">London</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">New York</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Switzerland</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </main>
          <main class="page-content">
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Bali</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Bandkok</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Singapore</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
            <div class="d_card">
              <div class="content">
                <h2 class="heading">Istanbul</h2>
                <p class="data-content">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="flight-conclusion">
        <h1>
          Book International and Domestic Flight Tickets from the Comfort of
          your home
        </h1>
        <p>
          Over the last decade, there has been a significant spike in the number
          of Indian flyers. Owing to the reach of the internet, people are
          becoming aware of the various global tourist locations, and the
          internet has also made flight ticket booking child’s play. Forget the
          hassle of going to your travel dealer; you can now book flights online
          at Thomas Cook at the most competitive prices. If you are looking to
          make flight bookings, then we’ve great flight offers for you! Whether
          domestic or international, you can browse through our wide range of
          airlines, compare their prices, and choose the one that fits your
          bill. That’s not all, you can set a price alert and we’ll notify you
          when the prices drop, making travel even more cost-effective. You can
          also set your preferences and look at direct flights only or book your
          connecting flight ticket. If you are looking for a bargain deal on
          flight bookings, then you can use our lowest fare calculator and know
          the dates in the next 12 months, when the flight tickets would be the
          cheapest. If you are a flexible traveler, then this option will help
          you save thousands. Thomas Cook aims at making flight bookings
          seamless and faster. Whether you’re in an elevator or in the train,
          you can book flights online on the Thomas Cook website.
        </p>
      </div>
    </>
  );
};

export default CruiseHeader;
