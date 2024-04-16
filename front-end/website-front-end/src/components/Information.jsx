import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Information.css";

const BookingDetail = () => {
  const location = useLocation();
  const {
    pickLocation = "Kathmandu",
    dropLocation = "Pokhara",
    pickDate = "2020/1/1",
    dropDate = "2020/1/2",
  } = location.state || {};

  const navigate = useNavigate();

  const handleEditButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="booking-detail">
      <div className="title">
        <h2>Booking Detail</h2>
      </div>
      <p>From: {pickLocation}</p>
      <p>To: {dropLocation}</p>
      <p>Start Date: {pickDate}</p>
      <p>End Date: {dropDate}</p>
      <button className="edit-button" onClick={handleEditButtonClick}>
        Edit Detail
      </button>
    </div>
  );
};

export default BookingDetail;
