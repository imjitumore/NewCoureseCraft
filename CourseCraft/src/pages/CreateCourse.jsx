import DashboardLayout from "../layouts/DashboardLayout";
import React, { useState } from "react";
import { createCourse } from "../api/courseApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateCourse = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    discountPrice: "",
  });
  const [thumbnail, setThumbnail] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  // error and success states no longer needed—using toast notifications

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
      // clear previous toasts if desired
      toast.dismiss();
    try {
      // Get instructor ID from localStorage
      const user = JSON.parse(localStorage.getItem("user"));
      // user may have _id or id depending on response
      const instructorId = user?._id || user?.id;

      if (!instructorId) {
        setError("User not logged in");
        setLoading(false);
        return;
      }

      // Create FormData to handle file upload
      const courseData = new FormData();
      courseData.append("title", formData.title);
      courseData.append("description", formData.description);
      courseData.append("price", formData.price);
      courseData.append("discountPrice", formData.discountPrice);
      courseData.append("instructor", instructorId);

      if (thumbnail) {
        courseData.append("thumbnail", thumbnail);
      }

      // Make POST request
      const response = await createCourse(courseData);

      toast.success("Course created successfully!");
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        price: "",
        discountPrice: "",
      });
      setThumbnail(null);
      setPreview(null);

      // optional redirect
      setTimeout(() => {
        // window.location.href = "/instructor-dashboard";
      }, 2000);

    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create course");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout role="instructor">
      <ToastContainer />

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Create New Course
      </h2>

      <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-3xl">

  
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Course Title */}
          <div>
            <label className="block text-gray-700 mb-2">
              Course Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter course title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Course Description */}
          <div>
            <label className="block text-gray-700 mb-2">
              Course Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Enter course description"
              value={formData.description}
              onChange={handleInputChange}
              required
              className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Course Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Course Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleInputChange}
                required
                className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Discount Price */}
            <div>
              <label className="block text-gray-700 mb-2">
                Discount Price (Optional)
              </label>
              <input
                type="number"
                name="discountPrice"
                placeholder="Enter discount price"
                value={formData.discountPrice}
                onChange={handleInputChange}
                className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
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
              required
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
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Creating Course..." : "Create Course"}
          </button>

        </form>

      </div>

    </DashboardLayout>
  );
};

export default CreateCourse;
