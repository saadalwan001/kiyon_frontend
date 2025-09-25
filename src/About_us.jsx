import React from "react";
import Navbar from "@/Components/client_navbar.jsx"
import { Globe2, Clock, Plane, MapPin } from "lucide-react"; 
import GetInTouch from "./Components/GetInTouch.jsx";
import Footer from "./Components/Footer";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Navbar/>
      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 mb-[80px]"
        style={{ backgroundImage: "url('/AboutUs/cover.jpg')" }}
      >
         
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg font-['Playfair_Display']">
          Journey Beyond Borders
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-white max-w-2xl drop-shadow-md  font-['barlow']">
          Unveiling the soul of travel through experiences that last a lifetime.
        </h2>
      </section>

      {/* This is Us Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center mb-[80px]">
        {/* Left Column */}
        <div>
          <h2 className="text-5xl font-bold mb-6 font-['Playfair_Display']">This is Us</h2>
          <p className="mb-4 text-xl text-gray-700 leading-relaxed font-['barlow'] text-justify">
            At <span className="font-semibold">Kiyon Travels & Tours</span>, we
            believe every journey should be more than just a trip. It should be a
            story worth telling.
          </p>
          <p className="mb-4 text-xl text-gray-700 leading-relaxed font-['barlow'] text-justify">
            As a dedicated inbound travel company in Sri Lanka, we specialize in
            curating personalized experiences that showcase the island’s
            breathtaking landscapes, rich heritage, and warm hospitality.
          </p>
          <p className=" text-xl text-gray-700 leading-relaxed font-['barlow'] text-justify">
            From tranquil beaches to misty mountains and vibrant cultural sites,
            our tours are designed to immerse you in the heart of Sri Lanka.
            With meticulous planning and genuine care, we ensure your travel
            with us is seamless, memorable, and filled with authentic moments.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex justify-center">
          <img
            src="/AboutUs/ThisIsUs.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full h-full object-cover"
          />
        </div>
      </section>

      {/*Mission Vision*/}
      <section className=" mb-[80px]">
        <div className='py-16 px-4 font-bold sm:px-10 md:px-12 lg:px-14 text-center '>
        <h2 className=" text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-['Playfair_Display']">
            Our Vision
        </h2>
        
        <p className="max-w-4xl mx-auto text-xl text-gray-500 mb-25 mt-12 font-['barlow'] ">
       To set the standard as the most trusted platform for exploring Sri Lanka, offering travelers seamless experiences that blend adventure, heritage, and hospitality with excellence.
      </p> <h2 className="text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-['Playfair_Display'] ">
            Our Mission
        </h2>
        
        <p className="max-w-4xl mx-auto text-xl text-gray-500 mb-12 mt-12 font-['barlow']">
        To craft tailored travel experiences that capture the soul of Sri Lanka, its breathtaking landscapes, vibrant culture, and warm hospitality, ensuring every journey is as meaningful as it is memorable
      </p>
    </div>
      </section>

