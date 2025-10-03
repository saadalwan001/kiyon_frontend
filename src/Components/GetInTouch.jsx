import React from "react";
import { ArrowRight } from "lucide-react";

function GetInTouchSection() {
  return (
    <a href="/contact" className="block">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-12 py-8 border border-gray-100 rounded-[20px] shadow-lg bg-white mb-[80px] cursor-pointer group transition-transform duration-300 hover:-translate-y-1">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          {/* Left Column */}
          <h2 className="font-['Playfair_Display'] text-[45px] font-semibold w-full sm:w-auto 
                         transition duration-500
                         group-hover:bg-gradient-to-r group-hover:from-[#F52B74] group-hover:to-[#FD8908] 
                         group-hover:bg-clip-text group-hover:text-transparent">
            Get In Touch With Kiyon Travels & Tours
          </h2>

          {/* Right Column */}
          <div className="relative inline-flex items-center gap-2 mt-4 sm:mt-0">
            <span className="font-['barlow'] font-bold text-[20px] flex items-center gap-2
                             transition duration-500
                             group-hover:bg-gradient-to-r group-hover:from-[#F52B74] group-hover:to-[#FD8908] 
                             group-hover:bg-clip-text group-hover:text-transparent">
              Contact Us
              <ArrowRight size={30} className="flex-shrink-0 text-current" />
            </span>
          </div>
        </div>
      </section>
    </a>
  );
}

export default GetInTouchSection;
