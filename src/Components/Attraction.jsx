import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import Button from "./ui/Button";

const data = [
  {
    id: 1,
    image: "/colombo.jpg",
    title: "Capital Charm: Colombo Experience",
    days: "3 Days",
    description: "Discover Colombo’s colonial charm, bustling markets, and modern lifestyle with a guided city adventure.",
  },
  {
    id: 2,
    image: "/nuwara.jpg",
    title: "Misty Escapes: Little England Experience",
    days: "5 Days",
    description: "Breathe in fresh mountain air as you explore Nuwara Eliya’s tea plantations, waterfalls, and misty hills.",
  },
  {
    id: 3,
    image: "/kandy.jpg",
    title: "Sacred City: Kandy Experience",
    days: "7 Days",
    description: "Step into history with visits to Anuradhapura, Polonnaruwa, and Sigiriya — Sri Lanka’s cultural heartland.",
  },
];

 

const Attraction = () => {

 const truncateWords = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <section className="relative mb-[80px]">
  {/* Background Section */}
  <div
    className="relative bg-cover bg-center h-[750px] flex flex-col items-center justify-center text-black "
    style={{ backgroundImage: `url('/Attraction_bg.jpg')` }}
  >
    <h2 className="text-2xl md:text-3xl font-['barlow'] font-medium mb-2 text-gray-800 mt-[-150px]">
      Need To Explore
    </h2>
    <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-center px-4">
      Our Travel Packages
    </h1>
    <span className="inline-block text-center w-[100px] h-1 bg-black mt-5"></span>
  </div>

  {/* Cards Grid overlapping the background */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 -mt-80 relative z-10">
    {data.map((item) => (
      <a
        key={item.id}
        href="#"
        className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group"
      >
        {/* Image */}
        <div className="p-2">
          <img
            src={item.image}
            alt={item.title}
            className="rounded-xl w-full h-48 object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
            {item.title}
          </h3>

          <div className="flex items-center text-gray-500 text-sm gap-2">
            <Clock size={16} /> <span>{item.days}</span>
          </div>

          <p className="text-gray-600 text-sm">{truncateWords(item.description, 15)}</p>

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

  {/* Button */}
  <div className="mt-16 text-center">
    <Button text="SEE MORE" link="/Packages" size="text-xl" />
  </div>
</section>

  );
};

export default Attraction;
