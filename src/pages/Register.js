import React, { useState } from 'react';
import '../styles/register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'learner',
    skill: '',
    rate: '',
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

    const displayRole = formData.role === 'tutor' 
      ? `Tutor in ${formData.skill} at ₹${formData.rate}/hour`
      : 'Learner';

    alert(`Registered as ${formData.username} (${displayRole})`);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>Register As</label>
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="learner">Learner</option>
          <option value="tutor">Tutor</option>
        </select>

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

        {formData.role === 'tutor' && (
          <>
            <label htmlFor="skill">Skill</label>
            <input
              type="text"
              name="skill"
              id="skill"
              value={formData.skill}
              onChange={handleChange}
              placeholder="e.g., React, Python"
              required
            />

            <label htmlFor="rate">Hourly Rate (₹)</label>
            <input
              type="number"
              name="rate"
              id="rate"
              value={formData.rate}
              onChange={handleChange}
              placeholder="e.g., 500"
              required
            />
          </>
        )}

        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
}

export default Register;
