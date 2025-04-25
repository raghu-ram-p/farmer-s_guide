import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tipsData from '../data/CommunityTips.json';
import '../styles/CommunityTips.css';

const CommunityTips = () => {
    const [communityTips, setCommunityTips] = useState([]);
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
        console.log(communityTips)
        setCommunityTips(tipsData);
    }, []);

    const filteredTips = communityTips.filter((tip) =>
        tip.title.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    return (
        <div className="container">
            <div className="header-buttons">
                <button onClick={toHome} className="home-button">Home</button>
                 <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            <h1 className="heading">FArmer's Community Tips</h1>

            <input
                type="text"
                placeholder="Search tips..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {filteredTips.length > 0 ? (
                filteredTips.map((tip) => (
                    <div key={tip.id} className="guide-json">
                        <h2 className="header">{tip.title}</h2>
                        <p className="paragraph">{tip.content}</p>
                    </div>
                ))
            ) : (
                <p className="no-guides">No tips match your search.</p>
            )}
        </div>
    );
};

export default CommunityTips;
