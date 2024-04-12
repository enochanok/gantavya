import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Signup from "../components/SignUp";
import Works from "../components/Works";
import Header from "../components/Header";

function Home() {
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
      <Header />
      <Works />
      <Footer />
    </div>
  );
}

export default Home;
