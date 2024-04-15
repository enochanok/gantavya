import React from "react";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUp";
import Works from "../components/Works";
import Header from "../components/Header";
import Vehicles from "../components/Vehicles";

function VehicelList() {
  return (
    <div>
      <Navbar />
      <Vehicles />

      <Footer />
    </div>
  );
}

export default VehicelList;
