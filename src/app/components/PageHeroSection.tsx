import React from "react";

interface Props {
  imgUrl: string;
  title: string;
  description?: string;
  altText: string;
}

const PageHeroSection = ({ imgUrl, title, description, altText }: Props) => {
  return (
    <section className="relative h-[40vh] md:h-[30vh] w-full bg-gradient-to-r from-green-200 via-emerald-300 to-teal-400 overflow-hidden">
      {/* Background image */}
      <img
        src={imgUrl}
        alt={altText}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-all duration-700"
      />

      {/* Gradient overlay for premium feel */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div> */}

      {/* Content */}
      <div className="absolute inset-0 flex items-center md:items-center justify-center md:justify-start pb-10 md:pb-0">
        <div className="text-white max-w-3xl mx-auto">
          {/* <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg text-center">
            {title}
          </h1> */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 leading-tight text-center">
            {title}
          </h1>

          {/* {description && (
            <p className="mt-4 text-lg md:text-xl  text-green-800 leading-relaxed drop-shadow text-center">
              {description}
            </p>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default PageHeroSection;
