import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

// Import images
import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.jpg';
import Image3 from '../assets/images/3.jpg';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    const featureCards = document.querySelector('.feature-cards');
    if (featureCards) {
      observer.observe(featureCards);
    }

    return () => {
      if (featureCards) {
        observer.unobserve(featureCards);
      }
    };
  }, []);

  const handleExploreCourses = () => {
    navigate('/courses');
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EduLearn</h1>
          <p>Your gateway to mastering new skills and advancing your career.</p>
          <button className="cta-button" onClick={handleExploreCourses}>
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose EduLearn?</h2>
        <div className={`feature-cards ${isVisible ? 'animate' : ''}`}>
          <div className="feature-card">
            <img src={Image1} alt="Expert Instructors" />
            <h3>Expert Instructors</h3>
            <p>Learn from industry-leading professionals with real-world experience.</p>
          </div>
          <div className="feature-card">
            <img src={Image2} alt="Flexible Learning" />
            <h3>Flexible Learning</h3>
            <p>Access courses anytime, anywhere, at your own pace.</p>
          </div>
          <div className="feature-card">
            <img src={Image3} alt="Certifications" />
            <h3>Certifications</h3>
            <p>Earn certificates to showcase your achievements to employers.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"EduLearn helped me land my dream job with their excellent courses!"</p>
            <h4>- Sarah J.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The instructors are fantastic, and the flexibility is perfect for my schedule."</p>
            <h4>- Michael T.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I highly recommend EduLearn to anyone looking to upskill."</p>
            <h4>- Priya R.</h4>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Start Your Learning Journey?</h2>
        <button className="cta-button" onClick={handleExploreCourses}>
          Explore Courses
        </button>
      </section>
    </div>
  );
};

export default LandingPage;
