import React, { useState, useEffect } from "react";
import "./Vehicles.css";

function Vehicles() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/template")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="Main_container">
      <div className="Secondary">
        <h2>Select Vehicle</h2>
        {cars.map((car, index) => (
          <div className="Select_main" key={index}>
            <div className="image_container">
              <img src={car.image} alt={car.name} />
            </div>
            <div className="Select_Vehicle">
              <h2>{car.name}</h2>
              <div className="vehicle_info">
                <div>
                  <p>Seats: {car.seats}</p>
                  <p>Luggage: {car.luggage}</p>
                  <p>Doors: {car.doors}</p>
                </div>
                <div>
                  <p>Air Conditioner: {car.airConditioning ? "Yes" : "No"}</p>
                  <p>Fuel Type: {car.fueltype}</p>
                </div>
              </div>
            </div>
            <div className="Select_details">
              <h1>Estimated price</h1>
              <h2>{car.price}</h2>
              <button>Book now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
