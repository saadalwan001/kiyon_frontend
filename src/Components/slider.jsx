import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/home_img.jpg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0  bg-opacity-50"></div>

      {/* Content */}

      <div className="relative top-[250px] z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          STAY. INDULGE. EXPLORE
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium">
          KIYON TRAVELS & TOURS
        </p>
      </div>
    </section>
  );
};

export default Hero;
