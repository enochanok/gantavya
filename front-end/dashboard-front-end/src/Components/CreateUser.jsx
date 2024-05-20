import React, { useState } from "react";
import "./CreateVehicle.css";
import Axios from "./Axios";

const ApiKey = "http://localhost:8080/gantavyaAdmin/user/createUser";

const CreateUser = ({ onclose }) => {
  const [data, setData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });

    if (name === "full_name") {
      setErrors({ ...errors, full_name: value ? "" : "Full name is required" });
    } else if (name === "email") {
      setErrors({
        ...errors,
        email: value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? ""
          : "Invalid email address",
      });
    } else if (name === "phone_number") {
      setErrors({
        ...errors,
        phone_number:
          value.length === 10 ? "" : "Phone number must be 10 digits",
      });
    } else if (name === "password") {
      setErrors({
        ...errors,
        password: value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/)
          ? ""
          : value.length > 8
          ? "Include a symbol,number and capital word"
          : "Password should be greater than 8",
      });
    }
  };

  const handleCreate = () => {
    if (
      !data.full_name ||
      !data.email ||
      !data.phone_number ||
      !data.password
    ) {
      alert("Please fill in all fields");
      return;
    }

    Axios(data, ApiKey);
    console.log(data);
  };

  return (
    <div className="vehicle-details">
      <div>
        <h2>Add user</h2>
      </div>
      <form>
        <div className="top-row">
          <div className="form-group">
            <label htmlFor="full_name">Full name:</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={data.full_name}
              onChange={handleChange}
            />
            {errors.full_name && (
              <p style={{ color: "red", fontSize: "14px" }}>
                {errors.full_name}
              </p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              required
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
        </div>
        <div className="middle-row">
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone_number">Phone number:</label>
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              value={data.phone_number}
              onChange={handleChange}
            />
            {errors.phone_number && (
              <p style={{ color: "red" }}>{errors.phone_number}</p>
            )}
          </div>
        </div>
        <button type="button" onClick={handleCreate}>
          Create
        </button>
        <button
          type="button"
          onClick={() => {
            onclose(false);
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
