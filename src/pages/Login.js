import React, { useState } from 'react';
import '../styles/login.css';

function Login() {
  const [formData, setFormData] = useState({
    role: 'learner',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${formData.role} - ${formData.email}`);
    // You would send this data to your backend API with fetch/axios here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="role">Login as</label>
        <select
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
          required
        >
          <option value="learner">Learner</option>
          <option value="tutor">Tutor</option>
        </select>

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

        <button type="submit" className="login-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
