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
      {/* Button Text */}
      <span className="inline-block transition-colors duration-300 group-hover:text-[#238B45]">
        {text}
      </span>

      {/* Bottom Line */}
      <span className="absolute left-0 bottom-0 w-full h-1 bg-[#515151]"></span>

      {/* Hover Fill Effect */}
      <span className="absolute left-0 bottom-0 w-full h-1 bg-[#238B45] transform scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100"></span>
    </Link>
  );
};

export default Button;
