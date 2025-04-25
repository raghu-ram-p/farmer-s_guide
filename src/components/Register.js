import React, { useState } from 'react';
import './../styles/Register.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const tologin = () => {
    navigate('/');
  }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setTimeout(() => {
      setMessage('Registration successful!');
    }, 1000);
  };

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Name</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required 
          />
        </div>

        <button type="submit">Register</button>
        <p>Already have an account? </p>
        <button type='button' onClick={tologin}>Login</button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default Register;
