import React, { useEffect, useState } from "react";
import "./Profile.css";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SkeletonLoader = () => {
  return (
    <div className="profile-card skeleton-loader">
      <div className="profile-row">
        <div className="profile-icon skeleton-icon"></div>
        <div className="profile-info skeleton-info"></div>
      </div>
      <div className="profile-row">
        <div className="profile-icon skeleton-icon"></div>
        <div className="profile-info skeleton-info"></div>
      </div>
      <div className="profile-row">
        <div className="profile-icon skeleton-icon"></div>
        <div className="profile-info skeleton-info"></div>
      </div>
    </div>
  );
};

const ProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/gantavyaAdmin/user/id/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await response.json();
        setUser(userData.data);
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-card">
        <div className="profile-row">
          <FaUser className="profile-icon" />
          <div className="profile-info">
            <label>Name:</label>
            <p>{user.full_name}</p>
          </div>
        </div>
        <div className="profile-row">
          <FaEnvelope className="profile-icon" />
          <div className="profile-info">
            <label>Email:</label>
            <p>{user.email}</p>
          </div>
        </div>
        <div className="profile-row">
          <FaPhone className="profile-icon" />
          <div className="profile-info">
            <label>Phone:</label>
            <p>{user.phone_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
