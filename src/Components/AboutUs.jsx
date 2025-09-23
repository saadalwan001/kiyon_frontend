import React from "react";
import Button from "@/Components/ui/button.jsx"

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-x-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start gap-10 w-full">
        
        {/* Left Image */}
        <div className="md:w-5/12 w-full flex-shrink-0 min-w-0">
          <img
            src="/AboutUs.jpg"
            alt="Kiyon Travels"
            className="w-full h-[400px] md:h-[500px] rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-7/12 w-full flex flex-col justify-start min-w-0">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-['Times_New_Roman'] text-left">
              Kiyon Travels & Tours
            </h2>
            <p className="mt-2 text-lg text-gray-600 italic text-left">
              Welcome to Kiyon Travels & Tours – Your Gateway to Sri Lanka
            </p>
          </div>
          <p className="mt-6 text-gray-700 text-justify leading-relaxed mb-[20px]">
            At Kiyon Travels & Tours, we create unforgettable journeys across
            Sri Lanka’s most enchanting destinations. From bustling tourist
            hotspots to hidden gems off the beaten path, every experience is
            thoughtfully designed to immerse you in the island’s natural beauty
            and rich heritage. Our curated trips combine comfort, adventure, and
            cultural discovery, ensuring every moment is memorable. With a deep
            appreciation for local traditions, flavors, and artistry, we bring
            Sri Lanka’s spirit to life in every itinerary. Explore, indulge, and
            let Kiyon Travels & Tours guide you to moments that stay with you
            forever.
            
          </p>
          <div>
            <Button className="" text="READMORE" />
          </div>
          
          
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
