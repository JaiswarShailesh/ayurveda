// // components/Hero.tsx
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full">
//       <Image
//         src="/images/ayurveda_hero_banner1.png"
//         alt="Ayurveda College"
//         fill
//         className="object-cover brightness-75"
//       />
//       <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
//         <h1 className="text-4xl md:text-6xl font-serif text-beige font-bold mb-4">
//           SVKM’s Krutiben Bhupeshbhai Patel
//         </h1>
//         <p className="text-lg md:text-2xl text-beige">
//           Ayurveda College, Hospital & Research Center
//         </p>
//         <button className="mt-8 bg-green-900 text-beige px-6 py-3 rounded-full hover:bg-teal-700 transition">
//           Explore More
//         </button>
//       </div>
//       <div className="bg-ayurvedaBeige rounded-2xl shadow-ayurvedaCard overflow-hidden hover:scale-105 transition-transform duration-300">
//         <img
//           src="/images/ayurveda_researchCenter_hero_banner.png"
//           alt="Ayurveda College"
//           className="w-full h-64 object-cover"
//         />
//         <div className="p-6">
//           <h3 className="text-2xl font-serifHeading text-ayurvedaGreen font-bold">
//             Ayurveda College
//           </h3>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section
//       className="relative w-full h-[90vh] flex items-center justify-center bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/ayurveda_hero_banner1.png')" }}
//     >
//       {/* Overlay */}
//       <div
//         className="absolute inset-0"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-6 max-w-4xl text-white animate-fadeIn">
//         <h1 className="text-4xl md:text-6xl font-[Cormorant_Garamond] font-bold mb-4">
//           SVKM Ayurveda College, Hospital & Research Center
//         </h1>
//         <p className="text-lg md:text-2xl mb-8 leading-relaxed text-[var(--ayu-beige)]">
//           Healing through tradition, knowledge, and care — empowering health naturally.
//         </p>

