import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const data = [
  {
    id: 1,
    image: "/food.jpg",
    title: "Foods",
    description:
      "Discover the flavors of paradise. Vibrant local meals that make every bite unforgettable.",
  },
  {
    id: 2,
    image: "/culture.jpg",
    title: "Culture",
    description: "Explore heritage sites, traditions, and vibrant festivals.",
  },
  {
    id: 3,
    image: "/nature.jpg",
    title: "Nature",
    description: "Experience lush landscapes, wildlife, and scenic beauty.",
  },
];

const Attraction = () => {
  return (
    <section className="relative  mb-[80px]">
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center  h-[750px] flex flex-col items-center justify-center text-black"
        style={{ backgroundImage: `url('/Attraction_bg.jpg')` }}
      >
        <h2 className="text-2xl md:text-3xl font-['barlow'] font-medium mb-2 mt-[-400px] text-gray-500">
          Gallery
        </h2>
        <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-center px-4">
          A Visual Journey Through Sri Lanka
        </h1>
        {/*line*/}
          <span className=" inline-block text-center  w-[100px] h-1 bg-white mt-5"></span>
      </div>

      {/* Cards Section */}
      <div className="relative -mt-90 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item) => (
          <a
            key={item.id}
            href="#"
            className="group relative h-[420px] w-full rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900/20 transition-opacity duration-500 group-hover:bg-opacity-50"></div>

            {/* Title */}
            <h3 className="absolute top-6 left-6 font-['Playfair_Display'] text-[28px] leading-[42px] text-white z-10">
              {item.title}
            </h3>

            {/* Hover Content */}
            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="font-['barlow'] text-[16px] leading-[24px] mb-3">
                {item.description}
              </p>
              
            </div>
          </a>
        ))}
      </div>
      {/* Button */}
        <div className="mt-15 text-center ">
          <Button text="READ MORE" size="text-xl" />
        </div>
    </section>
  );
};

export default Attraction;
