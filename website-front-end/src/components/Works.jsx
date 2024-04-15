import React from "react";
import "./works.css";

const Works = () => {
  return (
    <div className="how-it-works-container">
      <h1>How It Works</h1>
      <div className="step">
        <div className="step-number">1</div>
        <p>Step 1: Choose your vehicel</p>
      </div>
      <div className="step">
        <div className="step-number">2</div>
        <p>Step 2:Make a booking</p>
      </div>
      <div className="step">
        <div className="step-number">3</div>
        <p>Step 3:Set pick up date and location</p>
      </div>

      <div className="step">
        <div className="step-number">4</div>
        <p>Step 4:sit and relax</p>
      </div>
    </div>
  );
};

export default Works;
