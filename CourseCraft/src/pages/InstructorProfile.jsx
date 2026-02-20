import DashboardLayout from "../layouts/DashboardLayout";
import React from "react";

const InstructorProfile = () => {
  return (
    <DashboardLayout role="instructor">

      <div className="max-w-6xl mx-auto space-y-8">

        {/* Profile Header */}
        <div className="bg-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8">

          <img
            src="https://via.placeholder.com/150"
            alt="Instructor"
            className="w-36 h-36 rounded-full object-cover shadow-lg"
          />

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              John Doe
            </h2>
            <p className="text-indigo-600 font-medium mt-2">
              Senior MERN Stack Developer
            </p>
            <p className="text-gray-600 mt-4 max-w-xl">
              Passionate full-stack developer with 5+ years of experience
              building scalable web applications and mentoring students
              worldwide.
            </p>
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-3xl font-bold text-blue-600">8</p>
            <p className="text-gray-600">Courses</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-3xl font-bold text-green-600">1,200+</p>
            <p className="text-gray-600">Students</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-3xl font-bold text-yellow-500">4.8 ⭐</p>
            <p className="text-gray-600">Average Rating</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow text-center">
            <p className="text-3xl font-bold text-purple-600">5+</p>
            <p className="text-gray-600">Years Experience</p>
          </div>

        </div>

        {/* Skills Section */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4">
            Skills & Expertise
          </h3>

          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Next.js"].map((skill, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-xl font-semibold mb-4">
            Social Links
          </h3>

          <div className="space-y-2">
            <p className="text-blue-600 cursor-pointer">
              🔗 linkedin.com/in/johndoe
            </p>
            <p className="text-gray-800 cursor-pointer">
              💻 github.com/johndoe
            </p>
            <p className="text-indigo-600 cursor-pointer">
              🌐 www.johndoe.dev
            </p>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
};

export default InstructorProfile;
