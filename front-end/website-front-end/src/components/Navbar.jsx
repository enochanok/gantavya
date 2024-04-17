import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Primarylogo from "../assets/primary-icon.svg";
import menu from "../assets/menu.png";
import { NavLink, Link } from "react-router-dom";

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
        <figure className="icon">
          <Link to="/">
            <img src={Primarylogo} alt="logo" className="icon-logo" />
          </Link>
        </figure>

        <ul className={mobileMenu ? " " : "mobile-menu"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

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
