const Enrollment = require("../models/enrollment");
const Course = require("../models/course");

exports.enrollCourse = async (req, res) => {
  try {
    const { studentId, courseId } = req.body;

    // Check if course exists
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
      student: studentId,
      course: courseId,
    });

    if (existingEnrollment) {
      return res.status(400).json({ message: "Already enrolled" });
    }

    // Create enrollment
    const enrollment = await Enrollment.create({
      student: studentId,
      course: courseId,
    });

    res.status(201).json({
      message: "Enrolled successfully",
      enrollment,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};