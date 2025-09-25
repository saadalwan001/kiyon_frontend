import React from "react";
import Navigation from "@/Components/client_navbar";
import Destination from "@/Components/Destination_img/Destination_img_for_page.jsx";
import Footer from "./Components/Footer";

const TravelHero = () => {
  return (
    
    <>
    <section className="relative w-full h-screen">
        <Navigation/>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/Destination/Des_cover.jpg')" }}
      ></div>

      

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-['Playfair_Display']">
          Go Wherever You Like
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl max-w-2xl font-['barlow']">
          Discover your next adventure and create memories that last a lifetime. 
          Pick your destination and let the journey begin.
        </p>
      </div>
    </section>

    {/* Short Content */}
    <section className="py-20 bg-gray-50 pt-[80px] mb-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl max-w-7xl sm:text-5xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
          Explore Sri Lanka
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#238B45] mb-8">
          Where Every Journey Becomes a Story
        </p>

        {/* Content */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-['barlow']">
          Imagine an island where every sunrise paints a new adventure, where lush forests, golden beaches, and ancient ruins coexist in harmony. Sri Lanka is a mosaic of experiences ride through misty tea plantations, explore hidden waterfalls, encounter wildlife in its natural sanctuaries, and immerse yourself in vibrant local culture.
          <br /><br />
          Small enough to explore freely, yet rich enough to leave you in awe at every turn, the island invites travelers to craft their own story. Timing your journey with the seasons enhances the magic: the west and south shine <b>November to April</b>, while the east and northeast beckon <b>May to October </b>.
          <br /><br />
          So, where will your story begin?
        </p>
      </div>
    </section>

    {/* destination images */}
    <Destination/>

{/* Footer */}
<Footer/>


    </>
  );
};

export default TravelHero;
