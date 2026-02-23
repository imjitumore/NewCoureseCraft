const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const {
  createCourse} = require("../controllers/courseController");

router.post("/courses", upload.single("thumbnail"), createCourse);
// router.get("/", getAllCourses);
// router.get("/:id", getCourseById);

module.exports = router;