import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import LoginForm from "./LoginForm";

const SignUp = ({ onClose }) => {
  const [full_name, setfull_name] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [full_nameError, setfull_nameError] = useState("");
  const [phone_numberError, setphone_numberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, setLogin] = useState(false);

  const handleSignIn = () => {
    axios
      .post("http://localhost:8080/gantavyaAdmin/user/createUser", {
        full_name: full_name,
        email: email,
        phone_number: phone_number,
        password: password,
      })
      .then((response) => {
        console.log(
          "Response data in JSON format:",
          JSON.stringify(response.data)
        );
        toast.success("Sign up successful!");
      })
      .catch((error) => {
        console.error("Sign In error:", error);
        toast.error("cannot sign up!");
      });
  };

  const handleSubmit = (e) => {
    let isValid = true;
    e.preventDefault();

    if (full_name.trim() === "") {
      setfull_nameError("Full Name is required");
      isValid = false;
    } else {
      setfull_nameError("");
    }

    if (phone_number.trim() === "") {
      setphone_numberError("Phone Number is required");
      isValid = false;
    } else if (isNaN(phone_number)) {
      setphone_numberError("Phone Number can only be numbers");
      isValid = false;
    } else if (phone_number.trim().length !== 10) {
      setphone_numberError("Phone Number should be 10 digits");
      isValid = false;
    } else {
      setphone_numberError("");
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
      console.log("Full Name:", full_name);
      console.log("Phone Number:", phone_number);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      setfull_name("");
      setphone_number("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      handleSignIn();
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

  function handelLogin() {
    setLogin(true);
  }

  return (
    <div className="sign-up-overlay" onClick={handleOverlayClick}>
      <div className="sign-up-container">
        {login ? (
          <LoginForm onClose={onClose} />
        ) : (
          <form className="sign-up-form" onSubmit={handleSubmit}>
            <div className="signup">
              <h2>Sign Up</h2>
              <h3 onClick={onClose}>X</h3>
            </div>
            <div className="sign-up-form-group">
              <label htmlFor="full-name">Full Name:</label>
              <input
                type="text"
                id="full-name"
                value={full_name}
                onChange={(e) => setfull_name(e.target.value)}
              />
              <span className="error-message">{full_nameError}</span>
            </div>
            <div className="sign-up-form-group">
              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="text"
                id="phone-number"
                value={phone_number}
                onChange={(e) => setphone_number(e.target.value)}
              />
              <span className="error-message">{phone_numberError}</span>
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
            <button type="submit" className="btn" onClick={handleSubmit}>
              Register
            </button>
            <p className="have-account">
              Already have an account?{" "}
              <button className="btn" onClick={handelLogin}>
                Login
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
