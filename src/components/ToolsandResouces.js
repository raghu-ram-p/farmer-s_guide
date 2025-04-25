import React, { useEffect, useState } from 'react';
import toolsData from '../data/ToolsandResources.json';
import '../styles/ToolsandResources.css';
import { useNavigate } from 'react-router-dom';

const ToolsandResources = () => {
    const navigate = useNavigate();
    const [toolsAndResources, setToolsAndResources] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const handleLogout = () => {
        console.log('User logged out');
        navigate('/');
      };
      const toHome = () => {
        navigate('/homepage');
    }
    useEffect(() => {
        console.log(toolsAndResources);
        setToolsAndResources(toolsData);
    }, []);

    const filteredTools = toolsAndResources.filter((Tools) =>
        Tools.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    

    return (
        <div className="container">
            <div className="header-buttons">
                <button onClick={toHome} className="home-button">Home</button>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            <h1 className="heading">Farmer's Tools and Resources</h1>

            <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />

            {filteredTools.length > 0 ? (
                filteredTools.map((tool) => (
                    <div key={tool.id} className="guide-json">
                        <h2 className="header">{tool.title} ({tool.type})</h2>
                        <p className="paragraph">{tool.content}</p>
                        <div className="image-container">
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-guides">No tools match your search.</p>
            )}
        </div>
    );
};

export default ToolsandResources;
