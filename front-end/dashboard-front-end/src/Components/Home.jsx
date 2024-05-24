import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/home")
      .then((response) => {
        setUserData(response.data.details[0]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const { users, vehicles, activeBookings } = userData;

  return (
    <div className="main-box">
      <div className="primary-box users-box">
        <div className="content">
          <h2>Users</h2>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>{users}</p>
        </div>
      </div>
      <div className="primary-box vehicles-box">
        <div className="content">
          <h2>Vehicles</h2>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>{vehicles}</p>
        </div>
      </div>
      <div className="primary-box bookings-box">
        <div className="content">
          <h2>Active Bookings</h2>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {activeBookings}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
