import React from "react";
import "./Footer.css";
import SecondaryIcon from "../assets/secondary-icon.svg";

const Footer = () => {
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Cars</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="horizontal__line" />
        <div class="lower-footer">
          <div class="container">
            <div class="lower-footer--content">
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
