import React, { useState } from 'react';
import '../styles/home.css';

const courses = [
  {
    id: 1,
    title: 'React Basics',
    description: 'Learn fundamentals of React.js',
    img: 'https://tse4.mm.bing.net/th?id=OIP.SSmzcDoacILZm1PrG7_DHwHaD4&pid=Api&P=0&h=180',
  },
  {
    id: 2,
    title: 'Python Programming',
    description: 'Start coding with Python',
    img: 'https://tse3.mm.bing.net/th?id=OIP.Jc2S4BEx0fO23muBMDqsNwHaEK&pid=Api&P=0&h=180',
  },
  {
    id: 3,
    title: 'Data Analysis',
    description: 'Analyze data with tools like Pandas',
    img: 'https://tse3.mm.bing.net/th?id=OIP.6ynbIQCLbYegHf-6QmqPiQHaEc&pid=Api&P=0&h=180',
  },
  {
    id: 4,
    title: 'Public Speaking',
    description: 'Improve your communication skills',
    img: 'https://tse2.mm.bing.net/th?id=OIP.PkLjV9UBXqidzSSdwvATewHaE8&pid=Api&P=0&h=180',
  },
  {
    id: 5,
    title: 'Graphic Design',
    description: 'Design stunning visuals and logos',
    img: 'https://tse2.mm.bing.net/th?id=OIP.o4q_HO355bOpHPAL4D5LywHaEK&pid=Api&P=0&h=180',
  },
  {
    id: 6,
    title: 'Machine Learning',
    description: 'Intro to ML algorithms',
    img: 'https://tse2.mm.bing.net/th?id=OIP.EZeP9vSGOADD1MSdiDctcgHaE7&pid=Api&P=0&h=180',
  },
];

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 < 0 ? courses.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1 > courses.length - 3 ? 0 : prev + 1));
  };

  const visibleCourses = courses.slice(startIndex, startIndex + 3);

  return (
    <div className="home-container">
      <h1>Welcome to SkillSwap</h1>
      <p>Discover and exchange skills with peers!</p>

      <div className="carousel-multi">
        <button className="carousel-btn" onClick={prevSlide}>&lt;</button>

        <div className="carousel-multi-wrapper">
          {visibleCourses.map((course) => (
            <div key={course.id} className="carousel-card">
              <img
                src={course.img}
                alt={course.title}
                className="carousel-image"
                style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
          ))}
        </div>

        <button className="carousel-btn" onClick={nextSlide}>&gt;</button>
      </div>

      <div className="courses-list">
        <h3>All Available Courses & Skills</h3>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <strong>{course.title}</strong>: {course.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
