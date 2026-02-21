import React from "react";
import Navbar from "../components/Navbar";

const AllCourses = () => {

  const courses = [
  {
    id: 1,
    title: "Complete React Bootcamp",
    instructor: "John Doe",
    price: 99,
    discount: 49,
    rating: 4.5,
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
  },
  {
    id: 2,
    title: "Node.js Mastery",
    instructor: "Jane Smith",
    price: 89,
    discount: 39,
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
  },
  {
    id: 3,
    title: "MongoDB Complete Guide",
    instructor: "David Lee",
    price: 79,
    discount: 29,
    rating: 4.4,
    thumbnail: "https://images.unsplash.com/photo-1555949963-aa79dcee981c"
  },
  {
    id: 4,
    title: "Advanced JavaScript Concepts",
    instructor: "Emily Clark",
    price: 109,
    discount: 59,
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    id: 5,
    title: "Full Stack MERN Development",
    instructor: "Michael Brown",
    price: 129,
    discount: 69,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    id: 6,
    title: "Python for Beginners",
    instructor: "Sophia Wilson",
    price: 59,
    discount: 25,
    rating: 4.3,
    thumbnail: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72"
  },
  {
    id: 7,
    title: "Django Web Development",
    instructor: "Daniel Carter",
    price: 89,
    discount: 44,
    rating: 4.6,
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 8,
    title: "UI/UX Design Fundamentals",
    instructor: "Olivia Martinez",
    price: 69,
    discount: 29,
    rating: 4.2,
    thumbnail: "https://images.unsplash.com/photo-1545235617-9465d2a55698"
  },
  {
    id: 9,
    title: "AWS Cloud Practitioner",
    instructor: "William Anderson",
    price: 119,
    discount: 79,
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1504639725590-34d0984388bd"
  },
  {
    id: 10,
    title: "Cybersecurity Essentials",
    instructor: "Isabella Thomas",
    price: 99,
    discount: 49,
    rating: 4.6,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    id: 11,
    title: "Machine Learning with Python",
    instructor: "James Walker",
    price: 139,
    discount: 89,
    rating: 4.8,
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    id: 12,
    title: "Flutter App Development",
    instructor: "Ava Harris",
    price: 89,
    discount: 39,
    rating: 4.5,
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3"
  },
  {
    id: 13,
    title: "Data Structures & Algorithms",
    instructor: "Benjamin Scott",
    price: 109,
    discount: 59,
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29"
  },
  {
    id: 14,
    title: "DevOps with Docker & Kubernetes",
    instructor: "Mia Rodriguez",
    price: 119,
    discount: 69,
    rating: 4.7,
    thumbnail: "https://images.unsplash.com/photo-1605379399642-870262d3d051"
  },
  {
    id: 15,
    title: "Blockchain & Web3 Development",
    instructor: "Ethan Johnson",
    price: 149,
    discount: 99,
    rating: 4.4,
    thumbnail: "https://images.unsplash.com/photo-1621761191319-c6fb62004040"
  }
];

  return (

    <>
    <Navbar/>
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-10">All Courses</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {courses.map(course => (
          <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">

            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-6">

              <h2 className="text-xl font-semibold mb-2">
                {course.title}
              </h2>

              <p className="text-gray-600 text-sm mb-1">
                Instructor: {course.instructor}
              </p>

              <p className="text-yellow-500 mb-2">
                ⭐ {course.rating}
              </p>

              <div className="mb-4">
                <span className="line-through text-gray-400 mr-2">
                  ${course.price}
                </span>
                <span className="text-indigo-600 font-bold">
                  ${course.discount}
                </span>
              </div>

              <div className="flex justify-between">

                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
                  Add to Cart
                </button>

                <button className="border px-4 py-2 rounded-lg">
                  Reviews
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

    </>
  );
};

export default AllCourses;