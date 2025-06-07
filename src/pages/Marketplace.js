import React, { useState } from 'react';
import '../styles/marketplace.css';

const sampleUsers = [
  {
    id: 1,
    name: 'Alice',
    skill: 'React',
    rate: 500,
    github: 'https://github.com/alice',
    linkedin: 'https://linkedin.com/in/alice',
    image: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 2,
    name: 'Bob',
    skill: 'Python',
    rate: 300,
    github: 'https://github.com/bob',
    linkedin: 'https://linkedin.com/in/bob',
    image: 'https://randomuser.me/api/portraits/men/45.jpg'
  },
  {
    id: 3,
    name: 'Charlie',
    skill: 'Graphic Design',
    rate: 400,
    github: 'https://github.com/charlie',
    linkedin: 'https://linkedin.com/in/charlie',
    image: 'https://randomuser.me/api/portraits/men/33.jpg'
  },
  {
    id: 4,
    name: 'David',
    skill: 'Public Speaking',
    rate: 250,
    github: 'https://github.com/david',
    linkedin: 'https://linkedin.com/in/david',
    image: 'https://randomuser.me/api/portraits/men/15.jpg'
  },
  {
    id: 5,
    name: 'Eve',
    skill: 'Machine Learning',
    rate: 600,
    github: 'https://github.com/eve',
    linkedin: 'https://linkedin.com/in/eve',
    image: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
];

const Marketplace = () => {
  const [skillFilter, setSkillFilter] = useState('');
  const [maxRate, setMaxRate] = useState('');

  const filteredUsers = sampleUsers.filter(user => {
    const matchesSkill = skillFilter === '' || user.skill.toLowerCase().includes(skillFilter.toLowerCase());
    const matchesRate = maxRate === '' || user.rate <= parseInt(maxRate);
    return matchesSkill && matchesRate;
  });

  return (
    <div className="marketplace-container">
      <h2>Find Skill Tutors</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search skill (e.g., React)"
          value={skillFilter}
          onChange={(e) => setSkillFilter(e.target.value)}
        />

        <input
          type="number"
          placeholder="Max Rate (₹)"
          value={maxRate}
          onChange={(e) => setMaxRate(e.target.value)}
        />
      </div>

      <div className="cards">
        {filteredUsers.map(user => (
          <div key={user.id} className="card">
            <img
              src={user.image}
              alt={`${user.name}'s profile`}
              className="profile-image"
            />
            <h3>{user.name}</h3>
            <p>Skill: {user.skill}</p>
            <p>Rate: ₹{user.rate}/hour</p>
            <div className="social-links">
              <a href={user.github} target="_blank" rel="noopener noreferrer">GitHub</a> |{' '}
              <a href={user.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
