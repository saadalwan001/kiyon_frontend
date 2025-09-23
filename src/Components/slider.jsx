import React, { useState, useEffect } from "react";

const images = ["/s1.jpg", "/s2.jpg", "/s3.jpg", "/s4.jpg"];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out
            ${index === current ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
          `}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Overlay content */}
      <div className="relative top-[500px] z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
          VISIT. VENTURE. VALUE.
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-medium font-['Times_New_Roman']">
          KIYON TRAVELS & TOURS
        </p>
      </div>
    </div>
  );
};

export default Slider;
