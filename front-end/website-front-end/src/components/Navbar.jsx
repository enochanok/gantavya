import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Primarylogo from "../assets/primary-icon.svg";
import menu from "../assets/menu.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = ({ onSignInClick }) => {
  const [sticky, setSticky] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSignOut() {
    localStorage.clear();
    setLoggedIn(false);
    alert("Sign out success");
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setSticky(true) : setSticky(false);
    });

    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");

    if (email && password) {
      setLoggedIn(true);
    }
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <figure className="icon">
          <Link to="/">
            <img src={Primarylogo} alt="logo" className="icon-logo" />
          </Link>
        </figure>

        <ul className={mobileMenu ? "" : "mobile-menu"}>
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
            {loggedIn ? (
              <button className="btn" onClick={handleSignOut}>
                Sign out
              </button>
            ) : (
              <button className="btn" onClick={onSignInClick}>
                Sign in
              </button>
            )}
          </li>
        </ul>
        <img src={menu} alt="" className="menu-icon" onClick={toggleMenu} />
      </nav>
    </>
  );
};

export default Navbar;
