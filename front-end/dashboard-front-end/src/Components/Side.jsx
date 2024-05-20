import React from "react";
import { SidebarData } from "./SidebarData";
import "./Side.css";
import primaryIcon from "../assets/primary-icon.svg";
import { NavLink } from "react-router-dom";

function Side() {
  return (
    <div className="Sidebar">
      <div className="logo-container">
        <img src={primaryIcon} alt="Primary Icon" className="logo" />
      </div>
      <ul className="Sidebarlist">
        {SidebarData.map((item, index) => (
          <NavLink key={index} to={item.link} className="sidebarrow">
            <div className="icon">{item.icon}</div>
            <div className="title">{item.title}</div>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default Side;
