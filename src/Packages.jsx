import React, {useState} from 'react'
import { Clock, ArrowRight, ArrowDown } from "lucide-react";
import Navigation from './Components/client_navbar'
import Footer from './Components/Footer';



const packages = [
  {
    id: 1,
    title: "Capital Charm: Colombo Experience",
    days: "3 Days",
    description:
      "Discover Colombo’s colonial charm, bustling markets, and modern lifestyle with a guided city adventure.",
    image: "/Packages/colombo.jpg",
  },
  {
    id: 2,
    title: "Misty Escapes: Little England Experience",
    days: "5 Days",
    description:
      "Breathe in fresh mountain air as you explore Nuwara Eliya’s tea plantations, waterfalls, and misty hills.",
    image: "/Packages/Nuwara.jpg",
  },
  {
    id: 3,
    title: "Sacred Legacies: The Cultural Triangle Experience",
    days: "7 Days",
    description:
      "Step into history with visits to Anuradhapura, Polonnaruwa, and Sigiriya — Sri Lanka’s cultural heartland.",
    image: "/Packages/Anuradapura.jpg",
  },
  {
    id: 4,
    title: "Golden Shores: Beach Escape",
    days: "4 Days",
    description:
      "Relax on golden sands, enjoy fresh seafood, and soak in the coastal beauty of Sri Lanka’s south.",
    image: "/Packages/Mirissa.jpg",
  },
  {
    id: 5,
    title: "Nature’s Majesty: Explore Sri Lanka’s Wildlife",
    days: "2 Days",
    description:
      "Spot leopards, elephants, and exotic birds on a thrilling safari in Yala National Park.",
    image: "/Packages/wildlife.jpg",
  },
  {
    id: 6,
    title: "Sri Lanka Odyssey:Sri Lanka’s Wonders in One Journey",
    days: "6 Days",
    description:
      "Experience Sri Lanka’s rich heritage, stunning landscapes, wildlife, and coastal beauty in one trip.",
    image: "/Packages/Colombo1.jpg",
  },
];





export default function Packages() {
    const [visibleCount, setVisibleCount] = useState(3);

  const handleToggle = () => {
    setVisibleCount(visibleCount === 3 ? packages.length : 3);
  };

  // Function to truncate description by words
  const truncateWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const allVisible = visibleCount >= packages.length;


  return (
    <>
    <Navigation/>
    <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 mb-[80px] "
        style={{ backgroundImage: "url('/Packages/Packages_cover.jpg')" }}
      >
         
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg font-['Playfair_Display']">
          Explore the Beauty of Sri Lanka
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-white max-w-2xl drop-shadow-md  font-['barlow']">
         From mountains to beaches, Sri Lanka inspires unforgettable adventures.
        </h2>
      </section>


      {/* Package Section */}
       <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.slice(0, visibleCount).map((pkg) => (
            <a
              key={pkg.id}
              href="#"
              className="block bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden group"
            >
              {/* Image */}
              <div className="p-2">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="rounded-xl w-full h-48 object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
                  {pkg.title}
                </h3>

                <div className="flex items-center text-gray-500 text-sm gap-2">
                  <Clock size={16} /> <span>{pkg.days}</span>
                </div>

                <p className="text-gray-600 text-sm">
                  {truncateWords(pkg.description, 15)}
                </p>

                <div className="flex items-center gap-2 text-green-600 font-medium mt-2">
                  <span>See More</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load More / Show Less Button */}
        <div className="mt-10 flex flex-col items-center">
          <div className="w-1/2 border-b border-gray-300 mb-4"></div>

          <button
            onClick={handleToggle}
            className="flex items-center gap-2 text-lg text-gray-700 font-bold hover:text-gray-900 transition-colors focus:outline-none font-['barlow']"
          >
            {allVisible ? "Show Less" : "Load More"}
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
