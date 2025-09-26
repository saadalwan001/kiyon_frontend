import React, {useState} from 'react'
import { ArrowRight, ArrowDown } from "lucide-react";
import Navigation from './Components/client_navbar';
import Footer from './Components/Footer';


const galleryData = [
  {
    id: 1,
    image: "/Gallery/food.jpg",
    title: "Foods",
    description:
      "Discover the flavors of paradise. Vibrant local meals that make every bite unforgettable.",
  },
  {
    id: 2,
    image: "/Gallery/culture.jpg",
    title: "Culture",
    description: "Explore heritage sites, traditions, and vibrant festivals.",
  },
  {
    id: 3,
    image: "/Gallery/nature.jpg",
    title: "Nature",
    description: "Experience lush landscapes, wildlife, and scenic beauty.",
  },
  {
    id: 4,
    image: "/Gallery/Adventure.jpg",
    title: "Adventure",
    description: "Thrilling activities and outdoor experiences across Sri Lanka.",
  },
  {
    id: 5,
    image: "/Gallery/Beach.jpg",
    title: "Beaches",
    description: "Relax on golden sands and soak up the tropical sun.",
  },
  {
    id: 6,
    image: "/Gallery/heritage.jpg",
    title: "Heritage",
    description: "Step into history through ancient sites and monuments.",
  },
];



export default function Gallery() {

    const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    setVisibleCount(visibleCount === 3 ? galleryData.length : 3);
  };

  const allVisible = visibleCount >= galleryData.length;



  return (
    <>
    <Navigation/>
    <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 mb-[80px] "
        style={{ backgroundImage: "url('/Gallery/Gallery_Cover.jpg')" }}
      >
         
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg font-['Playfair_Display']">
          Discover Sri Lanka
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-white max-w-2xl drop-shadow-md  font-['barlow']">
         From Embark on a visual journey through Sri Lanka’s landscapes, culture, and unforgettable experiences.
        </h2>
      </section>

      {/* Content*/}
    <section className="py-20 bg-gray-50 pt-[80px] mb-[80px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl max-w-7xl sm:text-5xl font-bold text-gray-900 mb-4 font-['Playfair_Display']">
          Gallery of Wonders <br/><br/>
        </h2>

        {/* Content */}
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-['barlow']">
          Step into the heart of Sri Lanka through our curated gallery, where every image tells a story. From golden beaches kissed by turquoise waves to misty highlands shrouded in clouds, our island’s breathtaking beauty is captured in every frame. Witness the majesty of wildlife in lush forests, explore ancient temples steeped in history, and experience vibrant local festivals that celebrate the rich culture of this tropical paradise.
          <br /><br />
          Each photo invites you to embark on an adventure, climb emerald mountains, glide through sparkling rivers, or wander historic streets where tradition meets modern life. Taste, see, and feel the essence of Sri Lanka with every glance, and let your imagination wander across landscapes that promise unforgettable memories.
          <br /><br />
          Are you ready to let the journey unfold, one stunning view at a time?
        </p>
      </div>
    </section>

    {/* Gallery Cards */}

    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryData.slice(0, visibleCount).map((item) => (
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
                <div className="flex items-center gap-3 font-['barlow'] font-medium text-[15px]">
                  Discover More
                  <span className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
                    <ArrowRight size={14} className="text-white" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        <div className="mt-6 flex flex-col items-center">
          <div className="w-1/2 border-b border-gray-300 mb-4"></div>

          <button
            onClick={handleToggle}
            className="flex items-center gap-2 text-lg text-gray-700 font-bold hover:text-gray-900 transition-colors focus:outline-none font-['barlow']"
          >
            {allVisible ? "Show Less" : "Load More"}{" "}
            <ArrowDown
              size={20}
              className={`transition-transform duration-300 ${
                allVisible ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}
