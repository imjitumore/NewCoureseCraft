import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import StudentDashboard from "./components/StudentDashboard";
import InstructorDashboard from "./components/InstructorDashboard";
function App() {
  return (


    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<RegistrationPage />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/login" element={<StudentDashboard />} /> */}
      <Route path="/login" element={<InstructorDashboard />} />
    </Routes>
  );
}

export default App;
