import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-yellow-500 text-black py-2 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm font-medium gap-2">
      <div className="flex flex-wrap justify-center gap-3 md:gap-8">
        {/* Phone Numbers - Click to Call */}
        <div className="flex items-center gap-2">
          <FaPhone className="text-[10px] md:text-xs" />
          <div className="flex gap-1">
            <a
              href="tel:+94775763009"
              className="hover:underline hover:text-gray-800 transition-colors"
            >
              +94 77 576 3009
            </a>
            <span>|</span>
            <a
              href="tel:+94753563009"
              className="hover:underline hover:text-gray-800 transition-colors"
            >
              +94 75 356 3009
            </a>
            <span>|</span>
            <a
              href="tel:+94718928844"
              className="hover:underline hover:text-gray-800 transition-colors"
            >
              +94 71 892 8844
            </a>
          </div>
        </div>

        {/* Email - Click to Mail */}
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-[10px] md:text-xs" />
          <a
            href="mailto:greenwaylanka2021@gmail.com"
            className="hidden sm:inline hover:underline transition-colors"
          >
            greenwaylanka2021@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <FaLocationArrow className="text-[10px] md:text-xs" />
          <span className="hidden lg:inline">
            2nd Canal Road, Kaduruwela, Polonnaruwa
          </span>
          <span className="lg:hidden text-[10px]">Polonnaruwa</span>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex gap-3 text-base">
          <a
            href="https://wa.me/94775763009"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/share/17x7yY9hgb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaFacebookF size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
