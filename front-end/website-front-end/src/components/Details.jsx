import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Details.css";

const Input = () => {
  const navigate = useNavigate();
  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [dropDate, setDropDate] = useState("");
  const [pickLocationResults, setPickLocationResults] = useState([]);
  const [dropLocationResults, setDropLocationResults] = useState([]);

  const pickLocationRef = useRef();
  const dropLocationRef = useRef();

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

  const fetchData = (value, setResults) => {
    fetch(
      `https://api.baato.io/api/v1/search?key=bpk.lk13VHHTkngLRnhTXX0fwpf3C6xtEawyCZZTz877OArS&q=${value}&limit=5`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handlePickLocationChange = (e) => {
    const value = e.target.value;
    setPickLocation(value);
    if (value) {
      fetchData(value, setPickLocationResults);
    } else {
      setPickLocationResults([]);
    }
  };

  const handleDropLocationChange = (e) => {
    const value = e.target.value;
    setDropLocation(value);
    if (value) {
      fetchData(value, setDropLocationResults);
    } else {
      setDropLocationResults([]);
    }
  };

  const handlePickLocationSelect = (location) => {
    setPickLocation(location);
    setPickLocationResults([]);
  };

  const handleDropLocationSelect = (location) => {
    setDropLocation(location);
    setDropLocationResults([]);
  };

  const handleClickOutside = (event) => {
    if (
      pickLocationRef.current &&
      !pickLocationRef.current.contains(event.target)
    ) {
      setPickLocationResults([]);
    }
    if (
      dropLocationRef.current &&
      !dropLocationRef.current.contains(event.target)
    ) {
      setDropLocationResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="content">
      <div className="row">
        <div className="col-md-6" ref={pickLocationRef}>
          <label htmlFor="pickupLocation">Pick Up Location:</label>
          <input
            type="text"
            required
            className="form-control"
            id="pickupLocation"
            placeholder="Enter Pickup Location"
            value={pickLocation}
            onChange={handlePickLocationChange}
          />
          {pickLocationResults.length > 0 && (
            <ul className="dropdown">
              {pickLocationResults.map((result, index) => (
                <li
                  key={index}
                  onClick={() => handlePickLocationSelect(result.name)}
                >
                  {result.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-6" ref={dropLocationRef}>
          <label htmlFor="dropLocation">Drop Off Location:</label>
          <input
            type="text"
            required
            className="form-control"
            id="dropLocation"
            placeholder="Enter Drop Off Location"
            value={dropLocation}
            onChange={handleDropLocationChange}
          />
          {dropLocationResults.length > 0 && (
            <ul className="dropdown">
              {dropLocationResults.map((result, index) => (
                <li
                  key={index}
                  onClick={() => handleDropLocationSelect(result.name)}
                >
                  {result.name}
                </li>
              ))}
            </ul>
          )}
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
