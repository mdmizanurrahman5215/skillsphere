"use client";

import { learningTips } from "@/data/coursesData";

export default function LearningTips() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="text-4xl">📌</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learning Tips & Techniques
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master effective study strategies to accelerate your learning
            journey
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningTips.map((tip) => (
            <div
              key={tip.id}
              className="group p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-transparent hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {tip.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{tip.description}</p>

              {/* Decorative Line */}
              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-600 to-transparent group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Level Up Your Learning?
          </h3>
          <p className="text-lg text-blue-100 mb-8">
            Apply these techniques in our courses and watch your progress soar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105">
              Start a Course Today
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition transform hover:scale-105">
              Learn More Tips
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
