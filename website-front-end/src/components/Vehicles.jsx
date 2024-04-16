import React, { useState, useEffect } from "react";
import "./Vehicles.css";
import { useNavigate } from "react-router-dom";

function Vehicles() {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();

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

  const handleClick = (car) => {
    const carDetails = {
      name: car.name,
      seats: car.seats,
      luggage: car.luggage,
      doors: car.doors,
      fueltype: car.fueltype,
      airConditioning: car.airConditioning,
      price: car.price,
      image:car.image
    };

    console.log(carDetails);
    navigate(`/Vehicles/${car.name}`, { state: { carDetails } });
  };

  return (
    <div className="Main_container">
      <div className="Secondary">
        <h2 className="mainh2">Select Vehicle</h2>
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
                  <p>Conditioner: {car.airConditioning ? "Yes" : "No"}</p>
                  <p>Fuel Type: {car.fueltype}</p>
                </div>
              </div>
            </div>
            <div className="Select_details">
              <h1>Estimated price</h1>
              <h2>{car.price}</h2>
              <button onClick={() => handleClick(car)}>Book now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vehicles;
