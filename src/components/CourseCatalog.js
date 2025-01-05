import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CourseCatalog.css';

const courses = [
  { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.' },
  { id: 2, title: 'Advanced Flutter', description: 'Dive deep into Flutter development.' },
  { id: 3, title: 'HTML & CSS Mastery', description: 'Master the art of web design.' },
  { id: 4, title: 'JavaScript Essentials', description: 'Understand JavaScript fundamentals and ES6 features.' },
  { id: 5, title: 'Python for Data Science', description: 'Learn Python and its applications in data science.' },
  { id: 6, title: 'Machine Learning Basics', description: 'Introduction to machine learning concepts and algorithms.' },
  { id: 7, title: 'UI/UX Design Fundamentals', description: 'Create intuitive and engaging user interfaces.' },
  { id: 8, title: 'Full-Stack Web Development', description: 'Become a full-stack developer with MERN stack.' },
  { id: 9, title: 'Mobile App Development with Kotlin', description: 'Build Android apps using Kotlin.' },
  { id: 10, title: 'Cloud Computing with AWS', description: 'Learn to deploy and manage applications in the cloud.' },
];

const CourseCatalog = () => {
  const navigate = useNavigate();

  const handleSelectCourse = (courseId) => {
    navigate(`/subscription/${courseId}`);
  };

  return (
    <div className="course-catalog">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <div
            key={course.id}
            className="course-card"
            onClick={() => handleSelectCourse(course.id)}
          >
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
