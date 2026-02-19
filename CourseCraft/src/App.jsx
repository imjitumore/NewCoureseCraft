import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import StudentDashboard from "./components/StudentDashboard";
import InstructorDashboard from "./components/InstructorDashboard";
import MyCourses from "./components/MyCourses";
function App() {
  return (


    
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/instructorDashboard" element={<InstructorDashboard />} />
        <Route path="/myCourses" element={<MyCourses />} />
    </Routes>
  );
}

export default App;
