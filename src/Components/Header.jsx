import React from "react";
import { FaPhone, FaEnvelope, FaLocationArrow,FaWhatsapp, FaFacebookF } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-yellow-500 text-black py-2 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-medium gap-2">
      <div className="flex flex-wrap justify-center gap-3 md:gap-8">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-phone">
            <FaPhone />
          </i>
          <span>+94 77 576 3009 | +94 75 356 3009</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-phone">
            <FaEnvelope />
          </i>
          <span className="hidden sm:inline">greenwaycabpln@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-phone">
            <FaLocationArrow />
          </i>
          <span>No.445/1, 2nd Canal Road, Kaduruwela, Polonnaruwa</span>
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        {/* <div className="flex gap-2 sm:gap-4"> 
          <button className="hover:underline">Login</button>
          <span>|</span>
          <button className="hover:underline">Register</button>
        </div> */}
        <div className="flex gap-3 text-base">
            <a href="https://wa.me/94718928844?" className="hover:opacity-80"><i><FaWhatsapp /></i></a>
            <a href="#" className="hover:opacity-80"><i><FaFacebookF /></i></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
