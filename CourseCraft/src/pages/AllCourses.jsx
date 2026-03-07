import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { getAllCourses } from "../api/courseApi";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getAllCourses();
        setCourses(res.data);
      } catch (err) {
        console.error("Failed to load courses", err);
      }
    };
    fetchCourses();
  }, []);


  return (

    <>
    <Navbar/>
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-10">All Courses</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {courses.map(course => (
          <div key={course._id || course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

            <img
                src={course.thumbnail ? `http://localhost:5000${course.thumbnail}` : "https://via.placeholder.com/400x200?text=No+Image"}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
            <div className="p-6">

              <h2 className="text-xl font-semibold mb-2">
                {course.title}
              </h2>

              <p className="text-gray-600 text-sm mb-1">
                Instructor: {course.instructor?.name || "Unknown"}
              </p>

              <p className="text-yellow-500 mb-2">
                ⭐ {course.rating}
              </p>

              <div className="mb-4">
                <span className="line-through text-gray-400 mr-2">
                  ${course.price}
                </span>
                <span className="text-indigo-600 font-bold">
                  ${course.discountPrice || course.price}
                </span>
              </div>

              <div className="flex justify-between">

                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Add to Cart
                </button>

                <button className="border px-4 py-2 rounded-lg">
                  Reviews
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

    </>
  );
};

export default AllCourses;