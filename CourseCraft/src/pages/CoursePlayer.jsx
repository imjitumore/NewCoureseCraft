import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const CoursePlayer = () => {
  const { courseId } = useParams();

  // Static lessons (later from backend)
  const lessonsData = [
    {
      id: 1,
      title: "Introduction",
      description: "Welcome to the course introduction.",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Getting Started",
      description: "Let’s set up the project environment.",
      videoUrl: "https://www.w3schools.com/html/movie.mp4",
    },
  ];

  const [currentLesson, setCurrentLesson] = useState(lessonsData[0]);
  const [completedLessons, setCompletedLessons] = useState([]);

  const markAsCompleted = () => {
    if (!completedLessons.includes(currentLesson.id)) {
      setCompletedLessons([...completedLessons, currentLesson.id]);
    }
  };

  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gray-100 flex">

      {/* Lesson Sidebar */}
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
                <span className="ml-2 text-green-400">✔</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Video Player Section */}
      <div className="w-3/4 p-8">

        <h1 className="text-2xl font-bold mb-4">
          {currentLesson.title}
        </h1>

        <video
          key={currentLesson.videoUrl}
          controls
          className="w-full rounded-xl shadow mb-6"
        >
          <source src={currentLesson.videoUrl} type="video/mp4" />
        </video>

        <p className="text-gray-700 mb-6">
          {currentLesson.description}
        </p>

        <button
          onClick={markAsCompleted}
          className="bg-green-600 text-white px-6 py-2 rounded-lg"
        >
          Mark as Completed
        </button>

      </div>

    </div></>
  );
};

export default CoursePlayer;