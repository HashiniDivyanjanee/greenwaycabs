
import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    title: 'GREENWAY TRAVEL & CAB SERVICE',
    services: ['Rent a Vehicle', 'Hirers', 'Taxi Services']
  },
  {
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    title: 'LUXURY EXPERIENCE AT BEST PRICES',
    services: ['Airport Drops', 'Wedding Cars', 'Tour Packages']
  },
  {
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80',
    title: 'RELIABLE & COMFORTABLE RIDES',
    services: ['24/7 Service', 'Professional Drivers', 'New Fleet']
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[450px] md:h-[600px] overflow-hidden bg-gray-100">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 flex flex-col md:flex-row items-center justify-center p-6 md:p-10 gap-6 md:gap-10 bg-cover bg-center ${
            idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${slide.image})` }}
        >
          <div className="flex-1 text-center md:text-right max-w-xl">
             <h1 className="text-3xl md:text-6xl font-black text-gray-900 leading-tight">
               {slide.title}
             </h1>
             <div className="mt-4 md:mt-6 space-y-1 md:space-y-2">
                {slide.services.map((svc, sidx) => (
                  <div key={sidx} className="flex items-center justify-center md:justify-end gap-2 md:gap-3 text-sm md:text-lg font-bold text-gray-700">
                    <span>{svc}</span>
                    <i className="fa-solid fa-check text-yellow-500"></i>
                  </div>
                ))}
             </div>
          </div>
          <div className="flex-1 hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=600&q=80" 
              alt="Car Preview"
              className="w-full max-w-sm mx-auto drop-shadow-2xl rounded-2xl"
            />
          </div>
        </div>
      ))}

      {/* Slider Nav */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 transition-all ${idx === current ? 'w-8 bg-yellow-500' : 'w-2 bg-gray-400'} rounded-full`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
