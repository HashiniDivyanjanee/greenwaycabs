
import React, { useState, useMemo, useEffect, useCallback } from 'react';

/* -------------------- DATA -------------------- */

const vehiclesData = [
  {
    id: 1,
    name: 'Toyota Yaris',
    category: 'CAR',
    basePrice: 3200,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80',
    available: true
  },
  {
    id: 2,
    name: 'Suzuki Wagon R',
    category: 'CAR',
    basePrice: 2800,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=600&q=80',
    available: true
  },
  {
    id: 3,
    name: 'Honda Vezel',
    category: 'CAR',
    basePrice: 5500,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&q=80',
    available: false
  },
  {
    id: 4,
    name: 'Luxury Tourist Bus',
    category: 'BUS',
    basePrice: 15000,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80',
    available: true
  },
  {
    id: 5,
    name: 'Bajaj Pulsar',
    category: 'BIKE',
    basePrice: 1500,
    image: 'https://images.unsplash.com/photo-1558981403-c5f91cbba527?auto=format&fit=crop&w=600&q=80',
    available: true
  },
  {
    id: 6,
    name: 'Toyota Hiace',
    category: 'VAN',
    basePrice: 8500,
    image: 'https://images.unsplash.com/photo-1563220464-96620573e04e?auto=format&fit=crop&w=600&q=80',
    available: true
  },
  {
    id: 7,
    name: 'Pulsar NS200',
    category: 'BIKE',
    basePrice: 1800,
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?auto=format&fit=crop&w=600&q=80',
    available: true
  },
  {
    id: 8,
    name: 'Toyota Prado',
    category: 'WEDDING CAR',
    basePrice: 25000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
    available: true
  },
  {
    id: 9,
    name: 'Bajaj RE',
    category: 'THREE WHEEL',
    basePrice: 1200,
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf0a3?auto=format&fit=crop&w=600&q=80',
    available: true
  }
];

const kmOptions = [1, 2, 3, 4, 5];

/* -------------------- CARD -------------------- */

