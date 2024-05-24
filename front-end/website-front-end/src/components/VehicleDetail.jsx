// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { BsLuggage } from "react-icons/bs";
// import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
// import { BsDoorClosed } from "react-icons/bs";
// import { TbAirConditioning } from "react-icons/tb";
// import { BsFillFuelPumpFill } from "react-icons/bs";
// import carbg from "../assets/car-removebg-preview.png";

// import "./VehicleDetail.css";
// import Swal from "sweetalert2";

// function VehicleDetails() {
//   const location = useLocation();
//   const Navigation = useNavigate();
//   const { carDetails } = location.state;
//   const [track, setTrack] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem("status")) {
//       setTrack(true);
//     }
//   }, []);

//   function handelPayNow() {
//     Swal.fire({
//       title: "Are you sure you want to book and proceed?",
//       showCancelButton: true,
//       showConfirmButton: true,
//       confirmButtonText: "Confirm",
//       cancelButtonText: "Cancel",
//       confirmButtonColor: "green",
//       cancelButtonColor: "red",
//       width: "400px",
//       height: "400px",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Booking confirmed!", "", "success");
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         Swal.fire("Booking canceled", "", "info");
//       }
//     });
//   }

//   function handelBook() {
//     Swal.fire({
//       title: "Are you sure you want to book and proceed?",
//       showCancelButton: true,
//       showConfirmButton: true,
//       confirmButtonText: "Confirm",
//       cancelButtonText: "Cancel",
//       confirmButtonColor: "green",
//       cancelButtonColor: "red",
//       width: "400px",
//       height: "400px",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Navigation("/profile");
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         Swal.fire("Booking canceled", "", "info");
//       }
//     });
//   }

//   return (
//     <div className="vehicle-details-container">
//       <div className="image-section">
//         <img src={carbg} alt="" className="vehicle-image" />
//       </div>
//       <div className="info-section">
//         <h2>{carDetails.name}</h2>
//         <h3>Specification</h3>
//         <div>
//           <p>
//             <MdOutlineAirlineSeatReclineExtra color="black" /> Seats:{" "}
//             {carDetails.seats}
//           </p>
//           <p>
//             <BsLuggage style={{ color: "black" }} /> Luggage:{" "}
//             {carDetails.luggage}
//           </p>
//           <p>
//             {" "}
//             <BsDoorClosed style={{ color: "black" }} /> Doors:{" "}
//             {carDetails.doors}
//           </p>
//         </div>
//         <h3>Features</h3>
//         <p>
//           <TbAirConditioning style={{ color: "black" }} /> Conditioner:{" "}
//           {carDetails.airConditioning ? "Yes" : "No"}
//         </p>
//         <p>
//           {" "}
//           <BsFillFuelPumpFill style={{ color: "black" }} />
//           Fuel Type: {carDetails.fueltype}
//         </p>
//       </div>
//       <div className="cost-section">
//         <h3>Estimated cost: {carDetails.price}</h3>

//         <textarea
//           name="msg"
//           id="msg"
//           placeholder="Any suggestions"
//           rows="6"
//         ></textarea>
//         <button onClick={handelBook} style={{ background: "green" }}>
//           Book and Pay
//         </button>
//         <button onClick={handelPayNow}>Pay now</button>
//       </div>
//     </div>
//   );
// }

// export default VehicleDetails;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsLuggage, BsDoorClosed, BsFillFuelPumpFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import Swal from "sweetalert2";
import carbg from "../assets/car-removebg-preview.png";
import BackgroundApi from "./BackgroundApi";
import { Buffer } from "buffer"; // Import Buffer from buffer package

import "./VehicleDetail.css";

function VehicleDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { carDetails } = location.state;
  const [track, setTrack] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (localStorage.getItem("status")) {
      setTrack(true);
    }

    const fetchImage = async () => {
      try {
        const imageResponse = await BackgroundApi(carDetails.image);
        const base64Image = Buffer.from(imageResponse.data, "binary").toString(
          "base64"
        );
        setImageUrl(`data:image/png;base64,${base64Image}`);
      } catch (error) {
        console.error(
          "Failed to fetch image:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchImage();
  }, [carDetails.image]);

  function handlePayNow() {
    Swal.fire({
      title: "Are you sure you want to book and proceed?",
      showCancelButton: true,
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

  function handleBook() {
    Swal.fire({
      title: "Are you sure you want to book and proceed?",
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      width: "400px",
      height: "400px",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/profile");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Booking canceled", "", "info");
      }
    });
  }

  return (
    <div className="vehicle-details-container">
      <div className="image-section">
        {imageUrl ? <img src={imageUrl} alt="Car" /> : <p>Loading image...</p>}
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
          <BsFillFuelPumpFill style={{ color: "black" }} /> Fuel Type:{" "}
          {carDetails.fueltype}
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
        <button onClick={handleBook} style={{ background: "green" }}>
          Book and Pay
        </button>
        <button onClick={handlePayNow}>Pay now</button>
      </div>
    </div>
  );
}

export default VehicleDetails;
