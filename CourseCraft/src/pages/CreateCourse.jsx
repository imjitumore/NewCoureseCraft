import DashboardLayout from "../layouts/DashboardLayout";
import React, { useState } from "react";

const CreateCourse = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <DashboardLayout role="instructor">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Course
      </h2>

      <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-3xl">

        <form className="space-y-6">

          {/* Course Title */}
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

          {/* Course Description */}
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

          {/* Course Price */}
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

          {/* Thumbnail Upload */}
          <div>
            <label className="block text-gray-700 mb-2">
              Course Thumbnail
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-3 rounded-xl border bg-white"
            />

            {preview && (
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">
                  Preview:
                </p>
                <img
                  src={preview}
                  alt="Thumbnail Preview"
                  className="w-48 h-32 object-cover rounded-xl shadow"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
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
