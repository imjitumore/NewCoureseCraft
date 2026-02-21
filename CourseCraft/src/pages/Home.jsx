import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {

  const featuredCourses = [
    {
      id: 1,
      title: "Complete React Development",
      instructor: "John Doe",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
      id: 2,
      title: "Node.js & Express Bootcamp",
      instructor: "Jane Smith",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    },
    {
      id: 3,
      title: "MongoDB Mastery",
      instructor: "David Lee",
      thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
  ];

  const instructors = [
    {
      name: "John Doe",
      expertise: "Frontend Expert",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      expertise: "Backend Specialist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Lee",
      expertise: "Database Architect",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (


    <>
    <Navbar/>
   
    <div className="bg-gray-50">


      {/* Hero Section */}
      <section className="bg-indigo-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Learn Skills That Shape Your Future
        </h1>
        <p className="text-lg mb-8">
          High-quality courses from industry experts.
        </p>
        <Link
          to="/allcourses"
          className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold"
        >
          Explore Courses
        </Link>
      </section>


      {/* Featured Courses */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">

              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {course.instructor}
                </p>

                <Link
                  to={`/course-player/${course.id}`}
                  className="block text-center bg-indigo-600 text-white py-2 rounded-lg"
                >
                  Start Learning
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>


      {/* Features Section */}
      <section className="bg-white py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Expert Instructors
            </h3>
            <p className="text-gray-600">
              Learn from industry professionals with real-world experience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Lifetime Access
            </h3>
            <p className="text-gray-600">
              Access courses anytime, anywhere, forever.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">
              Practical Projects
            </h3>
            <p className="text-gray-600">
              Build real-world projects and enhance your portfolio.
            </p>
          </div>

        </div>
      </section>


      {/* Top Instructors */}
      <section className="py-16 px-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Instructors
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          {instructors.map((instructor, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow">

              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />

              <h3 className="text-xl font-semibold">
                {instructor.name}
              </h3>

              <p className="text-gray-600">
                {instructor.expertise}
              </p>

            </div>
          ))}

        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-indigo-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Start Learning Today
        </h2>

        <Link
          to="/register"
          className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold"
        >
          Join Now
        </Link>
      </section>

    </div>
     </>
  );
};

export default Home;