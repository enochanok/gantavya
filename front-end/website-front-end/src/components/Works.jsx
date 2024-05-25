import React from "react";
import "./works.css";

const Works = () => {
  return (
    <div className="widget">
      <h2 className="centered">How it works?</h2>{" "}
      {/* Added class for centering */}
      <div className="grid">
        <div className="grid-item">
          <div className="step">1</div>
          <h3>Choose Your Favorite Vehicle</h3>
          <p>
            Select your preferred vehicle, tailored to your journey as per your
            requirement.
          </p>
        </div>
        <div className="grid-item">
          <div className="step">2</div>
          <h3>Make a Booking</h3>
          <p>
            You can make easy bookings through our user-friendly app or a simple
            phone call.
          </p>
        </div>
        <div className="grid-item">
          <div className="step">3</div>
          <h3>Pick-Up Location & Date</h3>
          <p>
            Select your nearest location with the date and time for your
            journey.
          </p>
        </div>
        <div className="grid-item">
          <div className="step">4</div>
          <h3>Sit Back & Relax</h3>
          <p>
            Sit back, relax, and let your safe and convenient journey begin with
            Spark Car.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
