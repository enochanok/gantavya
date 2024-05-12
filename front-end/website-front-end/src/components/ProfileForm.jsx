import React from "react";
import "./Profile.css";

const ProfileForm = () => {
  return (
    <div className="query-form">
      <h4>Profile</h4>
      <div className="edit-query">
        <div className="input-container">
          <h5>Username</h5>

          <input
            type="text"
            name="username"
            id="username"
            readOnly
            placeholder="Ram Yadav"
          />
        </div>

        <div className="input-container">
          <h5>Email</h5>

          <input
            type="text"
            name="email_address"
            id="email_address"
            readOnly
            placeholder="ramyadav@gmail.com"
          />
        </div>
        <div className="input-container">
          <h5>Phone</h5>

          <input
            type="text"
            name="phone"
            id="phone"
            readOnly
            placeholder="9876543210"
          />
        </div>
        <div className="input-container">
          <h5>Old-password</h5>

          <input
            type="password"
            name="pass"
            id="pass"
            readOnly
            placeholder="********"
          />
        </div>
        <div className="input-container">
          <h5>New-password</h5>

          <input type="password" name="pass" id="pass" placeholder="********" />
        </div>
        <div className="btn-change">
          <button className="btn-reset">Change Password</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
