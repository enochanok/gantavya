import React from "react";
import "./ContactUs.css";
import Cont from "../assets/contact-image2.jpg";

const ContactUs = () => {
  return (
    <>
      <div className="picture-container">
        <img className="contact-image" src={Cont} alt="Contact" />
      </div>
      <div className="maincontainer">
        <div className="query">
          <h3>Do you have any question?</h3>
          <form action="contact" className="form">
            <div className="input-container">
              <input
                type="text"
                name="fnmae"
                id="fname"
                placeholder="Your Name"
              />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Your Email"
              />
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Your Phone"
              />
            </div>
            <textarea
              name="msg"
              id="msg"
              placeholder="Your Message"
              rows="6"
            ></textarea>
            <button>Send Message</button>
          </form>
        </div>
        <div className="office-header-container">
          <h4>Head Office</h4>
          <p>Nakhipot, Lalitpur, Nepal</p>
          <p>01-550101</p>
          <p>info@gantavya.org</p>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
