import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Details.css";

const Input = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [pickLocation, SetPickLocation] = useState("");
  const [dropLocation, SetDropLocation] = useState("");
  const [pickDate, SetPickDate] = useState("");
  const [dropDate, SetDropDate] = useState("");

  const handleFindButtonClick = () => {
    navigate("/Vehicles");
  };

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="pickupLocation">Pick Up Location:</label>
          <input
            type="text"
            className="form-control"
            id="pickupLocation"
            placeholder="Enter Pickup Location"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="dropLocation">Drop Off Location:</label>
          <input
            type="text"
            className="form-control"
            id="dropLocation"
            placeholder="Enter Drop Off Location"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="pickupDate">Pick Up Date:</label>
          <input type="date" className="form-control" id="pickupDate" />
        </div>
        <div className="col-md-6">
          <label htmlFor="dropDate">Drop Off Date:</label>
          <input type="date" className="form-control" id="dropDate" />
        </div>
      </div>
      {/* Call handleFindButtonClick when Find button is clicked */}
      <button
        type="button"
        className="btn btn-primary"
        id="findButton"
        onClick={handleFindButtonClick}
      >
        Find
      </button>
    </div>
  );
};

export default Input;
