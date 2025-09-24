import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const data = [
  {
    id: 1,
    image: "/colombo.jpg",
    title: "Capital Charm: Colombo Experience",
  },
  {
    id: 2,
    image: "/nuwara.jpg",
    title: "Misty Escapes: Little England Experience",
  },
  {
    id: 3,
    image: "/kandy.jpg",
    title: "Sacred City: Kandy Experience",
  },
];

const Experience = () => {
  return (
    <section className="relative bg-white py-20 mb-[80px]">
      {/* Headings */}
      <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
        <h2 className="font-['barlow'] text-[28px] leading-[42px] font-medium text-gray-800 mb-2">
          Need To Explore
        </h2>
        <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-center">
          Our Travel Packages
        </h1>

        {/* Line */}
        <span className="inline-block w-[100px] h-1 bg-gray-800 mt-5"></span>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10 h-[550px]">
        {data.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Image */}
            <div
              className="h-[350px] w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            {/* Bottom Section */}
            <div className="p-6 flex flex-col justify-between">
              <h3 className="font-['Playfair_Display'] text-[28px] leading-[42px] font-normal text-gray-900 mb-4">
                {item.title}
              </h3>
              <div className="flex items-center gap-3 font-['barlow'] text-gray-800 font-medium text-[15px]">
                Read More
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <ArrowRight size={16} className="text-white" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-16 text-center px-4 sm:px-6 lg:px-8">
        <Button text="READ MORE" size="text-xl" />
      </div>
    </section>
  );
};

export default Experience;
