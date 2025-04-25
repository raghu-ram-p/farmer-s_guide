import React, { use, useEffect, useState } from 'react';
import '../styles/WeatherUpdates.css';
import { useNavigate } from 'react-router-dom';
const WeatherUpdates = () => {
    const [weather, setWeather] = useState(null);
    const [Truth, setTruth] = useState(false);
    const navigate = useNavigate();
    const toHome = () => {
        navigate('/homepage');
    }
    const handleLogout = () => {
        console.log('User logged out');
        navigate('/');
      };
    useEffect(() => {
        const message = {
            R: true

        };
        setTimeout(() => {
            setTruth(message);
        }, 6000);
    }, []);
    useEffect(() => {
        const fakeWeatherData = {
            location: 'Delhi, India',
            temperature: '32°C',
            condition: 'Sunny',
            humidity: '38%',
            wind: '10 km/h NE',
            updatedAt: '2025-04-24 15:00 IST'
        };
        setTimeout(() => {
            setWeather(fakeWeatherData);
        }, 500);
    }, []);

    return (
        <div className="weather-updates-container">
            <div className="header-buttons">
                <button onClick={toHome} className="home-button">Home</button>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </div>
            <h1 className="weather-updates-title">Weather Update</h1>
            {weather ? (
                <div className="weather-updates-card">
                    <h2>{weather.location}</h2>
                    <p><strong>Temperature:</strong> {weather.temperature}</p>
                    <p><strong>Condition:</strong> {weather.condition}</p>
                    <p><strong>Humidity:</strong> {weather.humidity}</p>
                    <p><strong>Wind:</strong> {weather.wind}</p>
                    <p className="weather-updates-last-updated"><em>Last updated:</em> {weather.updatedAt}</p>
                    <p className="weather-updates-truth">{Truth.R ? 'This is a real-time update!' : 'This is a simulated update.'}</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default WeatherUpdates;
