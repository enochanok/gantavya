import React, { useState } from "react";
import "./CreateVehicle.css";
import Axios from "./Axios";

const ApiKey = "http://localhost:8080/gantavyaAdmin/vehicle/modifyVehicle";
const ModifyVehicle = ({ onCancel, product }) => {
  const [data, setData] = useState({
    model_name: product.modelName || "",
    vehicle_type: product.vehicleType || "",
    number_plate: product.numberPlate || "",
    seat: product.seat || "",
    door: product.door || "",
    luggage: product.luggage || "",
    fuel_type: product.fuelType || "",
    day_price: product.dayPrice || "",
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
          <h2>Add Vehicle</h2>
        </div>
        <form>
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
              <label htmlFor="seat">Seats:</label>
              <input
                  type="number"
                  id="seat"
                  name="seat"
                  value={data.seat}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="door">Doors:</label>
              <input
                  type="number"
                  id="door"
                  name="door"
                  value={data.door}
                  onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="luggage">Luggage Capacity:</label>
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
                <option value="electric">Electric</option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
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
              <label htmlFor="Image">Image:</label>
              <input
                  type="file"
                  id="image"
                  name="image"
                  value=""
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

export default ModifyVehicle;