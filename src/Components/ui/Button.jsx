import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, size }) => {
  // Default size classes
  const defaultSize = "text-[13px] leading-[16px]";

  // Allow override if size is provided
  const sizeClasses = size ? size : defaultSize;

  return (
    <Link
      to={link}
      className={`group relative inline-block font-['barlow'] font-bold ${sizeClasses} text-[#515151] transition-colors duration-300 pb-1`} // added pb-1 for space
    >
      {/* Button Text with gradient hover */}
      <span className="inline-block transition duration-300 group-hover:bg-gradient-to-r group-hover:from-[#F52B74] group-hover:to-[#FD8908] group-hover:bg-clip-text group-hover:text-transparent">
        {text}
      </span>

      {/* Bottom Line */}
      <span className="absolute left-0 bottom-0 w-full h-1 bg-[#515151] group-hover:bg-gradient-to-r group-hover:from-[#F52B74] group-hover:to-[#FD8908] transition-all duration-300"></span>

      {/* Hover Fill Effect */}
      <span className="font-bold text-[15px] leading-[26px] italic max-w-[500px] mt-[30px]
  hover:bg-gradient-to-r hover:from-[#F52B74] hover:to-[#FD8908] hover:bg-clip-text hover:text-transparent"></span>
    </Link>
  );
};

export default Button;