{/* what we Expertise In */}

  <section className=" bg-gray-50 py-24 relative mb-[80px]">
  <div className="relative max-w-6xl mx-auto h-auto lg:h-96">
    {/* Large screen semicircle layout */}
    <div className="hidden lg:block relative h-full">
      {/* Top row: 1, Heading, 6 */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-between w-full px-12">
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Beach.jpg" alt="Beaches" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Beach</span>
        </div>

        <h2 className="relative inline-block top-[-70px] text-5xl font-bold text-center font-['Playfair_Display']">
          We Are Expertise In
        </h2>

        <div className="flex flex-col items-center">
          <img src="/AboutUs/Heritage.jpg" alt="Heritage" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Heritage</span>
        </div>
      </div>

      {/* Middle row: 2 & 5 */}
      <div className="absolute top-[100px] left-[680px] transform -translate-x-1/2 flex justify-between w-4/5">
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Wildlife.jpg" alt="Wildlife" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Wild Life</span>
        </div>

        <div className="flex flex-col items-center relative left-[-208px]">
          <img src="/AboutUs/Mountain.jpg" alt="Mountains" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Mountains</span>
        </div>
      </div>

      {/* Bottom row: 3 & 4 */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-12">
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Culture.jpg" alt="Culture" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Culture</span>
        </div>

        <div className="flex flex-col items-center">
          <img src="/AboutUs/Adventure.jpg" alt="Adventure" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Adventure</span>
        </div>
      </div>
    </div>

    {/* Small & medium screens stacked layout */}
    <div className="flex flex-col items-center gap-8 lg:hidden">
      <h2 className="text-5xl font-bold text-center font-['Playfair_Display'] mb-8">
        We Are Expertise In
      </h2>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Beach.jpg" alt="Beaches" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Beach</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Wildlife.jpg" alt="Wildlife" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Wild Life</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Culture.jpg" alt="Culture" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Culture</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Adventure.jpg" alt="Adventure" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Adventure</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Mountain.jpg" alt="Mountains" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Mountains</span>
        </div>
        <div className="flex flex-col items-center">
          <img src="/AboutUs/Heritage.jpg" alt="Heritage" className="rounded-2xl w-40 h-40 object-cover shadow-lg" />
          <span className="mt-2 text-lg font-semibold font-['barlow']">Heritage</span>
        </div>
      </div>
    </div>
  </div>
</section>


{/* what we offer  section */}

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-[80px]">
      <div
        className="rounded-2xl bg-cover bg-center p-10"
        style={{ backgroundImage: "url('/AboutUs/Expertise_cover.jpg')" }} 
      >
        <div className="grid lg:grid-cols-2 gap-10 items-center">



          {/* Left column */}
          <div>
            <h2 className="text-4xl font-bold text-white md:text-5xl text-center font-['Playfair_Display']">
              What We Offer
            </h2>
          </div>

          {/* Right column */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10">
            <div className="grid grid-cols-2 ">

            
              {/* Cell 1 */}
              <div className="flex flex-col items-center text-center p-6 border-b border-r border-[#238B45]">
                <Globe2 className="w-10 h-10 text-[#238B45] mb-4" />
                <h3 className="font-semibold text-lg mb-2 font-['Playfair_Display']">
                  Tailor-Made Travel Plans
                </h3>
                <p className="text-gray-600 text-sm font-['barlow']">
                  Customized itineraries built to match your travel style, goals, and unforgettable experiences.
                </p>
              </div>

              {/* Cell 2 */}
              <div className="flex flex-col items-center text-center p-6 border-b border-[#238B45] ">
                <Clock className="w-10 h-10 text-[#238B45] mb-4" />
                <h3 className="font-semibold text-lg mb-2 font-['Playfair_Display']">
                  Round-the-Clock Support
                </h3>
                <p className="text-gray-600 text-sm font-['barlow']">
                  24/7 assistance dedicated to ensuring your comfort, safety, and peace of mind while traveling.
                </p>
              </div>

              {/* Cell 3 */}
              <div className="flex flex-col items-center text-center p-6 border-r border-[#238B45]">
                <Plane className="w-10 h-10 text-[#238B45] mb-4" />
                <h3 className="font-semibold text-lg mb-2 font-['Playfair_Display']">
                  Flexible Travel Options
                </h3>
                <p className="text-gray-600 text-sm font-['barlow']">
                  Flexible travel plans designed to adjust seamlessly as your journey evolves.
                </p>
              </div>

              {/* Cell 4 */}
              <div className="flex flex-col items-center text-center p-6">
                <MapPin className="w-10 h-10 text-[#238B45] mb-4" />
                <h3 className="font-semibold text-lg mb-2 font-['Playfair_Display']">Local Expertise Guide</h3>
                <p className="text-gray-600 text-sm font-['barlow']">
                  Local expertise that unlocks genuine experiences at Sri Lanka’s most iconic destinations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Get intouch part*/}
    <GetInTouch/>


    {/* Footer */}
    <Footer/>

    





    </div>
  );
};

export default AboutUs;
