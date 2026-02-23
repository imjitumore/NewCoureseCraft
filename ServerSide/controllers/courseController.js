const Course = require("../models/course");

exports.createCourse = async (req, res) => {
  try {
    const { title, description, price, discountPrice, instructor } = req.body;

    const thumbnail = req.file
      ? `/uploads/${req.file.filename}`
      : null;

    const course = await Course.create({
      title,
      description,
      price,
      discountPrice,
      instructor,
      thumbnail,
    });

    res.status(201).json({
      message: "Course created successfully",
      course,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};