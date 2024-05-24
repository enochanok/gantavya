import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import LoginForm from "../components/LoginForm";

const Layout = ({ children }) => {
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
      <main>{children}</main>
    </>
  );
};

export default Layout;
