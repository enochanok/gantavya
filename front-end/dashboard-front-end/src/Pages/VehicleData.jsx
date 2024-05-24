import React from "react";
import Side from "../Components/Side";
import TopNav from "../Components/TopNav";

import Users from "../Components/Users";
import "./Homepage.css";

function UserData() {
  return (
    <div className="data-container">
      <TopNav />
      <div className="data-content">
        <Side />
        <div className="main-content">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default UserData;
