import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      
      {/* ================= NAVBAR ================= */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">SkillForge</h1>

          <nav className="hidden md:flex space-x-8 font-medium">
            <a href="#" className="hover:text-indigo-600 transition">Courses</a>
            <a href="#" className="hover:text-indigo-600 transition">About</a>
            <Link to={"/studentDashboard"}><p className="hover:text-indigo-600 transition" >Login</p></Link>

            <Link to={"/register"}><p className="hover:text-indigo-600 transition" >Register</p></Link>
           
          </nav>
        </div>
      </header>

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Upgrade Your Skills with SkillForge
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Learn from expert instructors and advance your career with
            industry-ready courses.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
              Browse Courses
            </button>
            <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition">
              Become Instructor
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED COURSES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          Featured Courses
        </h3>

        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((course) => (
            <div
              key={course}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">
                  Full Stack MERN Development
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Master MongoDB, Express, React, and Node with real-world projects.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-indigo-600 font-bold">$49</span>
                  <button className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                    View Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">How It Works</h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-indigo-600 text-4xl font-bold mb-4">1</div>
              <h4 className="font-semibold text-lg mb-2">Sign Up</h4>
              <p className="text-gray-600">
                Create your free account in minutes.
              </p>
            </div>

            <div>
              <div className="text-indigo-600 text-4xl font-bold mb-4">2</div>
              <h4 className="font-semibold text-lg mb-2">Enroll in Course</h4>
              <p className="text-gray-600">
                Choose from a wide range of expert-led courses.
              </p>
            </div>

            <div>
              <div className="text-indigo-600 text-4xl font-bold mb-4">3</div>
              <h4 className="font-semibold text-lg mb-2">Start Learning</h4>
              <p className="text-gray-600">
                Watch lessons, complete quizzes, and earn certificates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">
          What Our Students Say
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <p className="text-gray-600 mb-4">
                "This platform completely changed my learning experience.
                Highly recommended!"
              </p>
              <div className="font-semibold">John Doe</div>
              <div className="text-sm text-gray-500">Frontend Developer</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-xl font-bold text-white mb-4">SkillForge</h4>
          <p className="text-sm mb-4">
            © {new Date().getFullYear()} SkillForge. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