//         <div className="flex flex-col md:flex-row gap-4 justify-center">
//           <Link href="#about">
//             <button className="px-6 py-3 rounded-lg bg-[var(--ayu-green)] text-[var(--ayu-beige)] font-semibold hover:bg-[var(--ayu-gold)] transition">
//               Learn More
//             </button>
//           </Link>
//           <Link href="#contact">
//             <button className="px-6 py-3 rounded-lg border border-[var(--ayu-beige)] text-[var(--ayu-beige)] hover:bg-[var(--ayu-beige)] hover:text-[var(--ayu-green)] transition">
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function HeroSection() {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation((prev) => (prev + 0.3) % 360); // smooth rotation
//     }, 30); // speed
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-green-300 to-teal-400">
//       {/* Background yogi image */}
//       <Image
//         src="/images/yogi.png"
//         alt="Yogi"
//         width={1250}
//         height={1250}
//         className="z-10 object-contain"
//       />

//       {/* <img src="/images/yogi.png" alt="" /> */}

//       {/* Rotating Tatwa image */}
//       <div
//         className="absolute overflow-hidden"
//         style={{
//           transform: `rotate(${rotation}deg)`,
//           transition: "transform 0.1s linear",
//         }}
//       >
//         <Image
//           src="/images/chackras.png"
//           alt="Tatwa Circle"
//           width={1150}
//           height={1150}
//           className="relative"
//         />

//         {/* <img src="/images/chackras.png" alt="" /> */}
//       </div>

//       {/* Optional: subtle glow */}
//       <div className="absolute w-[600px] h-[600px] rounded-full bg-green-200 blur-3xl opacity-20"></div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function HeroSection() {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const animate = () => {
//       setRotation((prev) => prev + 0.05); // continuous smooth rotation
//       requestAnimationFrame(animate);
//     };
//     requestAnimationFrame(animate);
//   }, []);

//   return (
//     <section className="relative min-h-[60vh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-16 lg:px-24 py-10 md:py-0 bg-gradient-to-r from-green-200 via-emerald-300 to-teal-400 overflow-hidden">
//       {/* LEFT CONTENT */}
//       <div className="relative z-20 text-center md:text-left max-w-xl flex flex-col items-center md:items-start space-y-5 md:space-y-6 mt-10 md:mt-0">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
//           Balance. Heal. Rejuvenate.
//         </h1>
//         <p className="text-base sm:text-lg text-green-800 max-w-md">
//           Discover the harmony of body, mind, and spirit through the wisdom of
//           Ayurveda.
//         </p>
//         <button className="px-6 py-3 sm:px-8 sm:py-3 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-800 transition-all duration-300">
//           Explore Our Treatments
//         </button>
//       </div>

//       {/* RIGHT SIDE – YOGI + CHAKRAS */}
//       <div className="relative flex items-center justify-center w-full md:w-1/2 scale-90 sm:scale-100">
//         {/* Subtle glow */}
//         <div className="absolute w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-full bg-green-200 blur-3xl opacity-25"></div>
//         {/* Rotating chakras */}
//         <div
//           className="absolute"
//           style={{
//             transform: `rotate(${rotation}deg)`,
//           }}
//         >
//           <Image
//             src="/images/hero_banner_tatwa.png"
//             alt="Chakra Circle"
//             width={700}
//             height={700}
//             className="opacity-90"
//             priority
//           />
//         </div>

//         {/* Static yogi */}
//         <Image
//           src="/images/yogi.png"
//           alt="Yogi"
//           width={500}
//           height={500}
//           className="relative z-10 object-contain"
//           priority
//         />
//       </div>
//     </section>
//   );
// }


// BELOW IS THE PERFECT BY SO FAR 17102025 04:33PM

// "use client";

// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function HeroSection() {
//   const [rotation, setRotation] = useState(0);

//   useEffect(() => {
//     const animate = () => {
//       setRotation((prev) => prev + 0.05);
//       requestAnimationFrame(animate);
//     };
//     requestAnimationFrame(animate);
//   }, []);

//   return (
//     <section className="relative min-h-[50vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-16 py-10 bg-gradient-to-r from-green-200 via-emerald-300 to-teal-400 overflow-hidden">
//       {/* LEFT CONTENT */}
//       <div className="relative z-20 text-center lg:text-left max-w-lg flex flex-col items-center lg:items-start space-y-5">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
//           Balance. Heal. Rejuvenate.
//         </h1>
//         <p className="text-base sm:text-lg text-green-800 max-w-md">
//           Discover the harmony of body, mind, and spirit through the wisdom of
//           Ayurveda.
//         </p>
//         <button className="px-6 py-3 sm:px-8 sm:py-3 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-800 transition-all duration-300">
//           Explore Our Treatments
//         </button>
//       </div>

//       {/* RIGHT SIDE – YOGI + CHAKRAS */}
//       <div className="relative flex items-center justify-center w-full lg:w-[45%]">
//         {/* Subtle glow */}
//         <div className="absolute w-[70vw] sm:w-[60vw] lg:w-[480px] h-[70vw] sm:h-[60vw] lg:h-[480px] rounded-full bg-green-200 blur-3xl opacity-25"></div>

//         {/* Rotating chakras */}
//         <div
//           className="absolute"
//           style={{
//             transform: `rotate(${rotation}deg)`,
//           }}
//         >
//           <Image
//             src="/images/chackras.png"
//             alt="Chakra Circle"
//             width={600}
//             height={600}
//             className="max-w-[70vw] sm:max-w-[500px] lg:max-w-[550px] h-auto opacity-90"
//             priority
//           />
//         </div>

//         {/* Static yogi */}
//         <Image
//           src="/images/yogi.png"
//           alt="Yogi"
//           width={400}
//           height={400}
//           className="relative z-10 max-w-[60vw] sm:max-w-[400px] lg:max-w-[420px] h-auto object-contain"
//           priority
//         />
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const animate = () => {
      setRotation((prev) => prev + 0.05);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-16 py-10 bg-gradient-to-r from-green-200 via-emerald-300 to-teal-400 overflow-hidden">
      {/* === SIDE BACKDROPS === */}
      {/* Left side backdrop */}
      <Image
        src="/images/side_backdrop.png"
        alt="Ayurveda decorative background left"
        width={500}
        height={500}
        className="absolute left-0 top-0 opacity-40 md:opacity-50 rotate-180 pointer-events-none select-none"
        priority
      />

      {/* Right side backdrop */}
      <Image
        src="/images/side_backdrop.png"
        alt="Ayurveda decorative background right"
        width={500}
        height={500}
        className="absolute right-0 bottom-0 opacity-40 md:opacity-50 pointer-events-none select-none"
        priority
      />

      {/* LEFT CONTENT */}
      <div className="relative z-20 text-center lg:text-left max-w-lg flex flex-col items-center lg:items-start space-y-5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight">
          Balance. Heal. Rejuvenate.
        </h1>
        <p className="text-base sm:text-lg text-green-800 max-w-md">
          Discover the harmony of body, mind, and spirit through the wisdom of
          Ayurveda.
        </p>
        <button className="px-6 py-3 sm:px-8 sm:py-3 bg-green-700 text-white font-semibold rounded-full shadow-md hover:bg-green-800 transition-all duration-300">
          Explore Our Treatments
        </button>
      </div>

      {/* RIGHT SIDE – YOGI + CHAKRAS */}
      <div className="relative flex items-center justify-center w-full lg:w-[45%]">
        {/* Subtle glow */}
        <div className="absolute w-[70vw] sm:w-[60vw] lg:w-[480px] h-[70vw] sm:h-[60vw] lg:h-[480px] rounded-full bg-green-200 blur-3xl opacity-25"></div>

        {/* Rotating chakras */}
        <div
          className="absolute"
          style={{
            transform: `rotate(${rotation}deg)`,
          }}
        >
          <Image
            src="/images/chackras.png"
            alt="Chakra Circle"
            width={600}
            height={600}
            className="max-w-[70vw] sm:max-w-[500px] lg:max-w-[550px] h-auto opacity-90"
            priority
          />
        </div>

        {/* Static yogi */}
        <Image
          src="/images/yogi.png"
          alt="Yogi"
          width={400}
          height={400}
          className="relative z-10 max-w-[60vw] sm:max-w-[400px] lg:max-w-[420px] h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
