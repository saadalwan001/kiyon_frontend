import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/Components/ui/Button.jsx";

const StackedGallerySlider = () => {
  const cards = [
    { id: 1, img: "/Gallery/Adventure.jpg", title: "Sigiriya Rock" },
    { id: 2, img: "/Gallery/food.jpg", title: "Ella Bridge" },
    { id: 3, img: "/Gallery/Beach.jpg", title: "Galle Fort" },
    { id: 4, img: "/Gallery/culture.jpg", title: "Temple of Tooth" },
    { id: 5, img: "/Gallery/heritage.jpg", title: "Mirissa Beach" },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cards.length);
  const prev = () => setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8">
        
    <h2 className="font-['barlow'] text-[28px] font-medium leading-[40px] secondary-text-gradient mb-[-25px] text-center">
        Want To See What's Interesting
      </h2>
        <h2 className="text-[48px] font-bold text-center font-['Playfair_Display'] mb-[80px] gradient-text-animated">
          Gallery of Wonders
        </h2>

        <div className="relative flex flex-col items-center">
          {/* Wrapping to remove horizontal scroll appearing in small screen  */}
          <div className="relative w-full flex justify-center h-[380px] overflow-hidden pt-[30px]">
            <AnimatePresence>
              {cards.map((card, i) => {
                const position = (i - index + cards.length) % cards.length;

                const cardWidth = 220;
                let x = 0;
                let scale = 1;
                let zIndex = 0;

                if (position === 0) {
                  x = 0;
                  scale = 1.15;
                  zIndex = 50;
                } else if (position === 1 || position === cards.length - 1) {
                  x = position === 1 ? 240 : -240;
                  scale = 1;
                  zIndex = 40;
                } else if (position === 2 || position === cards.length - 2) {
                  x = position === 2 ? 460 : -460;
                  scale = 0.95;
                  zIndex = 30;
                } else {
                  x = 0;
                  scale = 0.9;
                  zIndex = 20;
                }

                return (
                  <motion.div
                    key={card.id}
                    className="absolute rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      x,
                      rotate: 0,
                      scale,
                      zIndex,
                      opacity: 1,
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: `${cardWidth}px`, height: "320px" }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    {position === 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-center py-3 font-['barlow']">
                        <h3 className="text-lg font-semibold">{card.title}</h3>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={prev}
              className="button-color rounded-full p-2 shadow"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              className="button-color rounded-full p-2 shadow"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-16 text-center">
        <Button text="SEE MORE" link="/Gallery" size="text-xl" />
      </div>
    </section>
  );
};

export default StackedGallerySlider;
