import React, { useEffect, useState } from "react";
import "./Footer.css";
import SecondaryIcon from "../assets/secondary-icon.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const handleLinkClick = (pathName) => {
    setPath(pathName);
  };

  return (
    <footer className="footer_main">
      <div className="Footer_container">
        <div className="footer-content">
          {/* <div className="footer-section logo">
            <figure className="icon">
              <img src={SecondaryIcon} alt="logo" className="icon-logo" />
            </figure>
          </div> */}
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>
              We provide top-quality car rental services at affordable prices.
              Our mission is to make your travel experience enjoyable and
              hassle-free.
            </p>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <p>123-456-7890</p>
              <p>info@gantavya.com</p>
              <p>Nakipot, Lalitpur, Nepal</p>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <NavLink to="/" onClick={() => handleLinkClick("Home")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => handleLinkClick("about")}>
                  About us
                </NavLink>
              </li>
              <li>
                <a href="#">Cars</a>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="horizontal__line" />
        <div className="lower-footer">
          <div className="container">
            <div className="lower-footer--content">
              <h5>© Copyright 2023 Gantavya. rights reserved.</h5>
              <h5>Designed and Developed by Keyser</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
