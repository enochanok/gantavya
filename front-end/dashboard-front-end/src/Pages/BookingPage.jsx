import React from "react";
import Side from "../Components/Side";
import TopNav from "../Components/TopNav";

import "./Homepage.css";

import Booking from "../Components/Booking";

function BookingPage() {
  return (
    <div className="data-container">
      <TopNav />
      <div className="data-content">
        <Side />
        <div className="main-content">
          <Booking />
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
