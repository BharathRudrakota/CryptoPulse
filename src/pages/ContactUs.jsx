import React from "react";
import "./ContactUs.css";
import contact from "../assets/Contact.jpg" // Replace with actual image path

const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Have questions? Get in touch with us today.</p>
      </div>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="contact-form-container">
          <h2>📩 Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>

      {/* Contact Details */}
      <section className="contact-details">
        <h2>📞 Contact Information</h2>
        <div className="contact-info">
          <div className="info-box">
            <h3>📍 Address</h3>
            <p>123 Crypto Street, Blockchain City, USA</p>
          </div>
          <div className="info-box">
            <h3>✉️ Email</h3>
            <p>support@cryptopulse.com</p>
          </div>
          <div className="info-box">
            <h3>📞 Phone</h3>
            <p>+1 (234) 567-890</p>
          </div>
        </div>
      </section>

      {/* Google Maps Embed (Optional) */}
      <section className="map-section">
        <h2>🌍 Our Location</h2>
        <iframe class="gmap_iframe" 
        frameborder="0" 
        scrolling="no" 
        marginheight="0" 
        marginwidth="0" 
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
      </section>
    </div>
  );
};

export default ContactUs;
