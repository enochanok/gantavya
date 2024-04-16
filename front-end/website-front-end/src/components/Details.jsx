import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Details.css";

const Input = () => {
  const navigate = useNavigate();

  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const handleFindButtonClick = () => {
    if (!pickLocation || !dropLocation || !pickDate || !dropDate) {
      alert("Please fill out all required fields.");
      return;
    }

    if (pickDate > dropDate) {
      alert("Drop date cannot be in past");
      return;
    }
    const sendData = { pickLocation, dropLocation, pickDate, dropDate };
    navigate("/Vehicles", { state: sendData });
  };

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="pickupLocation">Pick Up Location:</label>
          <input
            type="text"
            required
            className="form-control"
            id="pickupLocation"
            placeholder="Enter Pickup Location"
            value={pickLocation}
            onChange={(e) => setPickLocation(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="dropLocation">Drop Off Location:</label>
          <input
            type="text"
            required
            className="form-control"
            id="dropLocation"
            placeholder="Enter Drop Off Location"
            value={dropLocation}
            onChange={(e) => setDropLocation(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="pickupDate">Pick Up Date:</label>
          <input
            type="date"
            required
            className="form-control"
            id="pickupDate"
            value={pickDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => setPickDate(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="dropDate">Drop Off Date:</label>
          <input
            type="date"
            required
            className="form-control"
            id="dropDate"
            value={dropDate}
            min={new Date().toISOString().split("T")[0]} // disables all the passed dates and allows the user to pick date from today
            onChange={(e) => setDropDate(e.target.value)}
          />
        </div>
      </div>
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
