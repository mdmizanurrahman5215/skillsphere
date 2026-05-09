"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Loader from "@/component/Loader";
import { showSuccess, showError } from "@/utils/toast";
import { authClient, useSession } from "../../../lib/auth-client";

export default function UpdateProfilePage() {
  const { data, isPending } = useSession();
  const user = data?.user || null;
  const isLoggedIn = !!user;

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    image: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      await authClient.updateUser({
        image: formData?.image,
        name: formData?.name,
      });

      showSuccess("Profile updated successfully!");
      router.push("/profile");

      console.log(formData);
    } catch (error) {
      console.log(error);
      showError("Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Update Profile
          </h1>
          <p className="text-lg text-gray-600">
            Modify your profile information
          </p>
        </motion.div>

        {/* Update Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition text-lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                This is your public display name
              </p>
            </motion.div>

            {/* Image URL Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Profile Image URL
              </label>
              <input
                // type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition text-lg"
              />
              <p className="text-sm text-gray-500 mt-2">
                Enter a valid image URL. Must start with http:// or https://
              </p>
            </motion.div>

            {/* Image Preview */}
            {/* {previewImage && (
              <motion.div
                className="flex flex-col items-center gap-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-sm font-semibold text-gray-700">
                  Preview Image:
                </p>
                <motion.img
                  src={previewImage}
                  alt="Preview"
                  className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-100"
                  onError={() => setPreviewImage("")}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            )} */}

            {/* Error Message for Invalid Image */}
            {previewImage === "" && formData.image && (
              <motion.div
                className="p-4 bg-red-50 border-2 border-red-200 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-red-600 text-sm">
                  ⚠️ Unable to load image. Please check the URL.
                </p>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-bold hover:from-blue-700 hover:to-blue-900 transition disabled:opacity-50"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {isSubmitting ? "Updating..." : "✓ Update Information"}
              </motion.button>

              <Link
                href="/profile"
                className="flex-1 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:bg-gray-50 transition text-center"
              >
                ✕ Cancel
              </Link>
            </div>
          </form>

          {/* Info Box */}
          <motion.div
            className="mt-8 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-blue-900 text-sm">
              <span className="font-semibold">💡 Tip:</span> You can use a URL
              from services like Unsplash, Pexels, or upload your image to an
              image hosting service and paste the URL here.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
