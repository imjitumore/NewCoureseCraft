import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import React from "react";

const StudentDashboard = () => {
  return (

    
    <DashboardLayout role="student">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Student Overview
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white/60 p-6 rounded-3xl shadow-xl">
          <h3>Enrolled Courses</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">5</p>
        </div>

        <div className="bg-white/60 p-6 rounded-3xl shadow-xl">
          <h3>Completed</h3>
          <p className="text-3xl font-bold text-green-500 mt-2">2</p>
        </div>

        <div className="bg-white/60 p-6 rounded-3xl shadow-xl">
          <h3>Progress</h3>
          <p className="text-3xl font-bold text-purple-600 mt-2">60%</p>
        </div>
      </div>

      
      
    </DashboardLayout>
  );
};

export default StudentDashboard;
