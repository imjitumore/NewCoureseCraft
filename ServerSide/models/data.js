const mongoose = require("mongoose");
 
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "instructor", "student"],
      default: "student",
    },
    profileImage: String,
    bio: String,
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("User", userSchema);






const reviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    comment: String,
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Review", reviewSchema);



const quizSchema = new mongoose.Schema(
  {
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    title: {
      type: String,
      required: true,
    },
    passPercentage: {
      type: Number,
      default: 60,
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Quiz", quizSchema);    




const questionSchema = new mongoose.Schema(
  {
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quiz",
    },
    questionText: {
      type: String,
      required: true,
    },
    options: [String],
    correctAnswer: Number, // index of correct option
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Question", questionSchema);



const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    fileUrl: {
      type: String,
      required: true,
    },
    fileType: String, // video/mp4 or application/pdf
    duration: Number,
    order: Number,
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Lesson", lessonSchema);



const enrollmentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    completedLessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
    progress: {
      type: Number,
      default: 0,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Enrollment", enrollmentSchema);




const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      default: 0,
    },
    thumbnail: String,
    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: String,
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
      },
    ],
    enrolledCount: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Course", courseSchema);



const certificateSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
    issuedDate: {
      type: Date,
      default: Date.now,
    },
    certificateUrl: String,
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("Certificate", certificateSchema);





