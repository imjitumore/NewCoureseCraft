import React from "react";

import {  Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";

import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import MyCourses from "./pages/MyCourses";
import CreateCourse from "./pages/CreateCourse";

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

      </Routes>
  );
}

export default App;
