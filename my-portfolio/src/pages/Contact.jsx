import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p><strong>Email:</strong> you@example.com</p>
        <p><strong>Phone:</strong> +94 77 123 4567</p>
        <p><strong>Location:</strong> Colombo, Sri Lanka</p>
      </div>
    </div>
  );
};

export default Contact;
