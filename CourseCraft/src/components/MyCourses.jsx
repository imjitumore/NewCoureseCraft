import React from "react";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          My Courses
        </h1>

        <button
          onClick={() => navigate("/student-dashboard")}
          className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Back to Dashboard
        </button>
      </div>

      {/* COURSES GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Course Card 1 */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            MERN Stack Development
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            Progress: 70%
          </p>

          <div className="w-full bg-gray-300 h-2 rounded-full mb-4">
            <div className="bg-blue-600 h-2 rounded-full w-[70%]"></div>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
            Continue Learning
          </button>
        </div>

        {/* Course Card 2 */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            React Advanced Concepts
          </h2>

          <p className="text-gray-600 text-sm mb-4">
            Progress: 45%
          </p>

          <div className="w-full bg-gray-300 h-2 rounded-full mb-4">
            <div className="bg-indigo-600 h-2 rounded-full w-[45%]"></div>
          </div>

          <button className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition">
            Continue Learning
          </button>
        </div>

      </div>

    </div>
  );
};

export default MyCourses;
