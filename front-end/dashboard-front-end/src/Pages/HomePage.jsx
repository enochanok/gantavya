import React from "react";
import TopNav from "../Components/TopNav";
import Side from "../Components/Side";
import Home from "../Components/Home";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="data-container">
      <TopNav />
      <div className="data-content">
        <Side />
        <div className="main-content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
