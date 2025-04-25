import React, { useEffect, useState } from 'react';
import guideData from '../data/CropGuide.json';
import '../styles/CropGuide.css';
import { useNavigate } from 'react-router-dom';

const CropGuides = () => {
  const [cropGuides, setCropGuides] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const toHome = () => {
    navigate('/homepage');
}
  const handleLogout = () => {
    console.log('User logged out');
    navigate('/');
  };
  useEffect(() => {
    setCropGuides(guideData);
  }, []);

  const filteredGuides = cropGuides.filter((guide) =>
    guide.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header-buttons">
        <button onClick={toHome} className="home-button">Home</button>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <h1 className="heading">Farmer's Crop Guide</h1>

      <input
        type="text"
        placeholder="Search guides..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {filteredGuides.length > 0 ? (
        filteredGuides.map((guide) => (
          <div key={guide.id} className="guide-json">
            <h2 className="header">{guide.title}</h2>
            <p className="paragraph">{guide.content}</p>
          </div>
        ))
      ) : (
        <p className="no-guides">No guides match your search.</p>
      )}
    </div>
  );
};

export default CropGuides;
