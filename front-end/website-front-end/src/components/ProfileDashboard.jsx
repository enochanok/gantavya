import React, { useState } from "react";
import "./Profile.css";
import PaymentForm from "./PaymentComponent";

const ProfileDashboard = () => {
  const [showForm, setShowForm] = useState(false);

  const onPay = () => {
    setShowForm(!showForm);
  };

  const onClose = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="maincontainer-profile">
      <div className="sub-contain">
        <div className="query-profile">
          <h4 className="pt-2">My Bookings</h4>
          <div className="main-subcontain-div">
            <div className="contain-div">
              <div className="car-pic">
                <img
                  style={{
                    display: "block",
                    width: "150px",
                    height: "90px",
                  }}
                  src="https://sparkcar.org/_next/image?url=https%3A%2F%2Fsparkapi.sparkcar.org%2FUploads%2Fvehicle%2FMnokVeFjpAS0KNTeeZO8cPTB90KaEOm2.png&w=384&q=75"
                  alt=""
                />
              </div>
              <div className="car-title">Vehicle</div>
              <div>
                <div className="btn-section">
                  <div className="cancel-btn">
                    <button>Cancel</button>
                  </div>
                  <div className="pay-btn">
                    <button onClick={onPay}>Pay</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="contain-div">
              <div className="car-module">
                <span className="text-primary">Corolla</span>{" "}
                <span className="text-secondary"> Booked</span>
              </div>
              <div className="contain-div2">
                <span>Start Date: </span>{" "}
                <span className="class-secondary"> 09 May, 2024</span>
              </div>
              <div className="contain-div2">
                <span>End Date: </span>{" "}
                <span className="class-secondary"> 10 May, 2024</span>
              </div>
              <div className="contain-div2">
                <span>Total Amount: </span>{" "}
                <span className="class-secondary"> NPR 13,000</span>
              </div>
            </div>
            <div className="contain-div">
              <div className="contain-div3">
                <span>Payment Status: </span>
                <span className="text-secondary-2"> Un Paid</span>
              </div>
              <div className="contain-div3">
                <span>From:</span>
                <span className="class-secondary"> Kathmandu, Nepal</span>
              </div>
              <div className="contain-div3">
                <span>To:</span>
                <span className="class-secondary"> Lalitpur, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showForm && <PaymentForm onClose={onClose} />}
    </div>
  );
};

export default ProfileDashboard;
