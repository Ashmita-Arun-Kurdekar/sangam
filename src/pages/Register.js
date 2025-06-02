import React, { useState } from 'react';
import '../styles/register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered as ${formData.username}`);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          name="username" 
          id="username" 
          value={formData.username} 
          onChange={handleChange} 
          placeholder="Enter username" 
          required 
        />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Enter email" 
          required 
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Enter password" 
          required 
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          type="password" 
          name="confirmPassword" 
          id="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          placeholder="Confirm password" 
          required 
        />
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
