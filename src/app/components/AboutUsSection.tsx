"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative bg-white py-16 px-6 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* LEFT – IMAGE */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="absolute -top-6 -left-6 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-green-200 rounded-full blur-3xl opacity-40"></div>
          <Image
            src="/images/ayurveda_aboutus_medium_banner.png"
            alt="Ayurveda Illustration"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg relative z-10 w-full h-auto max-w-md md:max-w-none"
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-800">
            About Our Institution
          </h2>
          <p className="text-green-700 text-xs md:text-sm xl:text-base leading-relaxed">
            SVKM’s Krutiben Bhupeshbhai Patel Ayurveda College, Hospital &
            Research Center is dedicated to nurturing the ancient wisdom of
            Ayurveda through modern education and compassionate healthcare. Our
            institution blends tradition and innovation, shaping skilled
            professionals who promote holistic wellness.
          </p>
          <Link
            href="/about/overview"
            className="inline-block px-6 py-3 bg-green-700 text-white font-medium rounded-full shadow-md hover:bg-green-800 transition-all duration-300 text-xs sm:text-sm xl:text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Optional Decorative Leaf */}
      {/* <div className="absolute top-0 right-0 opacity-10 w-32 sm:w-40 md:w-60 lg:w-80">
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
