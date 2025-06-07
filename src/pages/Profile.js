import React from 'react';
import '../styles/profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-sidebar">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="User Avatar"
            className="profile-avatar"
          />
          <h2 className="profile-name">Priya Khanna</h2>
          <p className="profile-role">Frontend Developer</p>
        </div>

        <div className="profile-content">
          <section className="profile-section">
            <h3>About</h3>
            <p>
              Passionate developer focused on creating interactive and
              user-friendly web interfaces. Always eager to learn new
              technologies and improve existing skills.
            </p>
          </section>

          <section className="profile-section">
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> priyakhanna123@example.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Location:</strong> Bengaluru, India</p>
          </section>

          <section className="profile-section">
            <h3>Skills</h3>
            <ul className="skills-list">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Python</li>
              <li>Figma</li>
            </ul>
          </section>

          <section className="profile-section">
            <h3>Achievements</h3>
            <ul>
              <li>Completed 50+ freelance projects</li>
              <li>Top 10 finalist at CodeHack 2024</li>
              <li>Built a MERN-based portfolio site</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Profile;
