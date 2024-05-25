import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUp";
import Works from "../components/Works";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import VehicleDetails from "../components/VehicleDetail";

function VehicleDetailPage() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const handleSignInClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSignUpClick = () => {
    setShowSignupForm(!showSignupForm);
  };
  return (
    <div>
      <Navbar onSignInClick={handleSignInClick} />
      {showLoginForm && <LoginForm onClose={handleSignInClick} />}
      {showSignupForm && <Signup onClose={handleSignUpClick} />}

      <VehicleDetails />
      <Footer />
    </div>
  );
}

export default VehicleDetailPage;
