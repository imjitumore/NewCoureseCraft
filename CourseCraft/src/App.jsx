import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
function App() {
  return (


    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
