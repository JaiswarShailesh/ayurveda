"use client";

import { useState } from "react";
import DoctorCard from "./DoctorCard";
import DoctorModal from "./DoctorModal";

interface Doctor {
  name: string;
  specialization: string;
  qualification?: string;
  image: string;
  department?: string;
  bio?: string;
}

interface Props {
  doctors: Doctor[];
}

export default function DoctorsSection({ doctors }: Props) {
  const [filter, setFilter] = useState("All");
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const specializations = ["All", ...new Set(doctors.map(d => d.specialization))];

  const filteredList =
    filter === "All" ? doctors : doctors.filter(d => d.specialization === filter);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* FILTER */}
        <div className="flex justify-center">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm
                       focus:ring-2 focus:ring-green-500 outline-none"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {specializations.map((spec, i) => (
              <option key={i} value={spec}>
                {spec}
              </option>
            ))}
          </select>
        </div>

        {/* GRID */}
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {filteredList.map((doc, i) => (
            <DoctorCard key={i} {...doc} onClick={() => setSelectedDoctor(doc)} />
          ))}
        </div>

        {/* MODAL */}
        {selectedDoctor && (
          <DoctorModal doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />
        )}
      </div>
    </section>
  );
}
