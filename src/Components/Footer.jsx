import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111] text-white pt-16 pb-8 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-yellow-500 tracking-tighter">
              GREENWAY TRAVELS & RENT A CAR
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for premium travel experiences in Sri Lanka.
              Safe, reliable, and luxury fleet at your service 24/7.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/17x7yY9hgb/"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://wa.me/94718928844"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all"
              >
                <FaWhatsapp size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  to="/"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-yellow-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/vehicle"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Our Vehicle
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-yellow-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-white">
              Contact Info
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              {/* Phone Numbers with tel: links */}
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-yellow-500 mt-1" />
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+94775763009"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    +94 77 576 3009
                  </a>
                  <a
                    href="tel:+94753563009"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    +94 75 356 3009
                  </a>
                  <a
                    href="tel:+94718928844"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    +94 71 892 8844
                  </a>

                  <a
                    href="tel:+94274366104"
                    className="hover:text-yellow-500 transition-colors"
                  >
                    +94 27 436 6104
                  </a>
                </div>
              </li>

              {/* Email with mailto: link */}
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-500" />
                <a
                  href="mailto:greenwaylanka2021@gmail.com"
                  className="hover:text-yellow-500 transition-colors underline-offset-4"
                >
                  greenwaylanka2021@gmail.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-yellow-500 mt-1" />
                <span>2nd Canal Road, Kaduruwela, Polonnaruwa</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/Trust */}
          <div>
            <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-white">
              24/7 Support
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Need a ride urgently? We are available around the clock for your
              travel needs.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-500 text-black font-black px-6 py-3 rounded-xl text-[10px] uppercase tracking-widest hover:bg-white transition-all"
            >
              Book a Car Now
            </Link>
          </div>
        </div>

        {/* Bottom Bar (Your requested text is here) */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs font-medium text-gray-500 tracking-wide">
            © {currentYear}{" "}
            <span className="text-gray-300">
              Greenway Travels & Rent a Car.
            </span>{" "}
            All Rights Reserved.
          </p>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
            Developed by{" "}
            <span className="text-yellow-500/80 hover:text-yellow-500 cursor-pointer transition-colors">
              <a href="https://wa.me/94772109312">CodeCraft Innovations</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
