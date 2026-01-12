
import React from 'react';
import { FaLocationArrow, FaPhone, FaEnvelope,FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 md:pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-16 md:mb-20">
        <div>
          <h2 className="text-2xl font-black text-yellow-500 mb-6 tracking-tighter">GREENWAY</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Greenway Travel & Cab Service is your trusted partner for all transportation needs in Sri Lanka. We pride ourselves on safety, comfort, and reliability.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><button onClick={() => onNavigate('home')} className="hover:text-yellow-500 transition-colors">Home</button></li>
            <li><button onClick={() => onNavigate('about')} className="hover:text-yellow-500 transition-colors">About Us</button></li>
            <li><button onClick={() => onNavigate('vehicle')} className="hover:text-yellow-500 transition-colors">Vehicles</button></li>
            <li><button onClick={() => onNavigate('gallery')} className="hover:text-yellow-500 transition-colors">Gallery</button></li>
            <li><button onClick={() => onNavigate('contact')} className="hover:text-yellow-500 transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold mb-6">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-yellow-500"><FaPhone/></i>
              <span>+94 76 125 52 23</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-location-dot text-yellow-500"><FaLocationArrow/></i>
              <span>Polonnaruwa, Sri Lanka</span>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-yellow-500"><FaEnvelope/></i>
              <span className="truncate">greenwaycabpln@gmail.com</span>
            </li>
          </ul>
          <div className="flex gap-5 mt-8 text-2xl">
            <a href="#" className="hover:text-yellow-500 transition-all hover:-translate-y-1"><i className="fa-brands fa-whatsapp"><FaWhatsapp/></i></a>
            <a href="#" className="hover:text-yellow-500 transition-all hover:-translate-y-1"><i className="fa-brands fa-facebook"><FaFacebookF/></i></a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 text-center text-[10px] md:text-xs text-gray-500 uppercase tracking-widest">
        <p>&copy; 2024 Greenway Travel & Cab Service. Developed by CodeCraft Innovations.</p>
      </div>
    </footer>
  );
};

export default Footer;
