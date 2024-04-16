import React, { useState } from "react";
import "./Signup.css";

const SignUp = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (fullName.trim() === "") {
      setFullNameError("Full Name is required");
      isValid = false;
    } else {
      setFullNameError("");
    }

    if (phoneNumber.trim() === "") {
      setPhoneNumberError("Phone Number is required");
      isValid = false;
    } else if (isNaN(phoneNumber)) {
      setPhoneNumberError("Phone Number can only be numbers");
      isValid = false;
    } else if (phoneNumber.trim().length != 10) {
      setPhoneNumberError("Phone Number should be 10 digits");
      isValid = false;
    } else {
      setPhoneNumberError("");
    }

    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.trim().length < 8) {
      setPasswordError("Password must be 8 characters or more");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one digit, and one special character"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (confirmPassword.trim() === "") {
      setConfirmPasswordError("Confirm Password is required");
      isValid = false;
    } else if (confirmPassword.trim() !== password.trim()) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (isValid) {
      console.log("Form submitted successfully!");
      console.log("Full Name:", fullName);
      console.log("Phone Number:", phoneNumber);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      onClose();
    } else {
      console.log("Form has validation errors.");
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="sign-up-overlay" onClick={handleOverlayClick}>
      <div className="sign-up-container">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <div className="signup">
            <h2>signup</h2>
            <h3 onClick={onClose}>X</h3>
          </div>
          <div className="sign-up-form-group">
            <label htmlFor="full-name">Full Name:</label>
            <input
              type="text"
              id="full-name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <span className="error-message">{fullNameError}</span>
          </div>
          <div className="sign-up-form-group">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="text"
              id="phone-number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span className="error-message">{phoneNumberError}</span>
          </div>
          <div className="sign-up-form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="error-message">{emailError}</span>
          </div>
          <div className="sign-up-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="error-message">{passwordError}</span>
          </div>
          <div className="sign-up-form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="error-message">{confirmPasswordError}</span>
          </div>
          <div className="show-password">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              style={{ marginRight: "2px" }}
            />
            Show
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <p className="have-account">
            Already have an account?{" "}
            <button className="btn" onClick={onClose}>
              Sign In
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
