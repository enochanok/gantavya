import React from "react";
import "./Header.css";
import Input from "./Details";

function Header() {
  return (
    <>
      <div className="header container">
        <div className="text">
          <h1>
            Looking for a <span style={{ color: "#212A3E" }}>Car</span>? Rent a
            Car in just a Few Easy Steps
          </h1>
        </div>
        {/*hello*/}
        <Input />
      </div>
    </>
  );
}

export default Header;
