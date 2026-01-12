import React, { useState } from "react";
import {
  FaBars, FaTimes
} from "react-icons/fa";
const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", value: "home" },
    { label: "About Us", value: "about" },
    { label: "Vehicle", value: "vehicle" },
    { label: "Gallery", value: "gallery" },
    { label: "Contact", value: "contact" },
  ];

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#1c1c1c] shadow-md py-4 px-4 md:px-10 flex justify-between items-center">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => handleNavClick("home")}
      >
        <span className="text-xl md:text-2xl font-bold text-yellow-500 tracking-tighter">
          GREENWAY
        </span>
      </div>

      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <button
            key={item.value}
            onClick={() => handleNavClick(item.value)}
            className={`font-semibold text-sm transition-colors ${
              currentPage === item.value
                ? "text-yellow-500 underline underline-offset-8 decoration-2"
                : "text-white hover:text-yellow-500"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

   <button className="md:hidden text-2xl p-2" onClick={() => setIsOpen(!isOpen)}>
        <i className={`fa-solid ${isOpen ? <FaTimes/> : <FaBars/>}`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col py-4 px-6 gap-2 md:hidden border-t animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`font-semibold text-left py-3 px-4 rounded-lg ${
                currentPage === item.value ? 'bg-yellow-50 text-yellow-500' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
