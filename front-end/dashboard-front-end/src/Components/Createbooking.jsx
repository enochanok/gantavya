import React, { useState } from "react";
import "./CreateVehicle.css";
import Axios from "./Axios";

const ApiKey = "http://localhost:8080/gantavyaAdmin/booking/creatingBooking";
const Createbooking = ({ onCancel }) => {
  const [data, setData] = useState({
    userId: "",
    vehicleId: "",
    startDate: "",
    endDate: "",
    bookingStatus: "",
    paymentStatus: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleCreate = () => {
    Axios(data, ApiKey);
  };

  return (
    <div className="vehicle-details">
      <div>
        <h2>Add Booking</h2>
      </div>
      <form>
        <div className="top-row">
          <div className="form-group">
            <label htmlFor="vehicleId">Vehicle id:</label>
            <input
              type="number"
              id="vehicleId"
              name="vehicleId"
              value={data.vehicleId}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="userId">user id:</label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={data.userId}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="startDate">start date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={data.startDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="middle-row">
          <div className="form-group">
            <label htmlFor="endDate">End date:</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={data.endDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bookingStatus">booking status:</label>
            <input
              type="text"
              id="bookingStatus"
              name="bookingStatus"
              value={data.bookingStatus}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="paymentStatus">payment status:</label>
            <input
              type="text"
              id="paymentStatus"
              name="paymentStatus"
              value={data.paymentStatus}
              onChange={handleChange}
            />
          </div>
        </div>

        <button onClick={handleCreate}>Create</button>
        <button
          onClick={() => {
            onCancel(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Createbooking;
