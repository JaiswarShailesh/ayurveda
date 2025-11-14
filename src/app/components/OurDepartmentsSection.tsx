"use client";

import Image from "next/image";

export default function Departments() {
  const departments = [
    {
      title: "Kayachikitsa",
      desc: "The department focuses on Ayurvedic internal medicine, emphasizing holistic diagnosis and treatment for chronic ailments.",
      img: "/images/kayachikitsa_thumbnail.png",
    },
    {
      title: "Shalya Tantra",
      desc: "Dedicated to Ayurvedic surgical science, combining ancient techniques with modern care practices.",
      img: "/images/shalakya_Tantra_thumbnail.png",
    },
    {
      title: "Panchakarma",
      desc: "Specializing in detoxification and rejuvenation therapies that restore body-mind balance through traditional Panchakarma methods.",
      img: "/images/panchakarma_thumbnail.png",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16 lg:px-24 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-10">
        Our Departments
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, i) => (
          <div
            key={i}
            className="group bg-[#f4f7f3] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-green-100"
          >
            <div className="relative w-full h-56 md:h-64 overflow-hidden">
              <Image
                src={dept.img}
                alt={dept.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            <div className="p-6 flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {dept.title}
              </h3>
              <p className="text-green-700 text-sm">{dept.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
