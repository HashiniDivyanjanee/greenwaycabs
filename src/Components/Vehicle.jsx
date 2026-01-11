
import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const vehiclesData = [
  {
    id: 1,
    name: "Toyota Yaris",
    basePrice: 3200,
    image:
      "https://www.carbike360.com/_next/image?url=https%3A%2F%2Fd2uqhpl0gyo7mc.cloudfront.net%2Fsmall_Vezel_b9cbe13538.jpg&w=3840&q=75",
    available: true,
  },
  {
    id: 2,
    name: "Suzuki Wagon R",
    basePrice: 2800,
    image:
      "https://images.overdrive.in/wp-content/uploads/2013/11/VEZEL_HYBRID-red.jpg",
    available: true,
  },
  {
    id: 3,
    name: "Honda Vezel",
    basePrice: 5500,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMWERktNUNWWxQXaDsbYWHTZ0xunckBqZVg&s",
    available: false,
  },
  {
    id: 4,
    name: "Toyota Prius",
    basePrice: 4500,
    image:
      "https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.jpg?s=612x612&w=0&k=20&c=vws8oDFjcfGpqNAybWPxsA9XROdcBh2MXW2PGEDgk-8=",
    available: true,
  },
  {
    id: 5,
    name: "Nissan Leaf",
    basePrice: 4000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpR4dIuwglyw7ROwEFCGi7-FnlVPfmzYk8hA&s",
    available: true,
  },
];
const kmOptions = [1, 2, 3, 4, 5];

const VehicleCard = ({ vehicle }) => {
  const [selectedKm, setSelectedKm] = useState(1);
  const currentPrice = vehicle.basePrice + (selectedKm - 1) * 200;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all hover:shadow-xl group h-full">
      <div className="p-4 flex items-center justify-center h-48 md:h-56 overflow-hidden bg-gray-50/50">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      <div className="px-5 py-3 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
        <span className={`text-sm font-bold ${vehicle.available ? 'text-green-600' : 'text-red-500'}`}>
          {vehicle.available ? 'Available' : 'Booked'}
        </span>
      </div>

      <hr className="mx-5 border-gray-100" />

      <div className="px-5 py-4 flex flex-wrap gap-2 justify-between">
        {kmOptions.map((km) => (
          <button
            key={km}
            onClick={() => setSelectedKm(km)}
            className={`flex items-center gap-2 px-3 py-3 rounded-xl transition-all border ${
              selectedKm === km 
                ? 'bg-yellow-100 border-yellow-300 text-yellow-700' 
                : 'bg-orange-50 border-transparent text-gray-600 hover:bg-orange-100'
            }`}
          >
            <i className={`fa-solid fa-gauge-simple-high text-xs md:text-sm ${selectedKm === km ? 'text-yellow-600' : 'text-orange-400'}`}></i>
            <span className="text-[10px] md:text-xs font-bold whitespace-nowrap">{km} Km</span>
          </button>
        ))}
      </div>

      <div className="px-5 pb-4 text-right mt-auto">
        <p className="text-yellow-500 font-black text-xl md:text-2xl">
          Rs.{currentPrice} Per Day
        </p>
      </div>

      <button className="w-full bg-[#1c1c1c] text-white font-bold py-5 text-lg hover:bg-black transition-all active:scale-95">
        Book Now
      </button>
    </div>
  );
};

const FeaturedVehicles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = vehiclesData.length - visibleCount;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [visibleCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = vehiclesData.length - visibleCount;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  }, [visibleCount]);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="bg-white py-12 md:py-16 px-6 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-black uppercase">
            Enjoy Our <span className="text-yellow-500">Journey</span>
          </h2>
          <p className="text-gray-500 max-w-xl mt-2 text-xs md:text-sm leading-relaxed">
            Premium quality rides with the latest models and features to ensure your comfort and safety throughout the trip.
          </p>
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all shadow-sm"
          >
            <i className="fa-solid fa-chevron-left"><FaChevronLeft/></i>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-all shadow-sm"
          >
            <i className="fa-solid fa-chevron-right"><FaChevronRight/></i>
          </button>
        </div>
      </div>

      <div 
        className="relative max-w-6xl mx-auto overflow-hidden px-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
        >
          {vehiclesData.map((v) => (
            <div 
              key={v.id} 
              className="flex-shrink-0 px-2 md:px-4" 
              style={{ width: `${100 / visibleCount}%` }}
            >
              <VehicleCard vehicle={v} />
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.max(0, vehiclesData.length - visibleCount + 1) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === i ? 'w-8 bg-yellow-500' : 'w-2 bg-gray-200'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedVehicles;
