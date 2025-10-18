"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative bg-[var(--ayu-beige)] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT – IMAGE */}
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-40 h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>
          <Image
            src="/images/about_ayurveda.png"
            alt="Ayurveda Illustration"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg relative z-10"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--ayu-green)]">
            About Our Institution
          </h2>
          <p className="text-[var(--ayu-brown)] text-lg leading-relaxed">
            SVKM’s Krutiben Bhupeshbhai Patel Ayurveda College, Hospital &
            Research Center is dedicated to nurturing the ancient wisdom of
            Ayurveda through modern education and compassionate healthcare.
            Our institution blends tradition and innovation, shaping skilled
            professionals who promote holistic wellness.
          </p>
          <Link
            href="/about/overview"
            className="inline-block px-6 py-3 bg-[var(--ayu-green)] text-white font-medium rounded-full shadow-md hover:bg-green-800 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Decorative leaf pattern */}
      {/* <div className="absolute top-0 right-0 opacity-10 w-40 md:w-60 lg:w-80">
        <Image
          src="/images/side_backdrop.png"
          alt="Leaf backdrop"
          width={300}
          height={300}
        />
      </div> */}
    </section>
  );
}
