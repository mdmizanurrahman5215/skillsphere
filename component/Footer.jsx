"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Facebook", url: "#", icon: "f" },
    { name: "Twitter", url: "#", icon: "𝕏" },
    { name: "LinkedIn", url: "#", icon: "in" },
    { name: "GitHub", url: "#", icon: "⚙" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-2xl font-bold text-blue-400">⚡</div>
              <span className="text-xl font-bold text-white">SkillSphere</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering learners worldwide with quality education and skill
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-400 transition duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-blue-400 transition duration-300"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400 transition duration-300"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">✉</span>
                <div>
                  <p className="text-gray-400">Email</p>
                  <a
                    href="mailto:support@skillsphere.com"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    support@skillsphere.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">📞</span>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-400 hover:text-blue-300 transition"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">📍</span>
                <div>
                  <p className="text-gray-400">Address</p>
                  <p className="text-blue-400">
                    123 Learning St, Education City, EC 12345
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            <p>&copy; {currentYear} SkillSphere. All rights reserved.</p>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center gap-6 text-sm">
            <Link
              href="/terms"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Newsletter Signup */}
          <div className="flex justify-end">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
