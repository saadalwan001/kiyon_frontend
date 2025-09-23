import React from "react";
import Destination_img from "@/Components/Destination_img/Destiantion_img.jsx"

const Destination = () => {
  return (
    <>
    <div className="max-w-3xl mx-auto text-center px-4 py-12">
      {/* Sub-heading */}
      <h2 className="font-['barlow'] text-[28px] font-medium leading-[42px] text-gray-800 mb-[10px]">
        SRI LANKA
      </h2>

      {/* Main heading */}
      <h1 className="font-['Playfair_Display'] text-[46px] leading-[46px] text-gray-900  mb-[25px]">
        Where To Begin
      </h1>

      {/* Paragraph */}
      <p className="font-['barlow'] text-[17px] font-normal leading-[28px] text-gray-700 mt-4">
        From ancient temples to vibrant street markets, Sri Lanka is a land of
        endless exploration. Which path will you take to create your memories?
      </p>

      
    </div>
    {/* image section */}
      <Destination_img/>
    </>
  );
};

export default Destination;
