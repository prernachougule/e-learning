import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import './Blog.css';
import BlogImage1 from '../assets/images/4.jpg'; // Replace with your image paths
import BlogImage2 from '../assets/images/5.jpg';
import BlogImage3 from '../assets/images/6.jpg';
import BlogImage4 from '../assets/images/7.jpg';
import BlogImage5 from '../assets/images/8.jpg';
import BlogImage6 from '../assets/images/9.jpg';

const Blog = () => {
  const posts = [
    {
      image: BlogImage1,
      title: 'Learn React Basics',
      summary: 'React is a popular UI library for building single-page applications.',
    },
    {
      image: BlogImage2,
      title: 'Why Flutter is the Future',
      summary: 'Flutter enables cross-platform development with a single codebase.',
    },
    {
      image: BlogImage3,
      title: 'Mastering JavaScript',
      summary: 'JavaScript is a versatile programming language for modern web development.',
    },
    {
      image: BlogImage4,
      title: 'Exploring Node.js',
      summary: 'Node.js allows JavaScript to run on the server, enabling full-stack development.',
    },
    {
      image: BlogImage5,
      title: 'Introduction to MongoDB',
      summary: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.',
    },
    {
      image: BlogImage6,
      title: 'Building REST APIs',
      summary: 'Learn how to design and build RESTful APIs using modern tools and practices.',
    },
  ];

  return (
    <div className="blog-page">
      <Fade cascade damping={0.1} triggerOnce>
        <h1>Our Blog</h1>
      </Fade>
      <div className="blog-posts">
        {posts.map((post, index) => (
          <Zoom key={index} triggerOnce>
            <div className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-summary">{post.summary}</p>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Blog;
