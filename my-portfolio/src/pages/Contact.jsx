import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaMailBulk } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending message");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Info</h2>

        <div className="info-item">
          <FaMapMarkerAlt className="icon" />
          <p>No.136/E, Srimath Kudaratwatta Road, Kandy, <br /> Sri Lanka. <br /> 20000</p>
        </div>

        <div className="info-item">
          <FaMailBulk className="icon" />
          <p>No.513/6, Srimath Kudaratwatta Road, Kandy, <br /> Sri Lanka. <br /> 20000</p>
        </div>

        <div className="info-item">
          <FaPhoneAlt className="icon" />
          <p>+94 703 757 159</p>
        </div>

        <div className="info-item">
          <FaEnvelope className="icon" />
          <p>sithumanisandali@gmail.com</p>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sandali-liyanage/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/sithusss/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://web.facebook.com/profile.php?id=61563900005379&sk=about" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/sithumanisandali/" target="_blank" rel="noopener noreferrer "><FaInstagram /></a>
        </div>
      </div>

      <div className="contact-right">
        <h2>Send Us A Message</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
