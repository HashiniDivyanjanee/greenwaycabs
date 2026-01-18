
import React from 'react';

const PageBanner = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative h-[250px] md:h-[350px] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] hover:scale-110" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${bgImage})` 
        }}
      />
      
      {/* Content */}
      <div className="relative text-center text-white px-6 z-10">
        <h1 className="text-3xl md:text-6xl font-black uppercase tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-3 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
          <span className="text-yellow-500 cursor-pointer hover:text-white transition-colors" onClick={() => window.location.hash = 'home'}>Home</span>
          <i className="fa-solid fa-chevron-right text-[8px] text-gray-400"></i>
          <span className="text-white/80">{subtitle || title}</span>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default PageBanner;
