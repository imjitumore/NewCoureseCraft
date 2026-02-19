import { NavLink } from "react-router-dom";
import React from "react";

const Sidebar = ({ role }) => {
  return (
    <div className="w-64 bg-white/40 backdrop-blur-lg border-r border-white/30 shadow-xl p-6">

      <h2 className="text-2xl font-bold text-blue-700 mb-8">
        CourseCraft
      </h2>

      <nav className="space-y-4">

        {/* STUDENT MENU */}
        {role === "student" && (
          <>
            <NavLink
              to="/student-dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/my-courses"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`
              }
            >
              My Courses
            </NavLink>
          </>
        )}

        {/* INSTRUCTOR MENU */}
        {role === "instructor" && (
          <>
            <NavLink
              to="/instructor-dashboard"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/create-course"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-xl transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-100"
                }`
              }
            >
              Create Course
            </NavLink>
          </>
        )}

      </nav>
    </div>
  );
};

export default Sidebar;
