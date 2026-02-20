import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import React from "react";

const InstructorDashboard = () => {
  return (
    <DashboardLayout role="instructor">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Instructor Overview
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl">
          <h3 className="text-gray-700">Total Courses</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">4</p>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl">
          <h3 className="text-gray-700">Total Students</h3>
          <p className="text-3xl font-bold text-green-500 mt-2">120</p>
        </div>

        <div className="bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl">
          <h3 className="text-gray-700">Total Earnings</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">$2,500</p>
        </div>

      </div>

      {/* Course List */}
      <div className="mt-10 bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl">

        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          My Courses
        </h3>

        <div className="space-y-4">

          <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-2xl">
            <div>
              <h4 className="font-semibold">MERN Bootcamp</h4>
              <p className="text-sm opacity-80">80 Students Enrolled</p>
            </div>
            {/* <button className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-100 transition">
              Manage
            </button> */}


            <Link to={`/manage-course`}><p className="bg-white text-blue-600 px-4 py-1 rounded-lg hover:bg-gray-100 transition">Manage</p></Link>

          </div>

          <div className="flex justify-between items-center bg-indigo-600 text-white p-4 rounded-2xl">
            <div>
              <h4 className="font-semibold">Advanced React</h4>
              <p className="text-sm opacity-80">40 Students Enrolled</p>
            </div>
            <button className="bg-white text-indigo-600 px-4 py-1 rounded-lg hover:bg-gray-100 transition">
              Manage
            </button>
          </div>

        </div>

      </div>

    </DashboardLayout>
  );
};

export default InstructorDashboard;
