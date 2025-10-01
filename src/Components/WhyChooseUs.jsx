import React from "react";
import Button from "@/Components/ui/button.jsx";

const WhyChooseUs = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center mb-[80px] min-h-[1000px]"
      style={{ backgroundImage: "url('/why.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Container */}
      <div className="relative flex h-full px-8 md:px-16 lg:px-24
                      justify-center md:justify-end 
                      items-center">
        {/* White Box */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg w-full max-w-[550px] h-[700px] 
                        flex flex-col justify-center text-center
                        mx-auto md:mx-0 mt-[150px]">
          <h2 className="text-2xl md:text-3xl font-normal text-gray-900 font-['Times_New_Roman']">
            Why Choose Us?
          </h2>

          <h3 className="text-lg md:text-4xl font-semibold text-[#238B45] font-['Times_New_Roman'] mt-5 mb-5">
            Turning Journeys Into Unforgettable Memories
            <br />
            <span className="inline-block w-[100px] h-1 bg-[#515151] mt-2 mx-auto md:mx-0"></span>
          </h3>

          <p className="mx-auto md:mx-0 mt-4 text-gray-700 text-sm md:text-base px-4 md:px-0">
            Sri Lanka is a mesmerizing island where golden shores meet misty highlands and ancient wonders. 
            It’s a destination that beautifully intertwines culture, nature, and history, offering unforgettable experiences for every traveler.
          </p>

          {/* Button */}
          <div className="mt-6 text-center md:text-left mx-auto">
            <Button text="READ MORE" link="/AboutUs" size="text-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
