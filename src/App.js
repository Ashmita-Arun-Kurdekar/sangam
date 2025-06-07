import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Landing from './pages/Landing';
import Marketplace from './pages/Marketplace';  // <-- New Marketplace page

import './styles/navbar.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container" style={{ padding: '2rem', marginTop: '60px' }}>
        <Routes>
          <Route path="/" element={<Landing />} />           {/* Landing page shows first */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/marketplace" element={<Marketplace />} />  {/* New Marketplace route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
