
import React from 'react';


const About = () => {
  return (
    <div className="bg-white">
    
      
      <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-black mb-8 uppercase tracking-tighter leading-tight">
              REDEFINING TRAVEL <span className="text-yellow-500">STANDARDS</span>
            </h2>
            <div className="space-y-6 text-gray-500 text-sm md:text-lg leading-relaxed">
              <p>
                Greenway Travel & Cab Service has been at the forefront of providing exceptional transportation solutions across the island. Established with a vision to redefine travel standards, we focus on delivering a seamless, safe, and luxurious experience for every passenger.
              </p>
              <p>
                Our fleet includes everything from economical compact cars to luxury sedans and heavy-duty transport vehicles. Whether you are a tourist exploring the wonders of Sri Lanka or a local resident needing a reliable daily commute, Greenway is here to serve you.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 group hover:border-yellow-200 transition-all">
                <h4 className="font-black text-yellow-500 text-3xl md:text-4xl mb-2">10+</h4>
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Excellence</p>
              </div>
              <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100 group hover:border-yellow-200 transition-all">
                <h4 className="font-black text-yellow-500 text-3xl md:text-4xl mb-2">500+</h4>
                <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Verified Fleet</p>
              </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img 
                src="/icon/assets/hero/hero2.avif" 
                alt="Greenway Fleet" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500 rounded-3xl -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-3xl -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
