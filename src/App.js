import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Blog from './components/Blog';
import CourseCatalog from './components/CourseCatalog';
import CoursePage from './components/CoursePage';
import Subscription from './components/Subscription';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/courses" element={<CourseCatalog />} />
          <Route path="/subscription/:courseId" element={<Subscription />} />
          <Route
            path="/courses/:id"
            element={
              <CoursePage
                courseId={
                  window.location.pathname.split('/')[2] // Extracting courseId from URL
                }
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
