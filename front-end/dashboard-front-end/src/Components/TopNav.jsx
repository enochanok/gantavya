import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";
import "./TopNav.css";

const TopNav = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const Navigation = useNavigate();

  const handleProfile = () => {
    setMenuVisible(!isMenuVisible);
  };

  const handleLogout = () => {
    localStorage.clear();
    Navigation("/login");
  };

  return (
    <div className="top_nav">
      <div className="top_nav_wrapper">
        <div className="top_nav_right">
          <div className="profile">
            <img src={profile} alt="Profile" onClick={handleProfile} />
            {isMenuVisible && (
              <div className="list">
                <ul>
                  <li>Profile</li>
                  <li onClick={handleLogout}>Logout</li>
                  <li>Settings</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
