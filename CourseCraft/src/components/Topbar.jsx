import { useNavigate } from "react-router-dom";
import React from "react";

const Topbar = ({ role }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white/50 backdrop-blur-md shadow-md p-4 flex justify-between items-center">

      <h1 className="text-xl font-semibold text-gray-800 capitalize">
        {role} Panel
      </h1>

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
