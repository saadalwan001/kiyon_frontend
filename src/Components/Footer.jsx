import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#303030] text-white pt-[80px]">
      
      {/* Top section with 4 columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1 - Links */}
        <div className="flex flex-col space-y-3 font-['barlow'] font-bold">
          <a href="#" className="hover:text-[#238B45] transition">Home</a>
          <a href="#" className="hover:text-[#238B45] transition">About Us</a>
          <a href="#" className="hover:text-[#238B45] transition">Destination</a>
        </div>

        {/* Column 2 - Links */}
        <div className="flex flex-col space-y-3 font-['barlow'] font-bold">
          <a href="#" className="hover:text-[#238B45] transition">Packages</a>
          <a href="#" className="hover:text-[#238B45] transition">Gallery</a>
          <a href="#" className="hover:text-[#238B45] transition">Contact Us</a>
        </div>

        {/* Column 3 - Contact Info */}
        <div className="flex flex-col space-y-3 font-['barlow'] font-bold">
          <a
            href="https://www.google.com/maps/place/123+Main+Street,+Colombo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#238B45] transition-colors"
          >
            <MapPin size={18} />
            <span>123 Main Street, Colombo</span>
          </a>
          <a
            href="tel:+94711234567"
            className="flex items-center gap-2 hover:text-[#238B45] transition-colors"
          >
            <Phone size={18} />
            <span>+94 71 123 4567</span>
          </a>
          <a
            href="mailto:info@kiyontravels.com"
            className="flex items-center gap-2 hover:text-[#238B45] transition-colors"
          >
            <Mail size={18} />
            <span>info@kiyontravels.com</span>
          </a>
        </div>

        {/* Column 4 - Placeholder (optional) */}
        <div></div>
      </div>

      {/* Horizontal line */}
      <hr className="border-gray-600 mx-4 sm:mx-6 lg:mx-8" />

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Column - Subscribe */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-bold font-['Playfair_Display']">
            Subscribe To Stay Updated
          </h2>
          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg outline-none text-black bg-white font-['barlow']"
            />
            <button className="bg-[#238B45] px-4 py-2 rounded-r-lg hover:bg-green-600 transition font-['barlow'] font-bold">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Column - Socials + Copyright */}
        <div className="flex flex-col items-start md:items-end space-y-4">
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white transition-all duration-300 hover:bg-[#238B45] hover:border-[#238B45]"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full text-white transition-all duration-300 hover:bg-[#238B45] hover:border-[#238B45]"
            >
              <Instagram size={24} />
            </a>
          </div>
          <p className="text-sm text-white font-['barlow'] font-bold text-right md:text-right">
            All rights Reserved by © Kiyon Travels & Tours | Powered by CoreChip Digital
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
