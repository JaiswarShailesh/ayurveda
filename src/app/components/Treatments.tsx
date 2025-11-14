"use client";

import Image from "next/image";

const treatments = [
  {
    title: "Panchakarma Therapy",
    desc: "A complete detoxification and rejuvenation program that restores balance and vitality.",
    img: "/images/treatments/panchakarma.png",
  },
  {
    title: "Abhyanga (Oil Massage)",
    desc: "A full-body herbal oil massage that nourishes tissues and improves circulation.",
    img: "/images/treatments/abhyanga.png",
  },
  {
    title: "Shirodhara",
    desc: "A soothing therapy where warm oil is poured on the forehead to calm the mind.",
    img: "/images/treatments/shirodhara.png",
  },
  {
    title: "Nasyam",
    desc: "Cleanses and rejuvenates the nasal passages to promote clear breathing and mental clarity.",
    img: "/images/treatments/nasyam.png",
  },
  {
    title: "Swedana (Herbal Steam)",
    desc: "An herbal steam therapy that relieves stiffness, detoxifies, and promotes relaxation.",
    img: "/images/treatments/swedana.png",
  },
  {
    title: "Marma Therapy",
    desc: "A traditional technique that stimulates vital energy points for healing and balance.",
    img: "/images/treatments/marma_therapy.png",
  },
];

export default function Treatments() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Our Ayurvedic Treatments
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Experience authentic Ayurveda therapies designed to heal, rejuvenate,
          and balance your body, mind, and spirit.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((item, i) => (
            <div
              key={i}
              className="bg-[#f4f7f3] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
