import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import LoginPage from './LoginPage';
import Register from './Register';
import ForgotPassword from './Forgotpassword';
import HomePage from './Homepage';
import CropGuides from './CropGuides';
import WeatherUpdates from './WeatherUpdates';
import ToolsandResources from './ToolsandResouces'
import CommunityTips from './CommunityTips';
import Contact from './Contact';
import PrivacyPolicy from './PrivacyPolicy';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />'
        <Route path='/cropguides' element={<CropGuides />} />
        <Route path="/weatherupdates" element={<WeatherUpdates />} />
        <Route path="/communitytips" element={<CommunityTips />} />
        <Route path="/toolsandresources" element={<ToolsandResources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default App;
