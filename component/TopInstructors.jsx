"use client";

import { instructorsData } from "@/data/coursesData";
import Link from "next/link";

export default function TopInstructors() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-4xl">🏆</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top Instructors
          </h2>
          <p className="text-lg text-gray-600">
            Learn from industry experts with years of experience
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructorsData.map((instructor) => (
            <div
              key={instructor.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Background Gradient */}
              <div className="h-24 bg-gradient-to-r from-blue-600 to-blue-800"></div>

              {/* Avatar (Overlapping) */}
              <div className="px-6 pb-4">
                <div className="flex justify-center -mt-16 mb-4">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Instructor Info */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {instructor.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    {instructor.title}
                  </p>
                  <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                    {instructor.bio}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y">
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-600">
                      {instructor.courses}
                    </p>
                    <p className="text-xs text-gray-600">Courses</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-600">
                      {(instructor.students / 1000).toFixed(1)}K
                    </p>
                    <p className="text-xs text-gray-600">Students</p>
                  </div>
                </div>

                {/* Follow Button */}
                <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Instructors Link */}
        <div className="text-center mt-12">
          <div className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Instructors →
          </div>
        </div>
      </div>
    </section>
  );
}
