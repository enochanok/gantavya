import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";

const Navbar = ({ onSignInClick }) => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="logo" />
        <ul className={mobileMenu ? " " : "mobile-menu"}>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>
            <button className="btn" onClick={onSignInClick}>
              Sign in
            </button>
          </li>
        </ul>
        <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
