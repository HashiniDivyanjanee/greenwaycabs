import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Booking = ({ onNavigate, onTaxiBookingClick }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-yellow-500 py-10 md:py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-800 font-bold tracking-widest text-xs md:text-sm mb-1 uppercase">
            Ready to start?
          </p>
          <h2 className="text-2xl md:text-5xl font-black text-gray-900 leading-tight">
            INTERESTED IN BOOKING?
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button
            onClick={() =>
              onTaxiBookingClick
                ? onTaxiBookingClick()
                : onNavigate && onNavigate("contact")
            }
            className="bg-white text-black font-bold py-3 md:py-4 px-6  md:px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg active:scale-95"
          >
            Taxi & Hire Me{" "}
            <i>
              <FaArrowRight />
            </i>
          </button>
          <button
            onClick={() => navigate("/vehicle")}
            className="bg-[#1a1a1a] text-white  font-bold py-3 md:py-4 px-6  md:px-8 rounded-xl flex items-center justify-center gap-2 hover:bg-black transition-colors shadow-lg active:scale-95"
          >
            Book Vehicle
            <i>
              <FaArrowRight />
            </i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