const VehicleBookCard = ({ vehicle, onSelect }) => {
  const [selectedKm, setSelectedKm] = useState(1);
  const currentPrice = vehicle.basePrice + (selectedKm - 1) * 200;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl group animate-in fade-in duration-500">
      {/* Image Container */}
      <div className="p-8 flex items-center justify-center bg-white h-56 md:h-72 overflow-hidden relative">
        <div className="absolute top-4 left-4 bg-gray-50 rounded-full px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-100">
          {vehicle.category}
        </div>
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" 
        />
      </div>

      {/* Info Section */}
      <div className="px-8 py-4 flex justify-between items-center bg-gray-50/50">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight truncate pr-2">{vehicle.name}</h3>
        <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-2 py-1 rounded-md shrink-0 ${
          vehicle.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'
        }`}>
          {vehicle.available ? 'Available' : 'Booked'}
        </span>
      </div>

      <hr className="mx-8 border-gray-100" />

      {/* KM Selection Chips */}
      <div className="px-8 py-6 flex flex-wrap gap-2 md:gap-3 justify-center">
        {kmOptions.map((km) => (
          <button
            key={km}
            onClick={() => setSelectedKm(km)}
            className={`flex items-center gap-1.5 px-3 py-2.5 rounded-full border transition-all duration-200 ${
              selectedKm === km 
                ? 'bg-[#fef3e7] border-[#f8e3cc] text-[#e67e22] shadow-sm' 
                : 'bg-white border-gray-100 text-gray-400 hover:border-orange-100 hover:text-orange-400'
            }`}
          >
            <i className={`fa-solid fa-gauge-simple-high text-[10px] md:text-xs ${selectedKm === km ? 'text-[#e67e22]' : 'text-orange-300'}`}></i>
            <span className="text-[10px] md:text-xs font-black whitespace-nowrap">{km} Km</span>
          </button>
        ))}
      </div>

      {/* Pricing Section */}
      <div className="px-8 pb-8 text-right mt-auto">
        <p className="text-yellow-500 font-black text-2xl md:text-3xl">
          Rs.{currentPrice} <span className="text-xs font-bold text-gray-400 uppercase ml-1">/ Day</span>
        </p>
      </div>

      {/* Action Button */}
      <button 
        onClick={() => onSelect(vehicle)}
        className="w-full bg-[#111] text-white font-black py-6 text-base hover:bg-black transition-all active:scale-[0.98] uppercase tracking-[0.15em] border-t border-gray-100"
      >
        Reserve This Ride
      </button>
    </div>
  );
};

/* -------------------- MAIN GRID / SLIDER -------------------- */

const FeaturedVehicles = ({ selectedCategory = 'ALL', viewMode = 'grid', onSelectVehicle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Filter logic
  const filteredVehicles = useMemo(() => {
    const search = searchQuery.toLowerCase();
    return vehiclesData.filter((v) => {
      const matchCategory = selectedCategory === 'ALL' || v.category === selectedCategory;
      const matchSearch = v.name.toLowerCase().includes(search);
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Screen size adjustments for slider
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = filteredVehicles.length - visibleCount;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [filteredVehicles.length, visibleCount]);

  useEffect(() => {
    if (viewMode !== 'slider' || isPaused || filteredVehicles.length <= visibleCount) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, viewMode, filteredVehicles.length, visibleCount]);

  return (
    <section className={`bg-[#fcfcfc] py-16 md:py-24 px-6 md:px-10 overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        {/* Search Bar - Only show in grid view (Vehicles Page) */}
        {viewMode === 'grid' && (
          <div className="relative mb-16 max-w-4xl mx-auto group">
            <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
              <i className="fa-solid fa-magnifying-glass text-gray-400 group-focus-within:text-yellow-500 transition-colors"></i>
            </div>
            <input
              type="text"
              placeholder="Search our premium fleet..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-[2rem] py-6 pl-16 pr-10 text-base md:text-lg focus:ring-4 focus:ring-yellow-100 focus:outline-none transition-all placeholder-gray-400 shadow-xl shadow-gray-100"
            />
          </div>
        )}

        {/* Heading Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <span className="text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-3 block">Premium Experience</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              {viewMode === 'slider' ? 'FEATURED' : (selectedCategory === 'ALL' ? 'AVAILABLE' : selectedCategory)} <span className="text-yellow-500">FLEET</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-4 max-w-xl">
              Hand-picked {selectedCategory === 'ALL' ? 'vehicles' : selectedCategory.toLowerCase() + 's'} curated for safety, comfort, and a superior travel experience.
            </p>
          </div>
          <div className="bg-gray-100 px-6 py-3 rounded-full hidden md:block border border-gray-200">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{filteredVehicles.length} Vehicles Found</span>
          </div>
        </div>

        {/* View Selection: Slider vs Grid */}
        {filteredVehicles.length > 0 ? (
          viewMode === 'slider' ? (
            <div 
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
              >
                {filteredVehicles.map((v) => (
                  <div 
                    key={v.id} 
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / visibleCount}%` }}
                  >
                    <VehicleBookCard vehicle={v} onSelect={onSelectVehicle} />
                  </div>
                ))}
              </div>

              {/* Slider Dots */}
              {filteredVehicles.length > visibleCount && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: Math.max(0, filteredVehicles.length - visibleCount + 1) }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentIndex === i ? 'w-10 bg-yellow-500' : 'w-2 bg-gray-200 hover:bg-yellow-200'
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
              {filteredVehicles.map((v) => (
                <VehicleBookCard key={v.id} vehicle={v} onSelect={onSelectVehicle} />
              ))}
            </div>
          )
        ) : (
          <div className="py-32 text-center flex flex-col items-center animate-in fade-in duration-700">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-gray-100">
              <i className="fa-solid fa-car-rear text-5xl text-gray-100"></i>
            </div>
            <h3 className="text-2xl font-black text-gray-800 uppercase tracking-tight">No Vehicles Matching</h3>
            <p className="text-gray-400 mt-3 max-w-xs mx-auto">We couldn't find any results for your current search or category filter. Try clearing your filters.</p>
            {viewMode === 'grid' && (
              <button 
                onClick={() => {setSearchQuery(''); window.scrollTo({top: 0, behavior: 'smooth'})}}
                className="mt-8 text-yellow-500 font-bold uppercase tracking-widest text-xs hover:text-yellow-600 transition-colors underline underline-offset-8"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedVehicles;
