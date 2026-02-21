import { Link,useNavigate } from "react-router-dom";
import React from "react";

const Topbar = ({ role }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/50 backdrop-blur-md shadow-md p-4 flex justify-end gap-8 items-center">

      <Link to="/home" className="hover:text-indigo-600">
          Home
        </Link>

        <Link to="/allcourses" className="hover:text-indigo-600">
          Courses
        </Link>

        <Link to="/about" className="hover:text-indigo-600">
          About us
        </Link>

        <Link to="/contact" className="hover:text-indigo-600">
          Contact us
        </Link>

      <button
        onClick={() => navigate("/login")}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Logout
      </button>

    </div>
  );
};

export default Topbar;
