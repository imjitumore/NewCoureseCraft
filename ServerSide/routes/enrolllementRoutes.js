const express = require("express");
const router = express.Router();
const { enrollCourse } = require("../controllers/enrollementController");


router.post("/enrollments", enrollCourse);

module.exports = router;