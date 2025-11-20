"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

type Doctor = {
  name: string;
  specialization: string;
  qualification?: string;
  image: string;
  department?: string;
  bio?: string;
};

export default function DoctorModal({
  doctor,
  onClose,
}: {
  doctor: Doctor;
  onClose: () => void;
}) {
  if (!doctor) {
    throw new Error("DoctorModal: doctor is null or undefined");
  }

  if (!onClose) {
    throw new Error("DoctorModal: onClose is null or undefined");
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white w-[90%] md:w-[450px] rounded-2xl p-6 shadow-xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X size={22} />
        </button>

        <img
          src={doctor?.image || ""}
          className="w-32 h-32 mx-auto rounded-full object-cover shadow-md"
          alt={doctor?.name || ""}
        />

        <h3 className="text-center mt-4 text-xl font-semibold text-green-800">
          {doctor?.name || ""}
        </h3>

        <p className="text-center text-gray-600 text-sm">
          {doctor?.qualification || ""}
        </p>

        <span className="block mx-auto mt-3 w-fit px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
          {doctor?.specialization || ""}
        </span>

        {doctor?.bio && (
          <p className="mt-5 text-gray-700 text-sm leading-relaxed">
            {doctor?.bio || ""}
          </p>
        )}
      </motion.div>
    </div>
  );
}
