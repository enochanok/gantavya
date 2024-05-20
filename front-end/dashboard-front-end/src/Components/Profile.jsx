import React from "react";
import { IoMdMail } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./Profile.css";
import profile from "../assets/Profile.webp";

function Profile() {
  return (
    <div className="main-container">
      <h1>My profile</h1>
      <div className="left-section">
        <img src={profile} alt="" />
        <h2>Samir Thapa</h2>
      </div>
      <div className="right-section">
        <h1>Contact</h1>
        <div>
          <IoMdMail />
          <span>abc@gmail.com</span>
        </div>
        <div>
          <CgProfile />
          <span>093983298</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
