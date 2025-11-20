"use client";

import { motion } from "framer-motion";

interface Props {
  name: string;
  specialization: string;
  qualification?: string;
  image: string;
  onClick?: () => void;
}

export default function DoctorCard({
  name,
  specialization,
  qualification,
  image,
  onClick,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="cursor-pointer group bg-white rounded-2xl shadow-md p-6 text-center border 
                 border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-700 to-green-400 rounded-t-2xl"></div>

      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mx-auto shadow-md 
                   group-hover:scale-105 transition duration-300"
      />

      <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-green-800 transition">
        {name}
      </h3>

      {qualification && (
        <p className="text-gray-500 text-xs mt-1">{qualification}</p>
      )}

      <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
        {specialization}
      </span>
    </motion.div>
  );
}
