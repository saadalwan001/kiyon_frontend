import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/AboutUs" },
    { name: "Destinations", href: "/Destination" },
    { name: "Packages", href: "/Packages" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Contact Us", href: "/Contact" },
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
      className={`fixed top-0 w-full z-[200] backdrop-blur-md border-b transition-colors duration-300 ${
        scrolled ? "bg-white/90 border-gray-300" : "bg-gray-200/25 border-gray-300"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center mr-4">
          <img src="/logo.png" alt="Logo" className="h-15 w-auto" />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className={`font-['barlow'] font-bold text-[15px] leading-[23px] transition hover:text-[#FF3A4B] hover:font-extrabold ${
                scrolled ? "text-black" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Customize Tour Button */}
          <Link
      to="/Contact"
      className={`block px-4 py-2 border border-gray-400 rounded text-center font-['Playfair_Display'] text-[15px] leading-[23px] font-normal
                  transition duration-300
                  ${scrolled ? "text-black" : "text-white"}
                  hover:bg-gradient-to-r hover:from-[#F52B74] hover:to-[#FD8908] hover:text-white`}
      onClick={() => setIsOpen(false)}
    >
      Customize Your Tour Package
    </Link>

        </nav>

        {/* MOBILE MENU TOGGLE */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X size={28} color={scrolled ? "black" : "white"} />
            ) : (
              <Menu size={28} color={scrolled ? "black" : "white"} />
            )}
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
              className="block font-['barlow'] text-[15px] leading-[23px] font-normal  text-black hover:text-[#FF3A4B] hover:font-extrabold "
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

         <Link
  to="/Contact"
  className="block px-4 py-2 border border-gray-400 rounded text-center font-['Playfair_Display'] text-[15px] leading-[23px] font-normal text-gray-800 
             transition duration-300
             hover:text-white
             hover:bg-gradient-to-r hover:from-[#F52B74] hover:to-[#FD8908]"
  onClick={() => setIsOpen(false)}
>
  Customize Your Tour Package
</Link>

        </div>
      </div>
    </header>
  );
};

export default Navigation;
