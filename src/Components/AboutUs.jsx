import React from "react";
import Button from "@/Components/ui/button.jsx";

const AboutUs = () => {
  return (
    <section className="py-16  overflow-x-hidden relative my-[80px] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-20 w-full ">

        {/* Left Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-start relative">
          <img
            src="/AboutUs.jpg"
            alt="Kiyon Travels"
            className="w-[500px] h-[700px]  shadow-lg object-cover "
          />
        </div>

        {/* Right Content */}
<div className="w-full md:w-7/12 flex flex-col justify-center items-start text-left md:text-left">
  <div>
   <h2 className="font-['playfair'] text-[55px] leading-[60px] font-normal text-center gradient-text-animated">
  Kiyon Travels & Tours
</h2>


    <p className="font-barlow text-[15px] leading-[26px] font-bold  max-w-[500px] mt-[30px] secondary-text-gradient">
  Welcome to Kiyon Travels & Tours – Your Gateway to Sri Lanka
</p>

  </div>
  <p className="mt-6 font-['barlow'] text-[15px] leading-[26px] font-semibold  text-justify max-w-[500px] mb-[30px] para">
            At Kiyon Travels & Tours, we create unforgettable journeys across
            Sri Lanka’s most enchanting destinations. From bustling tourist
            hotspots to hidden gems off the beaten path, every experience is
            thoughtfully designed to immerse you in the island’s natural beauty
            and rich heritage. Our curated trips combine comfort, adventure, and
            cultural discovery, ensuring every moment is memorable. With a deep
            appreciation for local traditions, flavors, and artistry, we bring
            Sri Lanka’s spirit to life in every itinerary. Explore, indulge, and
            let Kiyon Travels & Tours guide you to moments that stay with you
  </p>
  <div className="w-full text-center md:text-left">
    <Button text="READ MORE"  link="/AboutUs" size="text-lg" />
  </div>
</div>

         

      </div>
    </section>
  );
};

export default AboutUs;
