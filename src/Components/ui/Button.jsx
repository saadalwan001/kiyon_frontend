import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="group relative inline-block font-barlow font-bold text-[13px] leading-[16px] text-[#515151] transition-colors duration-300 "
    >
      {/* Button Text */}
      <span className="inline-block transition-colors duration-300 group-hover:text-[#238B45]">
        {text}
      </span>

      {/* Bottom Line */}
      <span className="  absolute left-0 bottom-0 w-full h-1 bg-[#515151] top-[20px]"></span>

      {/* Hover Fill Effect */}
      <span className="absolute left-0 bottom-0 w-full h-1 bg-[#238B45] transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 top-[20px]"></span>
    </Link>
  );
};

export default Button;
