import React, { useState } from 'react';
import '../styles/Forgotpassword.css';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setMessage('If an account with that email exists, we have sent a password reset link.');
    }, 2000);
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      <p>Enter your email address and we'll send you a link to reset your password.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={handleEmailChange} 
            required
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
        </button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Forgotpassword;
