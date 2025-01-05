import React from 'react';
import './CoursePage.css';

const CoursePage = ({ courseId }) => {
  const courseDetails = {
    1: {
      title: 'React for Beginners',
      description: 'Learn the basics of React, including components, state, and props.',
      content: 'React is a popular JavaScript library for building user interfaces...',
    },
    2: {
      title: 'Advanced Flutter',
      description: 'Dive deep into Flutter development with this advanced course.',
      content: 'Flutter is a UI toolkit for building natively compiled applications...',
    },
    3: {
      title: 'HTML & CSS Mastery',
      description: 'Master the art of web design with HTML & CSS.',
      content: 'HTML is the backbone of web content, and CSS styles it beautifully...',
    },
  };

  const course = courseDetails[courseId];

  if (!course) {
    return <p>Course not found.</p>;
  }

  return (
    <div className="course-page">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <div className="course-content">
        <h2>Course Content</h2>
        <p>{course.content}</p>
      </div>
    </div>
  );
};

export default CoursePage;
