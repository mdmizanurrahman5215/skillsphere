import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex gap-4">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-4 h-4 bg-blue-600 rounded-full"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
