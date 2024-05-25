import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUp";
import Works from "../components/Works";
import Header from "../components/Header";
import Vehicles from "../components/Vehicles";
import Information from "../components/Information";

function VehicelList() {
  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="vehicles-container">
          <Information />
        </div>
        <div className="information-container">
          <Vehicles />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default VehicelList;
