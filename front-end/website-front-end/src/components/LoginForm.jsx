import React, { useState } from "react";
import "./LoginForm.css";
import Signup from "./SignUp.jsx";
import { RxCross2 } from "react-icons/rx";

const LoginForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Username:", username);
      console.log("Password:", password);
      setUsername("");
      setPassword("");
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const validate = () => {
    let isValid = true;

    if (username.length === 0) {
      setUsernameError("Username is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (/\s/.test(password)) {
      setPasswordError("Please remove white spaces");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Password must be 8 characters or more");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, and one digit"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
  };

  const handleSignUpClick = () => {
    setShowSignup(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-overlay" onClick={handleOverlayClick}>
      <div className="login-form-container">
        {showSignup ? (
          <Signup onClose={onClose} />
        ) : (
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login">
              <h2>Login</h2>
              <h3 onClick={onClose}>X</h3>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && (
                <span className="error" style={{ color: "red" }}>
                  {usernameError}{" "}
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                  />
                  <label
                    htmlFor="showPassword"
                    style={{ marginLeft: "8px", marginTop: "7px" }}
                  >
                    Show Password
                  </label>
                </div>
              </div>
              {passwordError && (
                <span className="error" style={{ color: "red" }}>
                  {passwordError}
                </span>
              )}
            </div>
            <button type="submit">Login</button>
            <div className="login-options">
              <a href="#" onClick={handleForgotPassword}>
                Forgot Password?
              </a>
              <span> | </span>
              <a href="#" onClick={handleSignUpClick}>
                Sign up
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
