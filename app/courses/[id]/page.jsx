"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import Loader from "@/component/Loader";
import { showSuccess, showError } from "@/utils/toast";

// Curriculum data
const curriculumData = {
  1: [
    { id: 1, title: "HTML Fundamentals", duration: "2 hours", videoCount: 12 },
    {
      id: 2,
      title: "CSS & Responsive Design",
      duration: "3 hours",
      videoCount: 15,
    },
    { id: 3, title: "JavaScript Basics", duration: "4 hours", videoCount: 18 },
    {
      id: 4,
      title: "Advanced JavaScript",
      duration: "5 hours",
      videoCount: 20,
    },
  ],
  2: [
    {
      id: 1,
      title: "React Hooks Deep Dive",
      duration: "3 hours",
      videoCount: 14,
    },
    { id: 2, title: "State Management", duration: "4 hours", videoCount: 16 },
    {
      id: 3,
      title: "Performance Optimization",
      duration: "3 hours",
      videoCount: 12,
    },
    {
      id: 4,
      title: "Real-world Patterns",
      duration: "5 hours",
      videoCount: 18,
    },
  ],
  3: [
    { id: 1, title: "Design Principles", duration: "2 hours", videoCount: 10 },
    {
      id: 2,
      title: "Typography & Colors",
      duration: "3 hours",
      videoCount: 14,
    },
    {
      id: 3,
      title: "Wireframing & Prototyping",
      duration: "4 hours",
      videoCount: 16,
    },
    {
      id: 4,
      title: "User Research & Testing",
      duration: "3 hours",
      videoCount: 12,
    },
  ],
};

export default function CourseDetail() {
  const params = useParams();
  const router = useRouter();
  const { user, isLoggedIn, loading, courseData } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);

  const courseId = parseInt(params.id, 10);
  const course = courseData.find((c) => c.id === courseId);

  // Check auth status
  useEffect(() => {
    if (!loading && !isLoggedIn) {
      showError("Please log in to view this course");
      router.push(`/login?redirect=/courses/${courseId}`);
    }
  }, [isLoggedIn, loading, courseId, router]);

  if (loading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    return null;
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Course Not Found
          </h1>
          <Link
            href="/courses"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Back to Courses
          </Link>
        </motion.div>
      </div>
    );
  }

  const curriculum = curriculumData[courseId] || [];

  const handleEnroll = () => {
    setIsEnrolled(true);
    showSuccess("Successfully enrolled in the course!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <motion.div
        className="bg-white border-b"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/courses" className="text-blue-600 hover:underline">
              Courses
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-900 font-semibold">{course.title}</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-lg text-sm font-semibold mb-4">
                {course.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-blue-100 mb-6">{course.description}</p>
              <div className="flex items-center gap-6 text-sm flex-wrap">
                <div>
                  <p className="text-blue-100">Instructor</p>
                  <p className="font-bold text-lg">{course.instructor}</p>
                </div>
                <div>
                  <p className="text-blue-100">Duration</p>
                  <p className="font-bold text-lg">{course.duration}</p>
                </div>
                <div>
                  <p className="text-blue-100">Level</p>
                  <p className="font-bold text-lg">{course.level}</p>
                </div>
              </div>
            </div>
            <motion.div
              className="flex flex-col gap-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover rounded-xl shadow-xl"
              />
              <div className="bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <p className="text-sm text-gray-600">Price</p>
                <p className="text-4xl font-bold text-blue-600 mb-4">
                  ${course.price}
                </p>
                <motion.button
                  onClick={handleEnroll}
                  disabled={isEnrolled}
                  className={`w-full px-6 py-3 rounded-lg font-bold transition transform hover:scale-105 mb-3 ${
                    isEnrolled
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-700 hover:to-blue-900"
                  }`}
                  whileHover={!isEnrolled ? { scale: 1.05 } : {}}
                  whileTap={!isEnrolled ? { scale: 0.95 } : {}}
                >
                  {isEnrolled ? "✓ Enrolled" : "Enroll Now"}
                </motion.button>
                <motion.button
                  className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ♡ Add to Wishlist
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Course Overview
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {course.description}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Students</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {(course.students / 1000).toFixed(1)}K
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {course.rating}/5
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {course.duration}
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Level</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {course.level}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Comprehensive understanding of core concepts",
                  "Hands-on practice with real-world projects",
                  "Industry best practices and standards",
                  "Certification upon course completion",
                  "Lifetime access to course materials",
                  "Community support and networking",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-green-500 font-bold text-xl flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-gray-600">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Course Curriculum */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                📚 Course Curriculum
              </h2>
              <div className="space-y-4">
                {curriculum?.length > 0 ? (
                  curriculum?.map((section, index) => (
                    <motion.div
                      key={section.id}
                      className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-500 transition cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">
                            Section {section.id}: {section.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            ⏱️ {section.duration} • 🎥 {section.videoCount}{" "}
                            videos
                          </p>
                        </div>
                        <span className="text-2xl">▶️</span>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-gray-600">
                    Curriculum details coming soon
                  </p>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                About the Instructor
              </h3>
              <div className="text-center mb-4">
                <motion.img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${course.instructor}`}
                  alt={course.instructor}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                />
                <h4 className="text-lg font-bold text-gray-900">
                  {course.instructor}
                </h4>
                <p className="text-sm text-gray-600">Expert Instructor</p>
              </div>
              <motion.button
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                whileHover={{ scale: 1.05 }}
              >
                View Profile
              </motion.button>
            </motion.div>

            {/* Rating */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Course Rating
              </h3>
              <div className="text-center">
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)]?.map((_, i) => (
                    <span
                      key={i}
                      className={
                        i < Math.floor(course.rating)
                          ? "text-yellow-400 text-3xl"
                          : "text-gray-300 text-3xl"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-3xl font-bold text-gray-900">
                  {course.rating}
                </p>
                <p className="text-gray-600 text-sm">
                  Based on {course.students.toLocaleString()} student reviews
                </p>
              </div>
            </motion.div>

            {/* User Info */}
            {user && (
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  👤 Your Info
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Name:</span> {user.name}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Email:</span> {user.email}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
