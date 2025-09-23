
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <Link to={link} className="group relative inline-block font-barlow font-extrabold text-gray-500 ">
      <span className=" inline-block transition-colors duration-300 group-hover:text-black mb-2">{text}</span>
      <span className="  absolute left-0 bottom-0 w-full h-1 bg-green-500 group-hover:bg-black transition-all duration-500 origin-right scale-x-100 group-hover:scale-x-100"></span>
    </Link>
  );
};

export default Button;
