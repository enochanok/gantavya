import React from "react";

const Error = ({ username, password }) => {
  const errors = {};

  if (!username.trim()) {
    errors.username = "Username is required";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  }

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  if (!validatePassword(password)) {
    errors.password =
      "Password must contain at least one capital letter, one small letter, one number, and be at least 8 characters long";
  }

  return (
    <div className="error-container">
      {Object.keys(errors).map((key) => (
        <span key={key} className="error-message">
          {errors[key]}
        </span>
      ))}
    </div>
  );
};

export default Error;
