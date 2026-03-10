const express = require("express");
const router = express.Router();
const { enrollCourse, getEnrolledCourses, checkEnrollment } = require("../controllers/enrollementController");


router.post("/enrollments", enrollCourse);
router.get("/enrollments/:studentId", getEnrolledCourses);
router.get("/enrollments/:studentId/:courseId", checkEnrollment);

module.exports = router;