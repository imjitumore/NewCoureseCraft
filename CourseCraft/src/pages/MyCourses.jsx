import DashboardLayout from "../layouts/DashboardLayout";
import React from "react";

const MyCourses = () => {
  return (
    <DashboardLayout role="student">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        My Courses
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Course Card 1 */}
        <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-6 hover:scale-105 transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            MERN Stack Development
          </h3>

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
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            React Advanced Concepts
          </h3>

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

    </DashboardLayout>
  );
};

export default MyCourses;
