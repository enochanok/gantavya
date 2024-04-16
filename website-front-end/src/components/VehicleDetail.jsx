import React from "react";
import { useLocation } from "react-router-dom";
import "./VehicleDetail.css";

function VehicleDetails() {
  const location = useLocation();
  const { carDetails } = location.state;

  return (
    <div className="vehicle-details">
      <div className="image-container">
        <img src={carDetails.image} alt="" />
      </div>
      <div className="vehicle-details-info">
        <h2>Vehicle Detail</h2>
        <h3>Specification</h3>
        <div>
          <p>
            <strong>Type||</strong> {carDetails.name}
          </p>
          <p>Seats: {carDetails.seats}</p>
          <p>Luggage: {carDetails.luggage}</p>
          <p>Doors: {carDetails.doors}</p>
        </div>
        <h3>Features</h3>
        <p>Conditioner: {carDetails.airConditioning ? "Yes" : "No"}</p>
        <p>Fuel Type: {carDetails.fueltype}</p>
      </div>
      <div className="vehicle-details-cost">
        <h2>Estimated cost: {carDetails.price}</h2>
        <button>Pay now</button>
      </div>
    </div>
  );
}

export default VehicleDetails;
