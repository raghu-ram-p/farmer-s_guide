import React from 'react';
import '../styles/Contact.css';
import { useNavigate } from 'react-router-dom';


const ContactPage = () => {
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/homepage');
  }
  const handleLogout = () => {
    console.log('User logged out');
    navigate('/');
  };
  return (
    <div className="contact-container">
      <div className="header-buttons">
        <button onClick={toHome} className="home-button">Home</button>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We're here to support our farming community. Reach out with your questions, feedback, or suggestions.
      </p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="Your email" required />
        </label>

        <label>
          Message:
          <textarea placeholder="Type your message..." rows="5" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-footer">
        📍 Village , Greenfield, Telangana <br />
        📞 +91-xxxxx-xxxxx <br />
        ✉️ support@farmerguide.org
      </div>
    </div>
  );
};

export default ContactPage;
