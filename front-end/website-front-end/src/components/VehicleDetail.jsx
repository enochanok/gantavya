import React from "react";
import { useLocation } from "react-router-dom";
import { BsLuggage } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { BsDoorClosed } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import carbg from "../assets/car-removebg-preview.png";

import "./VehicleDetail.css";
import Swal from "sweetalert2";

function VehicleDetails() {
  const location = useLocation();
  const { carDetails } = location.state;

  function handelPayNow() {
    Swal.fire({
      title: "Are you sure you want to book and proceed?",
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      width: "400px",
      height: "400px",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Booking confirmed!", "", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Booking canceled", "", "info");
      }
    });
  }

  return (
    <div className="vehicle-details-container">
      <div className="image-section">
        <img src={carbg} alt="" className="vehicle-image" />
      </div>
      <div className="info-section">
        <h2>{carDetails.name}</h2>
        <h3>Specification</h3>
        <div>
          <p>
            <MdOutlineAirlineSeatReclineExtra color="black" /> Seats:{" "}
            {carDetails.seats}
          </p>
          <p>
            <BsLuggage style={{ color: "black" }} /> Luggage:{" "}
            {carDetails.luggage}
          </p>
          <p>
            {" "}
            <BsDoorClosed style={{ color: "black" }} /> Doors:{" "}
            {carDetails.doors}
          </p>
        </div>
        <h3>Features</h3>
        <p>
          <TbAirConditioning style={{ color: "black" }} /> Conditioner:{" "}
          {carDetails.airConditioning ? "Yes" : "No"}
        </p>
        <p>
          {" "}
          <BsFillFuelPumpFill style={{ color: "black" }} />
          Fuel Type: {carDetails.fueltype}
        </p>
      </div>
      <div className="cost-section">
        <h3>Estimated cost: {carDetails.price}</h3>

        <textarea
          name="msg"
          id="msg"
          placeholder="Any suggestions"
          rows="6"
        ></textarea>

        <button onClick={handelPayNow}>Pay now</button>
      </div>
    </div>
  );
}

export default VehicleDetails;
