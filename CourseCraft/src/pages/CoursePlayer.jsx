import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const CoursePlayer = () => {
  const { courseId } = useParams();

  const lessonsData = [
    {
      id: 1,
      title: "Introduction to React",
      description: "Welcome to this React course. In this lesson, we will understand what React is and why it is used.",
      instructor: "John Doe",
      duration: "8:32",
      resources: "Slides + Source Code",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Setting Up Environment",
      description: "In this lesson, we will set up Node.js, VS Code, and create our first React project.",
      instructor: "John Doe",
      duration: "12:15",
      resources: "Installation Guide PDF",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  const [currentLesson, setCurrentLesson] = useState(lessonsData[0]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const handleTimeUpdate = (e) => {
    const video = e.target;
    const progress = (video.currentTime / video.duration) * 100;

    if (
      progress >= 80 &&
      !completedLessons.includes(currentLesson.id)
    ) {
      setCompletedLessons([...completedLessons, currentLesson.id]);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 flex">

        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow p-4">
          <h2 className="text-lg font-semibold mb-4">
            Course Lessons
          </h2>

          <div className="space-y-3">
            {lessonsData.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => setCurrentLesson(lesson)}
                className={`p-3 rounded-lg cursor-pointer ${
                  currentLesson.id === lesson.id
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                {lesson.title}

                {completedLessons.includes(lesson.id) && (
                  <span className="ml-2 text-green-400 font-bold">
                    ✔
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Player */}
        <div className="w-3/4 p-8">

          <h1 className="text-2xl font-bold mb-4">
            {currentLesson.title}
          </h1>

          <video
            key={currentLesson.videoUrl}
            controls
            onTimeUpdate={handleTimeUpdate}
            className="w-full rounded-xl shadow mb-6"
          >
            <source src={currentLesson.videoUrl} type="video/mp4" />
          </video>

          {/* Lesson Details Section */}
          <div className="bg-white p-6 rounded-xl shadow">

            <p className="text-gray-700 mb-4">
              {currentLesson.description}
            </p>

            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">

              <div>
                <strong>Instructor:</strong><br />
                {currentLesson.instructor}
              </div>

              <div>
                <strong>Duration:</strong><br />
                {currentLesson.duration}
              </div>

              <div>
                <strong>Resources:</strong><br />
                {currentLesson.resources}
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default CoursePlayer;