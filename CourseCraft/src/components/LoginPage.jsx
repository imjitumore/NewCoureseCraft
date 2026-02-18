import { useState } from "react";
import React from "react";

const LoginPage = () => {
  const [role, setRole] = useState("student");

  const toggleRole = () => {
    setRole((prev) => (prev === "student" ? "instructor" : "student"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-200 px-4">

      <div className="backdrop-blur-lg bg-white/40 border border-white/30 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center shadow-2xl transition-all duration-500">

        {/* ===== LEFT TOGGLE SECTION ===== */}
        <div className="relative flex flex-col items-center">

          <div
            onClick={toggleRole}
            className="w-24 h-80 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full flex items-center justify-center relative cursor-pointer shadow-inner transition-all duration-500 hover:scale-105"
          >
            {/* Toggle Circle */}
            <div
              className={`absolute w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-sm font-bold text-blue-600 transition-all duration-500 ${
                role === "student"
                  ? "top-4"
                  : "bottom-4"
              }`}
            >
              {role === "student" ? "S" : "I"}
            </div>
          </div>

          {/* Labels */}
          <div className="mt-6 text-center font-semibold text-gray-700 text-lg tracking-wide transition-all duration-500">
            {role === "student" ? "Student Login" : "Instructor Login"}
          </div>
        </div>

        {/* ===== RIGHT FORM SECTION ===== */}
        <div className="w-[350px] md:w-[450px] bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[35px] p-8 text-white shadow-xl transition-all duration-500">

          <h2 className="text-3xl font-bold mb-8 tracking-wide">
            {role === "student"
              ? "Student Login"
              : "Instructor Login"}
          </h2>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-xl text-black outline-none focus:ring-2 focus:ring-white focus:scale-[1.02] transition-all duration-300 shadow-md"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-xl text-black outline-none focus:ring-2 focus:ring-white focus:scale-[1.02] transition-all duration-300 shadow-md"
            />

            <div className="text-right text-sm">
              <a
                href="#"
                className="text-white/80 hover:text-white transition duration-300"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-blue-700 font-semibold py-3 rounded-xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-lg tracking-wide"
            >
              Login as {role === "student" ? "Student" : "Instructor"}
            </button>

            <div className="text-center text-sm mt-4 text-white/80">
              Don’t have an account?{" "}
              <span className="underline cursor-pointer hover:text-white transition">
                Register now
              </span>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
