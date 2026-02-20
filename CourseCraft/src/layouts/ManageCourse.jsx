import DashboardLayout from "../layouts/DashboardLayout";
import React, { useState } from "react";

const ManageCourse = () => {

  const [lessons, setLessons] = useState([
    { id: 1, title: "Introduction", duration: "10 min" },
  ]);

  const [lessonData, setLessonData] = useState({
    title: "",
    duration: "",
    description: "",
    video: null,
    thumbnail: null,
  });

  const [preview, setPreview] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setLessonData({
      ...lessonData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle thumbnail image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLessonData({ ...lessonData, thumbnail: file });
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle video upload
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLessonData({ ...lessonData, video: file });
    }
  };

  // Add lesson
  const handleAddLesson = () => {
    if (!lessonData.title || !lessonData.duration) return;

    const newLesson = {
      id: Date.now(),
      title: lessonData.title,
      duration: lessonData.duration,
    };

    setLessons([...lessons, newLesson]);

    // Reset form
    setLessonData({
      title: "",
      duration: "",
      description: "",
      video: null,
      thumbnail: null,
    });

    setPreview(null);
  };

  const handleDelete = (id) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  return (
    <DashboardLayout role="instructor">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Manage Course
      </h2>

      {/* Add Lesson Section */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h3 className="text-lg font-semibold mb-6">Add New Lesson</h3>

        <div className="space-y-4">

          <input
            type="text"
            name="title"
            value={lessonData.title}
            onChange={handleChange}
            placeholder="Lesson Title"
            className="w-full p-3 border rounded-xl"
          />

          <input
            type="text"
            name="duration"
            value={lessonData.duration}
            onChange={handleChange}
            placeholder="Duration (e.g. 15 min)"
            className="w-full p-3 border rounded-xl"
          />

          <textarea
            name="description"
            value={lessonData.description}
            onChange={handleChange}
            placeholder="Lesson Description"
            rows="3"
            className="w-full p-3 border rounded-xl"
          ></textarea>

          {/* Video Upload */}
          <div>
            <label className="block mb-2 font-medium">
              Upload Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="w-full p-2 border rounded-xl"
            />
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block mb-2 font-medium">
              Upload Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded-xl"
            />

            {preview && (
              <img
                src={preview}
                alt="Thumbnail Preview"
                className="mt-4 w-40 h-24 object-cover rounded-xl shadow"
              />
            )}
          </div>

          <button
            onClick={handleAddLesson}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl"
          >
            Add Lesson
          </button>

        </div>
      </div>

      {/* Lessons List */}
      <div className="bg-white p-6 rounded-2xl shadow">
        <h3 className="text-lg font-semibold mb-4">
          Course Lessons
        </h3>

        {lessons.length === 0 ? (
          <p>No lessons added yet.</p>
        ) : (
          <div className="space-y-4">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="flex justify-between items-center border p-4 rounded-xl"
              >
                <div>
                  <p className="font-semibold">{lesson.title}</p>
                  <p className="text-gray-500 text-sm">
                    {lesson.duration}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(lesson.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-lg"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </DashboardLayout>
  );
};

export default ManageCourse;
