import React from "react";

const InstructorDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200 p-6">

      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Instructor Dashboard
        </h1>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-blue-700 transition">
          Logout
        </button>
      </div>

      {/* ===== STAT CARDS ===== */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Total Courses */}
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Courses
          </h2>
          <p className="text-4xl font-bold text-blue-600 mt-3">8</p>
        </div>

        {/* Total Students */}
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Students
          </h2>
          <p className="text-4xl font-bold text-green-500 mt-3">320</p>
        </div>

        {/* Earnings */}
        <div className="bg-white/50 backdrop-blur-md p-6 rounded-3xl shadow-xl hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Earnings
          </h2>
          <p className="text-4xl font-bold text-purple-600 mt-3">$4,200</p>
        </div>

      </div>

      {/* ===== COURSE MANAGEMENT SECTION ===== */}
      <div className="mt-10 bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            My Courses
          </h2>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 transition">
            + Create Course
          </button>
        </div>

        <div className="space-y-5">

          <div className="bg-blue-600 text-white p-5 rounded-2xl shadow-md hover:scale-[1.02] transition flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">
                MERN Stack Bootcamp
              </h3>
              <p className="text-sm opacity-90">
                120 Students Enrolled
              </p>
            </div>

            <button className="bg-white text-blue-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 transition">
              Manage
            </button>
          </div>

          <div className="bg-indigo-600 text-white p-5 rounded-2xl shadow-md hover:scale-[1.02] transition flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">
                Advanced React
              </h3>
              <p className="text-sm opacity-90">
                85 Students Enrolled
              </p>
            </div>

            <button className="bg-white text-indigo-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-100 transition">
              Manage
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default InstructorDashboard;
