import React from 'react';
import '../styles/Homepage.css'; 
import { useNavigate, Link } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  
  const toCropGuides = () => {
    navigate('/cropguides');
  };
  const toweather = () => {
    navigate('/weatherupdates');
  };
  const tocommunitytips = () => {
    navigate('/communitytips');
  };
  const totools = () => {
    navigate('/toolsandresources');
  };

  

  const handleLogout = () => {
    console.log('User logged out');
    navigate('/'); 
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
      <div className="header-buttons">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
        <h1>Farmer Guide</h1>
        <p>Your companion for smart farming</p>
        
      </header>

      <div className="homepage-content">
        <div className="card1" onClick={toCropGuides}>
          <h3>🌱 Crop Guides</h3>
          <p>Learn how to grow and manage crops efficiently.</p>
        </div>

        <div className="card2" onClick={toweather}>
          <h3>☁️ Weather Updates</h3>
          <p>Check latest weather forecasts for better planning.</p>
        </div>

        <div className="card3" onClick={totools}>
          <h3>🛠️ Tools & Resources</h3>
          <p>Get access to farming tools and expert advice.</p>
        </div>

        <div className="card4" onClick={tocommunitytips}>
          <h3>📢 Community Tips</h3>
          <p style={{ fontSize: '12px' }}>Share and receive tips from 
            <br/>fellow farmers.</p>
        </div>
      </div>

      <div className='homepage-container2'>
        <h1 style={{ fontSize: '50px' }} className='homepage-header2'>Context</h1>

        <div className="homepage-header2">
          
          <p>
            <h2>Crop Guide</h2>
            Learn about optimal planting seasons.<br/>
            Understand soil and water needs.<br/>
            Guidance on fertilizer and pesticide use.<br/>
            Tips on crop maintenance and harvesting<br/>
          </p>
        </div>

        <div className="homepage-header2">
          
          <p>
            <h2>Weather Updates</h2>
            Check daily and weekly forecasts.<br/>
            Get alerts for storms and temperature shifts.<br/>
            Plan field activities based on weather conditions.<br/>
            Understand climate patterns for your region.<br/>
          </p>
        </div>

        <div className="homepage-header2">
          
          <p>
            <h2>Tools and Resources</h2>
            Farming calculators for yield, cost, and irrigation.<br/>
            Latest updates on subsidies and schemes.<br/>
            Insights on modern farming equipment.<br/>
          </p>
        </div>
        <div className="homepage-header2">
          
          <p>
            <h2>Community Tips</h2>
            Read farming success stories.<br/>
            Share tips with fellow farmers.<br/>
            Find solutions to local agricultural challenges.<br/>
          </p>
        </div>
      
      </div>
      <footer className="homepage-footer">
        <p>&copy; 2025 Farmer Guide. All rights reserved.</p>
        <p>
           <Link to="/contact" style={{color:'white'}}>Contact</Link> | <Link to="/privacypolicy" style={{color:'white'}}>Privacy Policy</Link>
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
