import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/LoginPage.css'; // Import CSS here

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const correctUsername = 'a';
    const correctPassword = '1';

    if (username === correctUsername && password === correctPassword) {
      navigate('/homepage');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const toregister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {errorMessage && <div className="error">{errorMessage}</div>}

          <div className="button-group">
            <button type="submit">Login</button>
            <button type="button" onClick={toregister}>Register</button>
          </div>

          <div className="forgot-link">
            <Link to="/forgotpassword">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
