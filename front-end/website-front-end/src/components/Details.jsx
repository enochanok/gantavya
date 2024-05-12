import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Details.css";

const Input = () => {
  const navigate = useNavigate();

  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const handleFindButtonClick = () => {
    if (!pickLocation || !dropLocation || !pickDate || !dropDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
        width: "20em",
      });
      return;
    }

    if (pickDate > dropDate) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Drop date cannot be before pick-up date!",
        width: "20em",
      });
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
            onChange={(e) => {
              setPickDate(e.target.value);
              setDropDate("");
            }}
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
            min={pickDate}
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
