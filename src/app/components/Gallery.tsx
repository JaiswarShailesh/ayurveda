"use client";

import Image from "next/image";

const galleryImages = [
  "/images/gallery/1.png",
  "/images/gallery/2.png",
  "/images/gallery/3.png",
  "/images/gallery/4.png",
  "/images/gallery/5.png",
  "/images/gallery/6.png",
];

export default function Gallery() {
  return (
    <section className="bg-green-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800 mb-10">
          Glimpse of Our Healing Spaces
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
