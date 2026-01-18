import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Vehicle", path: "/vehicle" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#1c1c1c] shadow-md py-4 px-4 md:px-10 flex justify-between items-center">
      <Link
        to="/"
        className="flex items-center cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        {/* <span className="text-xl md:text-2xl font-bold text-yellow-500 tracking-tighter">
          GREENWAY
        </span> */}
        <img src="/icon/Logo.png" alt="" className="w-17 h-13" />
      </Link>
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `font-semibold text-sm transition-colors ${
                isActive
                  ? "text-yellow-500 underline underline-offset-8 decoration-2"
                  : "text-white hover:text-yellow-500"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl p-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className="text-white" />
        ) : (
          <FaBars className="text-white" />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col py-4 px-6 gap-2 md:hidden border-t animate-in fade-in slide-in-from-top-4 duration-300">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-semibold text-left py-3 px-4 rounded-lg ${
                  isActive
                    ? "bg-yellow-50 text-yellow-500"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
