import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Get user from localStorage to determine role
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!user;
  const userRole = user?.role;



  console.log("Navbar - User:", userRole, "IsLoggedIn:", isLoggedIn);

  // Determine dashboard link based on role
  const dashboardLink = userRole === "instructor" ? "/instructor-dashboard" : "/student-dashboard";

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">

      <Link to="/" className="text-2xl font-bold text-indigo-600">
        CourseCraft
      </Link>

      <div className="space-x-6">
        <Link to="/home" className="hover:text-indigo-600">
          Home
        </Link>


        {isLoggedIn && userRole === "student" && (
        <Link to="/allcourses" className="hover:text-indigo-600">
          Courses
        </Link>
        )}

       

        <Link to="/about" className="hover:text-indigo-600">
          About us
        </Link>

        <Link to="/contact" className="hover:text-indigo-600">
          Contact us
        </Link>

        {isLoggedIn && (
          <Link to="/dashboard" className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Dashboard
          </Link>
        )}
      </div>

    </nav>
  );
};

export default Navbar;