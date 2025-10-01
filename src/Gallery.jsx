import React, { useState } from "react";
import { ArrowDown } from "lucide-react";
import Navigation from "./Components/client_navbar";
import Footer from "./Components/Footer";

const galleryData = [
  { id: 1, image: "/Gallery/food.jpg", title: "Foods", description: "Discover the flavors of paradise." },
  { id: 2, image: "/Gallery/culture.jpg", title: "Culture", description: "Explore heritage sites and traditions." },
  { id: 3, image: "/Gallery/nature.jpg", title: "Nature", description: "Experience lush landscapes and wildlife." },
  { id: 4, image: "/Gallery/Adventure.jpg", title: "Adventure", description: "Thrilling activities and outdoor experiences." },
  { id: 5, image: "/Gallery/Beach.jpg", title: "Beaches", description: "Relax on golden sands and tropical sun." },
  { id: 6, image: "/Gallery/heritage.jpg", title: "Heritage", description: "Step into history through ancient sites." },
  { id: 7, image: "/Gallery/arial.jpg", title: "Arial", description: "Explore urban landscapes and city vibes." },
  { id: 8, image: "/Gallery/galleface.jpg", title: "Galle Face", description: "Seaside promenade with city views." },
];

// Function to create rows with scaled widths to fill the container
// eslint-disable-next-line no-unused-vars
const createJustifiedRows = (images, targetHeight = 200) => {
  let rows = [];
  let row = [];
  let rowWidth = 0;

  
// eslint-disable-next-line no-unused-vars
  images.forEach((img, index) => {
    const randomWidth = Math.random() * 0.5 + 0.75; // random aspect ratio
    row.push({ ...img, aspect: randomWidth });
    rowWidth += randomWidth;

    // If row width reaches threshold (>=2.5), finalize row
    if (rowWidth >= 2.5) {
      // Scale widths proportionally so sum = 100%
      const totalAspect = row.reduce((sum, it) => sum + it.aspect, 0);
      const scaledRow = row.map((it) => ({ ...it, widthPercent: (it.aspect / totalAspect) * 100 }));
      rows.push(scaledRow);
      row = [];
      rowWidth = 0;
    }
  });

  // Handle remaining images
  if (row.length > 0) {
    const totalAspect = row.reduce((sum, it) => sum + it.aspect, 0);
    const scaledRow = row.map((it) => ({ ...it, widthPercent: (it.aspect / totalAspect) * 100 }));
    rows.push(scaledRow);
  }

  return rows;
};

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleToggle = () => {
    setVisibleCount(visibleCount === 6 ? galleryData.length : 6);
  };

  const allVisible = visibleCount >= galleryData.length;

  const rows = createJustifiedRows(galleryData.slice(0, visibleCount));

  return (
    <>
      <Navigation />

      <section
        className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-4 mb-[80px]"
        style={{ backgroundImage: "url('/Gallery/Gallery_Cover.jpg')" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg font-['Playfair_Display']">
          Discover Sri Lanka
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-white max-w-2xl drop-shadow-md font-['barlow']">
          Embark on a visual journey through Sri Lanka’s landscapes, culture, and unforgettable experiences.
        </h2>
      </section>

      <section className="py-20 pt-[80px] mb-[10px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900  font-['Playfair_Display'] mb-[60px]">
            Gallery of Wonders
          </h2>
         
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex mb-2">
              {row.map((item) => (
                <div
                  key={item.id}
                  className="px-1"
                  style={{ flex: `0 0 ${item.widthPercent}%`, height: "200px" }}
                >
                  <div className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                      <p className="text-white text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

          <div className="mt-6 flex flex-col items-center">
            <div className="w-1/2 border-b border-gray-300 mb-4"></div>
            <button
              onClick={handleToggle}
              className="flex items-center gap-2 text-lg text-gray-700 font-bold hover:text-gray-900 transition-colors focus:outline-none font-['barlow']"
            >
              {allVisible ? "Show Less" : "Load More"}
              <ArrowDown
                size={20}
                className={`transition-transform duration-300 ${allVisible ? "rotate-180" : "rotate-0"}`}
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
