import DashboardLayout from "../layouts/DashboardLayout";
import React from "react";

const CreateCourse = () => {
  return (
    <DashboardLayout role="instructor">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Course
      </h2>

      <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-3xl">

        <form className="space-y-6">

          <div>
            <label className="block text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              placeholder="Enter course title"
              className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Course Description
            </label>
            <textarea
              rows="4"
              placeholder="Enter course description"
              className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Course Price
            </label>
            <input
              type="number"
              placeholder="Enter price"
              className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Create Course
          </button>

        </form>

      </div>

    </DashboardLayout>
  );
};

export default CreateCourse;
