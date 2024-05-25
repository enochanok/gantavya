import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import SignUp from "../components/SignUp";

function About() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const handleSignInClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleSignUpClick = () => {
    setShowSignupForm(!showSignupForm);
  };
  return (
    <>
      <Navbar onSignInClick={handleSignInClick} />
      {showLoginForm && <LoginForm onClose={handleSignInClick} />}
      {showSignupForm && <Signup onClose={handleSignUpClick} />}
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
