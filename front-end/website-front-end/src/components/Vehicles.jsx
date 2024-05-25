import React, { useState, useEffect } from "react";
import "./Vehicles.css";
import { useNavigate } from "react-router-dom";

function Vehicles() {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const carsPerPage = 2;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/gantavyaAdmin/vehicle/fetchAllVehicle")
    // fetch("http://localhost:3000/template")
      .then((response) => response.json())
      .then((data) => {
        const searchedDataList = data.searchedDataList;
        setCars(searchedDataList);
        console.log(searchedDataList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClick = (car) => {
    const carDetails = {
      name: car.modelName,
      seats: car.seat,
      luggage: car.luggage,
      doors: car.door,
      fueltype: car.fuelType,
      vehicleType: car.vehicleType,
      price: car.dayPrice,
      image: car.image,
    };

    console.log(carDetails);
    navigate(`/Vehicles/${car.modelName}`, { state: { carDetails } });
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(cars.length / carsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * carsPerPage;
  const selectedCars = cars.slice(startIndex, startIndex + carsPerPage);

  return (
    <div className="Main_container">
      <div className="Secondary">
        <h2 className="mainh2">Select Vehicle</h2>
        {selectedCars.map((car, index) => (
          <div className="Select_main" key={index}>
            <div className="image_container">
              <img src={car.image} alt={car.name} />
            </div>
            <div className="Select_Vehicle">
              <h2>{car.modelName}</h2>
              <div className="vehicle_info">
                <div>
                  <p>Seats: {car.seat}</p>
                  <p>Luggage: {car.luggage}</p>
                  <p>Doors: {car.door}</p>
                </div>
                <div>
                  <p>Category: {car.vehicleType}</p>
                  <p>Fuel Type: {car.fuelType}</p>
                </div>
              </div>
            </div>
            <div className="Select_details">
              <h1>Estimated price</h1>
              <h2>Rs. {car.dayPrice}</h2>
              <button onClick={() => handleClick(car)}>Book now</button>
            </div>
          </div>
        ))}
        <div className="pagination">
          <button
            onClick={previousPage}
            disabled={currentPage === 0}
            className={currentPage === 0 ? "disabled-button" : ""}
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage >= Math.ceil(cars.length / carsPerPage) - 1}
            className={
              currentPage >= Math.ceil(cars.length / carsPerPage) - 1
                ? "disabled-button"
                : ""
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vehicles;
