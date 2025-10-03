import React from "react";
import Destination_img from "@/Components/Destination_img/Destiantion_img.jsx"

const Destination = () => {
  return (
    <>
    <div className="max-w-3xl mx-auto text-center px-4 py-12">
      {/* Sub-heading */}
      <h2 className="font-['barlow'] text-[28px] font-medium leading-[42px] secondary-text-gradient mb-[10px]">
        SRI LANKA
      </h2>

      {/* Main heading */}
      <h1 className="font-['Playfair_Display'] font-bold text-[46px] leading-[55px] gradient-text-animated  mb-[20px]">
        Where To Begin
      </h1>

      {/*line*/}
          <span className=" inline-block text-center  w-[100px] h-1 bg-[#515151] mt-1"></span>

      {/* Paragraph */}
      <p className="font-['barlow'] text-[17px] font-normal leading-[28px] para mt-4 para">
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
