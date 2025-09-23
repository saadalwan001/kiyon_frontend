import React from "react";
import Button from "@/Components/ui/button"; 

const WhyChooseUs = () => {
  return (
    <section
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/why.jpg')" }}
    >
      {/* Overlay for slight dark effect */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* White content box on right */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-8 md:mr-16 bg-white rounded-3xl p-8 md:p-16 shadow-lg max-w-md w-11/12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Times_New_Roman'] text-center">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-gray-700 text-justify leading-relaxed text-sm md:text-base">
          At Kiyon Travels, we turn every journey into a memorable experience. 
          With carefully curated tours, personalized itineraries, and insider knowledge of Sri Lanka’s 
          hidden gems, we ensure comfort, adventure, and authentic local experiences. 
          From seamless planning to attentive service, we make every trip unforgettable.
        </p>

        {/* Button */}
        <div className="mt-6 text-center">
          <Button text="READ MORE" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
