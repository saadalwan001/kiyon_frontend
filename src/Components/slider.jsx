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
    <div className="relative w-full h-screen overflow-hidden bg-black/100">
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-screen transition-opacity duration-[2000ms] ease-in-out
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20 top-90">
        <h1 className="font-['Playfair_Display'] text-[58px] leading-[75px] font-normal tracking-wide">
          VISIT. VENTURE. VALUE.
        </h1>
        <p className="mt-4 font-['barlow'] text-[20px] leading-[30px] font-normal text-white">
           Kiyon Travels & Tours
        </p>
      </div>
    </div>
  );
};

export default Slider;
