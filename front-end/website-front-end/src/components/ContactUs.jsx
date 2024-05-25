import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import Cont from "../assets/contact-image2.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    msg: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u9r8xco",
        "template_6jamupq",
        e.target,
        "NWfKL9H1yGLW4LLFN"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      contact: "",
      msg: "",
    });
  };

  return (
    <>
      <div className="picture-container">
        <img className="contact-image" src={Cont} alt="Contact" />
      </div>
      <div className="maincontainer">
        <div className="query">
          <h3>Do you have any question?</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="input-container">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contact"
                id="contact"
                placeholder="Your Phone"
                value={formData.contact}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="msg"
              id="msg"
              placeholder="Your Message"
              rows="6"
              value={formData.msg}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
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
