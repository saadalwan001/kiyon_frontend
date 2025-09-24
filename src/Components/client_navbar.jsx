import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Destinations", href: "/destinations" },
    { name: "Packages", href: "/packages" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Track scroll to change navbar text color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        scrolled ? "bg-white/90 border-gray-300" : "bg-gray-200/25 border-gray-300"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center mr-4">
          <img src="#" alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className={`font-['barlow'] font-bold text-[15px] leading-[23px]  transition hover:text-[#238B45] ${
                scrolled ? "text-black" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Check Availability */}
          <Link
            to="/check-availability"
            className={`ml-4 px-4 py-2 border rounded font-['Playfair_Display'] text-[15px] leading-[23px] font-normal transition hover:bg-[#238B45] hover:text-white ${
              scrolled ? "border-black text-black" : "border-white/90 text-white"
            }`}
          >
            Check Availability 
          </Link>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} color={scrolled ? "black" : "white"} /> : <Menu size={28} color={scrolled ? "black" : "white"} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      <div
        className={`lg:hidden bg-white/95 shadow-md border-t border-gray-200 overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="block font-['barlow'] text-[15px] leading-[23px] font-normal text-gray-900 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/check-availability"
            className="block px-4 py-2 border border-gray-400 rounded text-center font-['Playfair_Display'] text-[15px] leading-[23px] font-normal text-gray-800 hover:bg-blue-600 hover:text-white transition"
            onClick={() => setIsOpen(false)}
          >
            Check Availability
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
