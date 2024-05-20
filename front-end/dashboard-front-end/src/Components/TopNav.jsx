import React, { useState } from "react";

import { Link } from "react-router-dom";
import profile from "../assets/profile.png";

import "./TopNav.css";

const TopNav = () => {
  return (
    <div className="top_nav">
      <div className="top_nav_wrapper">
        <div className="top_nav_right">
          <div className="profile">
            <Link to="/profile">
              <img src={profile} alt="Profile" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
