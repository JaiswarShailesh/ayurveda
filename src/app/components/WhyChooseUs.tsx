"use client";

import { Leaf, Heart, GraduationCap, Stethoscope } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <GraduationCap className="w-8 h-8 text-green-700" />,
      title: "Experienced Faculty",
      desc: "Learn from skilled Ayurvedic practitioners with years of academic and clinical expertise.",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-green-700" />,
      title: "Holistic Learning",
      desc: "Our curriculum blends traditional Ayurvedic knowledge with modern scientific understanding.",
    },
    {
      icon: <Heart className="w-8 h-8 text-green-700" />,
      title: "Patient-Centered Care",
      desc: "Students gain hands-on experience in real clinical settings with compassionate supervision.",
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-700" />,
      title: "Serene Campus",
      desc: "A calm, eco-friendly environment that nurtures learning, wellness, and mindfulness.",
    },
  ];

  return (
    <section className="bg-green-50 py-20 text-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-10">
          Why Choose Us
        </h2>
        <div className="grid gap-5 xl:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-green-100 flex flex-col items-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-green-800 mb-2">
                {item.title}
              </h3>
              <p className="text-green-700 text-xs md:text-sm xl:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
