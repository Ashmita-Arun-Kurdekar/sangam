import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home'); // Redirect to home after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <main className="landing-page" role="main" aria-label="Landing page welcome screen">
      <img src="/logo.jpg" alt="SkillSwap Logo" className="landing-logo" />
      <h1 className="landing-title">Welcome to SkillSwap</h1>
      <p className="landing-subtitle">Connecting learners through skills</p>
    </main>
  );
}

export default Landing;
