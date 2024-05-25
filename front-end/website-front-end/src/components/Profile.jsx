import React from "react";
import "./Profile.css";
import Cont from "../assets/Profile-backpic.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProfileDashboard from "./ProfileDashboard";
import ProfileForm from "./ProfileForm";

const Profile = ({ children }) => {
  const [activeTab, setActiveTab] = useState("/dash");
  const handleTabClick = (path) => {
    setActiveTab(path);
  };
  return (
    <div>
      {" "}
      <div className="picture-container">
        <img className="contact-image" src={Cont} alt="Contact" />
      </div>
      <div className="maincontainer-profile">
        <div className="sub-contain">
          <div className="profile-leftbar">
            <h4>
              Ram Yadav
              <span className="profile-username">ramyadav@gmail.com</span>
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
              className="spacer-menu"
            >
              <ul style={{ flex: 1 }} className="menu-col">
                <li className={activeTab === "/dash" ? "active" : ""}>
                  <Link
                    to="/dashboard/dash"
                    onClick={() => handleTabClick("/dash")}
                  >
                    Dashboard
                  </Link>
                </li>
                <li className={activeTab === "/ProfileForm" ? "active" : ""}>
                  <Link
                    to="/dashboard/ProfileForm"
                    onClick={() => handleTabClick("/ProfileForm")}
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            {activeTab === "/dash" && <ProfileDashboard />}
            {activeTab === "/ProfileForm" && <ProfileForm />}
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
