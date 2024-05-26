import React, { useState } from "react";
import "./CreateVehicle.css";
// import Axios from "./Axios";
import Axios from "axios";

const ApiKey = "http://localhost:8080/gantavyaAdmin/vehicle/createVehicle";
const VehicleDetails = ({ onCancel }) => {
  const [data, setData] = useState({
    model_name: "",
    vehicle_type: "",
    number_plate: "",
    seat: "",
    door: "",
    luggage: "",
    fuel_type: "",
    day_price: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleCreate = () => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    if (image) {
      formData.append("image", image);
    }


    Axios.post(ApiKey, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'Content-Type' will be set automatically to 'multipart/form-data' including the boundary
      },
    })
      .then((response) => {
        console.log("Vehicle created successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the vehicle:", error);
      });
  };

  return (
    <div className="vehicle-details">
      <div>
        <h2>Add Vehicle</h2>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="top-row">
          <div className="form-group">
            <label htmlFor="model_name">Model Name:</label>
            <input
              type="text"
              id="model_name"
              name="model_name"
              value={data.model_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicle_type">Vehicle Type:</label>
            <input
              type="text"
              id="vehicle_type"
              name="vehicle_type"
              value={data.vehicle_type}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number_plate">Number Plate:</label>
            <input
              type="text"
              id="number_plate"
              name="number_plate"
              value={data.number_plate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="middle-row">
          <div className="form-group">
            <label htmlFor="seat">Seat:</label>
            <input
              type="number"
              id="seat"
              name="seat"
              value={data.seat}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="door">Door:</label>
            <input
              type="number"
              id="door"
              name="door"
              value={data.door}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="luggage">Luggage:</label>
            <input
              type="number"
              id="luggage"
              name="luggage"
              value={data.luggage}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="bottom-row">
          <div className="form-group">
            <label htmlFor="fuel_type">Fuel Type:</label>
            <select
              id="fuel_type"
              name="fuel_type"
              value={data.fuel_type}
              onChange={handleChange}
            >
              <option value="Electric">Electric</option>
              <option value="Diesel">Diesel</option>
              <option value="Petrol">Petrol</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="day_price">Day Price:</label>
            <input
              type="number"
              id="day_price"
              name="day_price"
              value={data.day_price}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/x-png,image/jpg,image/jpeg"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <button type="button" onClick={handleCreate}>
          Create
        </button>
        <button
          type="button"
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

export default VehicleDetails;
