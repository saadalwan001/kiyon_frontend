import React from "react";
import { ArrowRight } from "lucide-react";

function GetInTouchSection() {
  return (
    <a href="/contact" className="block">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12 py-8 border border-gray-100 rounded-[20px] shadow-lg bg-white mb-[80px] cursor-pointer group transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left Column */}
          <h2 className="font-['Playfair_Display'] text-[45px] font-semibold text-gray-800">
            Get In Touch With Kiyon Travels & Tours
          </h2>

          {/* Right Column */}
          <div className="relative inline-block font-barlow font-medium text-[#238B45]">
            <span className="font-['barlow'] font-bold text-[20px] relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-black">
              Contact Us <ArrowRight size={30} />
            </span>
          </div>
        </div>
      </section>
    </a>
  );
}

export default GetInTouchSection;
