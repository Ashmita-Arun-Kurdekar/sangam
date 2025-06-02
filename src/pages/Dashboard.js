import React from 'react';
import '../styles/dashboard.css';

const Dashboard = () => {
  const user = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    credits: 120,
    skillsOffered: ['Python', 'Web Design', 'Public Speaking'],
    skillsWanted: ['React', 'Data Analysis'],
    sessions: [
      { date: '2025-06-05', topic: 'React Basics', partner: 'John Smith' },
      { date: '2025-06-10', topic: 'Data Analysis', partner: 'Sara Khan' },
    ],
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {user.name}</h2>

      <div className="dashboard-section profile">
        <h3>Profile Info</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Credits:</strong> {user.credits}</p>
      </div>

      <div className="dashboard-section skills">
        <div>
          <h3>Skills Offered</h3>
          <ul>
            {user.skillsOffered.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Skills Wanted</h3>
          <ul>
            {user.skillsWanted.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="dashboard-section sessions">
        <h3>Upcoming Learning Sessions</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Topic</th>
              <th>Partner</th>
            </tr>
          </thead>
          <tbody>
            {user.sessions.map((session, i) => (
              <tr key={i}>
                <td>{session.date}</td>
                <td>{session.topic}</td>
                <td>{session.partner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
