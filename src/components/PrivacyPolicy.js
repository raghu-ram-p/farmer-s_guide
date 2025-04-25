import React from 'react';
// import '../styles/PrivacyPolicy.css';
import { useNavigate } from 'react-router-dom';


const PrivacyPolicy = () => {
  const navigate= useNavigate()
  const handleLogout = () => {
    console.log('User logged out');
    navigate('/');
  };
  const toHome = () => {
    navigate('/homepage');
}
  return (
    <div className="privacy-container">
      <div className="header-buttons">
         <button onClick={toHome} className="home-button">Home</button>
         <button onClick={handleLogout} className="logout-button">Logout</button>
       </div>
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-date">Last updated: April 25, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          At FarmConnect, we value your trust. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
        </p>
      </section>

      <section>
        <h2>2. What We Collect</h2>
        <p>
          We may collect basic personal information such as your name, phone number, email address, location, and crop-related preferences. We also gather app usage data to improve our services.
        </p>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide personalized farming advice</li>
          <li>To improve our platform and features</li>
          <li>To communicate weather alerts and crop tips</li>
          <li>To respond to your questions or feedback</li>
        </ul>
      </section>

      <section>
        <h2>4. Information Sharing</h2>
        <p>
          We do not sell or rent your personal data. We only share information with trusted partners if it helps deliver better farming solutions — and only with your consent.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          Your data is stored securely and handled with care. We use modern tools and best practices to prevent unauthorized access.
        </p>
      </section>

      <section>
        <h2>6. Your Rights</h2>
        <p>
          You can request to view, correct, or delete your information at any time. Contact us at <strong>support@farmconnect.org</strong>.
        </p>
      </section>

      <section>
        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy occasionally. We'll notify you through the app or website if any major changes are made.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
