import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Details.css";

const Input = () => {
  const navigate = useNavigate();

  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");

  const pickLocationRef = useRef(null);
  const dropLocationRef = useRef(null);
  // adding AutoComplete features for places based on geocode
  useEffect(() => {
    const loadAutocomplete = () => {
      if (window.google) {
        const options = {
          types: ["geocode"], 
          componentRestrictions: { country: "NP" } // Restrict to Nepal
        };

        const pickAutocomplete = new window.google.maps.places.Autocomplete(
          pickLocationRef.current,
          options
        );
        pickAutocomplete.addListener("place_changed", () => {
          const place = pickAutocomplete.getPlace();
          const address = formatAddress(place);
          setPickLocation(address);
        });

        const dropAutocomplete = new window.google.maps.places.Autocomplete(
          dropLocationRef.current,
          options
        );
        dropAutocomplete.addListener("place_changed", () => {
          const place = dropAutocomplete.getPlace();
          const address = formatAddress(place);
          setDropLocation(address);
        });
      } else {
        setTimeout(loadAutocomplete, 100); // Retry after 100ms
      }
    };
    // filtering choosen address
    const formatAddress = (place) => {
      const addressComponents = place.address_components;
      const formattedAddress = addressComponents
        .filter(component => 
          !component.types.includes('postal_code') && 
          (component.types.includes('street_number') || 
           component.types.includes('route') || 
           component.types.includes('locality') || 
           component.types.includes('sublocality') 
           )
        )
        .map(component => component.long_name)
        .join(', ');
      return formattedAddress;
    };

    loadAutocomplete();
  }, []);

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
            ref={pickLocationRef}
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
            ref={dropLocationRef}
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
