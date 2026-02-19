import React from "react";
import { useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200 p-6">
      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition">
          Logout
        </button>
      </div>

      {/* ===== DASHBOARD CARDS ===== */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Total Courses */}
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">
            Enrolled Courses
          </h2>
          <p className="text-4xl font-bold text-blue-600 mt-3">5</p>
        </div>

        {/* Completed */}
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">
            Completed Courses
          </h2>
          <p className="text-4xl font-bold text-green-500 mt-3">2</p>
        </div>

        {/* Progress */}
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">
            Overall Progress
          </h2>
          <p className="text-4xl font-bold text-purple-600 mt-3">60%</p>
        </div>
      </div>

      {/* ===== COURSE SECTION ===== */}
      <div className="mt-10 bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">My Courses</h2>

        <button
          onClick={() => navigate("/myCourses")}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          View My Courses
        </button>

        <div className="space-y-5">
          <div className="bg-blue-600 text-white p-5 rounded-2xl shadow-md hover:scale-[1.02] transition">
            <h3 className="font-semibold text-lg">MERN Stack Development</h3>
            <p className="text-sm mt-1 opacity-90">Progress: 70%</p>
          </div>

          <div className="bg-indigo-600 text-white p-5 rounded-2xl shadow-md hover:scale-[1.02] transition">
            <h3 className="font-semibold text-lg">React Advanced Concepts</h3>
            <p className="text-sm mt-1 opacity-90">Progress: 45%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
