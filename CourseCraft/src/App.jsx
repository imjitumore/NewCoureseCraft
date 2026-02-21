import React from "react";

import {  Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import MyCourses from "./pages/MyCourses";
import CreateCourse from "./pages/CreateCourse";
import ManageCourse from "./layouts/ManageCourse";
import InstructorProfile from "./pages/InstructorProfile";
import CoursePlayer from "./pages/CoursePlayer";
import Home from "./pages/Home";
import AllCourses from "./pages/AllCourses";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
     <Routes>

        {/* Public Routes */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* Student Routes */}
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />

        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/create-course" element={<CreateCourse />} /> 

        <Route path="/manage-course" element={<ManageCourse />} />
        <Route path="/instructor-profile" element={<InstructorProfile />} />

        <Route path="/course-player/:courseId" element={<CoursePlayer />} />

        <Route path="/home" element={<Home />} />


        <Route path="/allcourses" element={<AllCourses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />



      </Routes>
  );
}

export default App;
