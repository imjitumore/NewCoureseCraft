const Lesson = require("../models/lesson");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

exports.createLesson = async (req, res) => {
  try {
    const { title, description, order, course } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Video file is required" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
      folder: "lms_videos",
    });

    // Delete file from local uploads folder after upload
    fs.unlinkSync(req.file.path);

    const lesson = await Lesson.create({
      title,
      description,
      order,
      course,
      videoUrl: result.secure_url,
      videoPublicId: result.public_id,
    });

    res.status(201).json({
      message: "Lesson created successfully",
      lesson,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getLessonsByCourse = async (req, res) => {
  try {
    const lessons = await Lesson.find({
      course: req.params.courseId,
    }).sort({ order: 1 });

    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getSingleLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




exports.updateLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    // If new video uploaded
    if (req.file) {
      // Delete old video from Cloudinary
      await cloudinary.uploader.destroy(lesson.videoPublicId, {
        resource_type: "video",
      });

      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "video",
        folder: "lms_videos",
      });

      fs.unlinkSync(req.file.path);

      lesson.videoUrl = result.secure_url;
      lesson.videoPublicId = result.public_id;
    }

    lesson.title = req.body.title || lesson.title;
    lesson.description = req.body.description || lesson.description;
    lesson.order = req.body.order || lesson.order;

    await lesson.save();

    res.json({
      message: "Lesson updated successfully",
      lesson,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deleteLesson = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
      return res.status(404).json({ message: "Lesson not found" });
    }

    // Delete video from Cloudinary
    await cloudinary.uploader.destroy(lesson.videoPublicId, {
      resource_type: "video",
    });

    await lesson.deleteOne();

    res.json({ message: "Lesson deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};