"use client";

import Image from "next/image";

export default function FacultySection() {
  const faculty = [
    {
      name: "Dr. Anjali Deshmukh",
      title: "Professor & Head, Kayachikitsa",
      img: "/images/doctor_1.png",
    },
    {
      name: "Dr. Ramesh Patil",
      title: "Associate Professor, Shalya Tantra",
      img: "/images/doctor_2.png",
    },
    {
      name: "Dr. Kavita Sharma",
      title: "Assistant Professor, Panchakarma",
      img: "/images/doctor_3.png",
    },
    {
      name: "Dr. Vivek Rao",
      title: "Medical Officer, Ayurveda Hospital",
      img: "/images/doctor_4.png",
    },
  ];

  return (
    <section className="bg-green-50 py-16 px-6 md:px-16 lg:px-24 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-10">
        Our Faculty
      </h2>
      <p className="text-green-800 max-w-2xl mx-auto mb-12 text-base sm:text-lg">
        Meet our team of experienced Ayurvedic professionals and educators
        dedicated to spreading the wisdom of Ayurveda through modern education
        and compassionate care.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {faculty.map((member, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-green-900">
                {member.name}
              </h3>
              <p className="text-green-700 text-sm mt-1">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
