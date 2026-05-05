"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function PopularCourses() {
  const {courseData } = useAuth();
  // Get top 3 courses by rating
  const topCourses = courseData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-4xl">🔥</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-lg text-gray-600">
            Discover the most loved courses by our students
          </p>
        </div>

        {/* Top 3 Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {topCourses?.map((course, index) => (
            <div
              key={course.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Ranking Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-3 py-1 rounded-full text-sm font-bold">
                  #{index + 1}
                </div>
              </div>

              {/* Course Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
              
                <Image
                  src={course.image}
                  alt={course.title}
                  fill={true}
                  quality={100}
                  priority={false}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Course Info */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {course.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-semibold">📚 By:</span>{" "}
                  {course.instructor}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < Math.floor(course.rating)
                              ? "text-yellow-400 text-lg"
                              : "text-gray-300 text-lg"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">
                      {course.rating}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({course.students.toLocaleString()})
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 pb-4 border-b">
                  <span>⏱️ {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${course.price}
                  </span>
                  <Link
                    href={`/courses/${course.id}`}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Link */}
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Courses →
          </Link>
        </div>
      </div>
    </section>
  );
}
