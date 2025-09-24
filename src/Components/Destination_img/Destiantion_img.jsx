import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Button from '@/Components/ui/Button.jsx';

const destinations = [
  { id: 1, title: 'Anuradhapura', image: '/images/anuradapura.jpg', description: 'Ancient city with historic temples and ruins.' },
  { id: 2, title: 'Yala National Park', image: '/images/des_yala.jpg', description: 'Wildlife sanctuary home to leopards and elephants.' },
  { id: 3, title: 'Bentota', image: '/images/Bentota.jpg', description: 'Beautiful beach town with water sports and resorts.' },
  { id: 4, title: 'Sigiriya', image: '/images/Sigiriya.jpg', description: 'Historic rock fortress and UNESCO World Heritage site.' },
  { id: 5, title: 'Udawalawe National Park', image: '/images/udawalawe.jpg', description: 'Safari destination famous for elephants.' },
  { id: 6, title: 'Dambulla', image: '/images/Dambulla.jpg', description: 'Cave temple complex with ancient murals.' },
  { id: 7, title: 'Galle', image: '/images/galle.jpg', description: 'Colonial city with fort, lighthouse, and beaches.' },
  { id: 8, title: 'Elle', image: '/images/elle.jpg', description: 'Scenic town with tea plantations and hiking trails.' },
  { id: 9, title: 'Colombo', image: '/images/colombo.jpg', description: 'Vibrant capital city with culture and nightlife.' },
  { id: 10, title: 'Nuwara Eliya', image: '/images/nuwara_eliya.jpg', description: 'Hill country town surrounded by tea estates.' },
  { id: 11, title: 'Jaffna', image: '/images/jaffna.jpg', description: 'Northern city with rich Tamil culture and temples.' },
  { id: 12, title: 'Arugam Bay', image: '/images/arugambay.jpg', description: 'World-class surfing beach with laid-back vibes.' },
  { id: 13, title: 'Kandy', image: '/images/Kandy.jpeg', description: 'Historic city with the sacred Temple of the Tooth.' },
  { id: 14, title: 'Mirissa', image: '/images/mirrisa.jpeg', description: 'Beach town famous for whale watching and nightlife.' },
  { id: 15, title: 'Unawatuna', image: '/images/unawatuna.jpeg', description: 'Relaxing beach with golden sands and clear water.' },
  { id: 16, title: 'Tangalle', image: '/images/tangalle.jpeg', description: 'Secluded beaches and calm turquoise waters.' },
  { id: 17, title: 'Negombo', image: '/images/negombo.jpeg', description: 'Coastal town near airport, with canals and seafood.' },
  { id: 18, title: 'Kalpitiya', image: '/images/kalpitiya.jpeg', description: 'Kite surfing paradise with lagoons and dolphins.' },
  { id: 19, title: 'Beruwela', image: '/images/Beruwela.jpeg', description: 'Beach town with resorts, diving, and coral reefs.' },
  { id: 20, title: 'Hikkaduwa', image: '/images/hikkaduwa.jpeg', description: 'Popular surfing and snorkeling destination.' },
  { id: 21, title: 'Trincomalee', image: '/images/trincomalee.jpeg', description: 'Harbor city with beaches and historic temples.' },
  { id: 22, title: 'Batticaloa', image: '/images/Batticalo.jpeg', description: 'Eastern coast city with lagoons and colonial history.' },
  { id: 23, title: 'Pasikudah', image: '/images/pasikuda.jpeg', description: 'Shallow calm waters ideal for swimming.' },
  { id: 24, title: 'Nilavali', image: '/images/Nilavali.jpeg', description: 'Secluded hidden beach with natural beauty.' },
  { id: 25, title: 'Habarana', image: '/images/Habarana.jpeg', description: 'Gateway to cultural triangle and safari parks.' },
  { id: 26, title: 'Mannar', image: '/images/Mannar.jpeg', description: 'Island town with birdwatching and historical forts.' },
  { id: 27, title: 'Point Pedro', image: '/images/PointPedro.jpeg', description: 'Northern tip of Sri Lanka with coastal charm.' },
  { id: 28, title: 'Polonnaruwa', image: '/images/Polonnaruwa.jpeg', description: 'Ancient city with archaeological ruins.' },
  { id: 29, title: 'Rawana Falls', image: '/images/RavanaFalls.jpeg', description: 'Famous waterfall with lush surroundings.' },
  { id: 30, title: 'Mihintale', image: '/images/Mihinthala.jpeg', description: 'Sacred Buddhist site atop a hill.' },
  { id: 31, title: 'Ridigala', image: '/images/Ridigala.jpeg', description: 'Mountain range with ancient ruins and trails.' },
  { id: 32, title: 'Riverston', image: '/images/Riverstone.jpeg', description: 'Hiking and nature hotspot with panoramic views.' },
  { id: 33, title: 'Ravana Cave', image:'/images/RavanaCave.jpeg', description: 'Historical cave associated with the Ramayana epic.' },
  { id: 34, title: 'Seetha Amman Temple', image:'/images/SeethaTemple.jpeg', description: 'Temple dedicated to Seetha from the Ramayana.' },
  { id: 35, title: 'Hakgala Botanical Garden', image:'/images/BotanicalGarden.jpeg', description: 'Lush garden with exotic plants and scenic views.' },
  { id: 36, title: 'Divurumpola Temple', image:'/images/DivurumpolaTemple.jpeg', description: 'Ancient temple with cultural significance.' },
  { id: 37, title: 'Rumassala Hill', image:'/images/RumasalHill.jpeg', description: 'Scenic hill with mystical legends and panoramic views.' },
];

const DesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(destinations.length / itemsPerPage);
  const gridRef = useRef(null);

  const nextPage = () =>
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  const prevPage = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalPages - 1));

  // Auto scroll every 6s
// Auto scroll every 6s
useEffect(() => {
  const interval = setInterval(nextPage, 6000);
  return () => clearInterval(interval);
}, );


  // Fade transition
  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.style.opacity = 0;
      setTimeout(() => {
        if (gridRef.current) gridRef.current.style.opacity = 1;
      }, 150);
    }
  }, [currentIndex]);

  const currentDestinations = destinations.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  // Drag/swipe support
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleStart = (x) => {
    isDragging.current = true;
    startX.current = x;
  };

  const handleMove = (x) => {
    if (!isDragging.current) return;
    const diff = x - startX.current;
    if (diff > 100) {
      prevPage();
      isDragging.current = false;
    } else if (diff < -100) {
      nextPage();
      isDragging.current = false;
    }
  };

  const handleEnd = () => {
    isDragging.current = false;
  };

  return (
    <section className="text-center relative py-12 px-4 md:px-12 mb-[80px]">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700"
        ref={gridRef}
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
          {currentDestinations.map((dest) => (
            <a
              key={dest.id}
              href="#"
              className={`relative h-[400px] w-full rounded-xl overflow-hidden shadow-md group cursor-pointer transition-transform duration-300 hover:-translate-y-2
                ${dest.id % 2 === 0 ? "-mt-6" : "mt-0"}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gray-900/20 transition-opacity duration-500 group-hover:bg-opacity-50"></div>

              <h3 className="absolute top-6 left-6 font-['Playfair_Display'] text-[28px] leading-[42px] text-white z-10">
                {dest.title}
              </h3>

              <div className="absolute bottom-0 left-0 w-full bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-['barlow'] text-[17px] leading-[25px] font-normal mb-2">
                  {dest.description}
                </p>
                <div className="flex items-center gap-2 font-barlow text-white font-medium text-[15px]">
                  Read More
                  <span className="w-5 h-5 border bg-green-500  rounded-full flex items-center justify-center">
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={prevPage}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition ${
              currentIndex === 0
                ? "bg-white text-green-500"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextPage}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition ${
              currentIndex === totalPages - 1
                ? "bg-white text-green-500"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
{/* Button */}
        <div className="mt-6 text-center">
          <Button text="READ MORE" size="text-xl" /> 
          </div>
      
    </section>
  );
};

export default DesSection;