import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer_main">
      <div className="Footer_container">
        <div className="footer-content">
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
              <p>info@gantabya.com</p>
              <p>Kathmandu,Nepal</p>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Cars</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; Gantabya Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
