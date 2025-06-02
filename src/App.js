import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Landing from './pages/Landing';

import './styles/navbar.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container" style={{ padding: '2rem', marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Landing />} />         {/* Show Landing at root */}
          <Route path="/home" element={<Home />} />        {/* Home moved to /home */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
