"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import Loader from "@/component/Loader";

export default function ProfilePage() {
  const { user, isLoggedIn, loading, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push("/login?redirect=/profile");
    }
  }, [isLoggedIn, loading, router]);

  if (loading) {
    return <Loader />;
  }

  if (!isLoggedIn) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Profile
          </h1>
          <p className="text-lg text-gray-600">
            Manage your account and learning progress
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Header Background */}
          <div className="h-32 bg-linear-to-r from-blue-600 to-blue-800"></div>

          {/* Profile Content */}
          <div className="px-6 py-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <motion.div
                className="shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.img
                  src={user?.image}
                  alt={user?.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg -mt-20 object-cover"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>

              {/* Profile Info */}
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {user?.name}
                </h2>
                <p className="text-gray-600 mb-4">{user?.email}</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/profile/update"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
                  >
                    ✏️ Update Profile
                  </Link>
                  <motion.button
                    onClick={handleLogout}
                    className="px-6 py-3 border-2 border-red-500 text-red-500 rounded-lg font-semibold hover:bg-red-50 transition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    🚪 Logout
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { label: "Courses Enrolled", value: "5", icon: "📚" },
            { label: "Learning Hours", value: "42", icon: "⏱️" },
            { label: "Certificates", value: "2", icon: "🏆" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Account Settings */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📋 Account Settings
          </h3>

          <div className="space-y-4">
            <motion.div
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div>
                <p className="font-semibold text-gray-900">Email Address</p>
                <p className="text-sm text-gray-600">{user?.email}</p>
              </div>
              <span className="text-2xl">📧</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div>
                <p className="font-semibold text-gray-900">Password</p>
                <p className="text-sm text-gray-600">••••••••</p>
              </div>
              <span className="text-2xl">🔐</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <div>
                <p className="font-semibold text-gray-900">Notifications</p>
                <p className="text-sm text-gray-600">Enabled</p>
              </div>
              <span className="text-2xl">🔔</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Learning Progress */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            📈 Learning Progress
          </h3>

          <div className="space-y-6">
            {[
              { title: "React Advanced Patterns", progress: 75 },
              { title: "Next.js Full Stack", progress: 50 },
              { title: "Web Development Bootcamp", progress: 90 },
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900">{course.title}</p>
                  <p className="text-sm font-bold text-blue-600">
                    {course.progress}%
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="bg-linear-to-r from-blue-500 to-blue-600 h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
