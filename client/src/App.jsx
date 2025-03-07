import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RoadmapsDetail from './pages/Roadmap/RoadmapsDetails' // Import the RoadmapsDetail component
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import QuizPage from './pages/QuizPage';
import RecruitmentPage from './pages/RecruitmentPage';
import HackathonPage from './pages/HackathonPage';
import CommunityPage from './pages/CommunityPage';
// import AboutPage from './pages/AboutPage';
// import MentorshipPage from './pages/MentorshipPage';
// import SeminarsPage from './pages/SeminarsPage';
import Footer from './components/Footer';
import CoursesPage from './pages/CoursesPage';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import UserProfile from './pages/UserProfile/UserProfile';
import RoadmapHome from './pages/Roadmap/RoadmapHome';
import CourseDetailsPage from "./pages/CourseDetailsPage";
import EnrolledCoursesPage from './pages/EnrolledCourses';
import MentorshipPage from './pages/MentorshipPage'

import Animation from './pages/Checking/Animation'
import Course from './pages/Course'

function App() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize cursor effect
    const cursor = document.querySelector('.cursor');
    
    document.addEventListener('mousemove', (e) => {
      cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`);
    });
    
    document.addEventListener('click', () => {
      cursor.classList.add('expand');
      setTimeout(() => {
        cursor.classList.remove('expand');
      }, 500);
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden">
        <div className="cursor"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quizzes" element={<QuizPage />} />
          <Route path="/recruitment" element={<RecruitmentPage />} />
          <Route path="/hackathons" element={<HackathonPage />} />
          <Route path="/community" element={<CommunityPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/seminars" element={<SeminarsPage />} /> */}
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/Roadmaps" element={<RoadmapHome />} />
          <Route path="/Mentorship" element={<MentorshipPage />} />
          <Route path="/Animation" element={<Animation />} />
          
          {/* Added dynamic route for RoadmapsDetail */}          
          <Route path="/Roadmaps/:id" element={<RoadmapsDetail />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
          <Route path="/enrolled-courses" element={<EnrolledCoursesPage />} />
          <Route path="/course" element={<Course />} />
        
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;