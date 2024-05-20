import React from "react";
import Side from "../Components/Side";
import TopNav from "../Components/TopNav";

import Users from "../Components/Users";
import "./Homepage.css";
import UserTable from "../Components/UserTable";

function UserPage() {
  return (
    <div className="data-container">
      <TopNav />
      <div className="data-content">
        <Side />
        <div className="main-content">
          <UserTable />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
