"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function Banner() {
  const slides = [
    {
      id: 1,
      title: "Upgrade Your Skills Today",
      emoji: "🚀",
      description:
        "Master in-demand skills from industry experts and transform your career",
      image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      cta: "Browse Courses",
      ctaLink: "/courses",
    },
    {
      id: 2,
      title: "Learn from Industry Experts",
      emoji: "👨‍🏫",
      description:
        "Access world-class instructors and get certified in your field of interest",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      cta: "Start Learning",
      ctaLink: "/courses",
    },
    {
      id: 3,
      title: "Career Growth Made Easy",
      emoji: "📈",
      description:
        "Track your progress and unlock new opportunities in your career",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      cta: "Join Now",
      ctaLink: "/register",
    },
    {
      id: 4,
      title: "Build Your Portfolio",
      emoji: "🎯",
      description:
        "Complete real-world projects and showcase your skills to potential employers",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      cta: "Explore Projects",
      ctaLink: "/courses",
    },
    {
      id: 5,
      title: "Connect & Collaborate",
      emoji: "🤝",
      description:
        "Network with learners and professionals from around the globe",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      cta: "Join Community",
      ctaLink: "/community",
    },
  ];

  return (
    <section className="w-full h-screen md:h-[600px] bg-gray-900 overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides?.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full flex items-center justify-center relative overflow-hidden"
              style={{
                background: slide.image,
              }}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                {/* Emoji */}
                <div className="text-6xl md:text-8xl mb-4 animate-bounce">
                  {slide.emoji}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl mb-8 text-gray-100 drop-shadow-md max-w-2xl mx-auto">
                  {slide.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href={slide.ctaLink}
                    className="px-8 py-3 bg-white text-gray-900 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
                  >
                    {slide.cta}
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-gray-900 transition transform hover:scale-105 shadow-lg"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-8 md:gap-16 mt-12 flex-wrap">
                  <div className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-lg">
                    <p className="text-2xl md:text-3xl font-bold">10K+</p>
                    <p className="text-sm md:text-base text-gray-200">
                      Active Students
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-lg">
                    <p className="text-2xl md:text-3xl font-bold">500+</p>
                    <p className="text-sm md:text-base text-gray-200">
                      Expert Instructors
                    </p>
                  </div>
                  <div className="backdrop-blur-md bg-white/10 px-6 py-3 rounded-lg">
                    <p className="text-2xl md:text-3xl font-bold">1K+</p>
                    <p className="text-sm md:text-base text-gray-200">
                      Courses Available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <div className="swiper-button-prev !w-12 !h-12 !bg-white/20 !rounded-full !backdrop-blur-md hover:!bg-white/30 transition !top-1/2 !left-4 md:!left-8 after:!text-white after:!text-2xl after:!font-bold"></div>
        <div className="swiper-button-next !w-12 !h-12 !bg-white/20 !rounded-full !backdrop-blur-md hover:!bg-white/30 transition !top-1/2 !right-4 md:!right-8 after:!text-white after:!text-2xl after:!font-bold"></div>
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx>{`
        :global(.swiper-pagination-bullet) {
          background: rgba(255, 255, 255, 0.5) !important;
        }
        :global(.swiper-pagination-bullet-active) {
          background: rgba(255, 255, 255, 1) !important;
        }
        :global(.delay-2000) {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
