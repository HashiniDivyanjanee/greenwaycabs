import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase'; 
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

/* -------------------- SLIDER CARD COMPONENT -------------------- */

const SliderVehicleCard = ({ vehicle }) => {
  const navigate = useNavigate();
  const [selectedKm, setSelectedKm] = useState('1 Km');
  const kmOptions = ['1 Km', '2 Km', '3 Km', '4 Km', '5 Km'];

  const displayImage = vehicle.images && vehicle.images.length > 0 
    ? vehicle.images[0] 
    : (vehicle.image || 'https://via.placeholder.com/400x300?text=No+Image');

  const getDisplayPrice = () => {
    if (vehicle.kmPrices && vehicle.kmPrices[selectedKm]) {
      return Number(vehicle.kmPrices[selectedKm]).toLocaleString();
    }

    return "0";
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all hover:shadow-xl group h-full">
      <div className="p-4 flex items-center justify-center h-48 md:h-56 overflow-hidden bg-gray-50/50">
        <img 
          src={displayImage} 
          alt={vehicle.name} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
        />
      </div>

      <div className="px-5 py-3 flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900 truncate pr-2 uppercase">{vehicle.name}</h3>
        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
          vehicle.available !== false ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'
        }`}>
          {vehicle.available !== false ? 'Available' : 'Booked'}
        </span>
      </div>

      <hr className="mx-5 border-gray-100" />

      {/* KM Selection Buttons */}
      <div className="px-5 py-4 flex flex-wrap gap-2 justify-center">
        {kmOptions.map((km) => (
          <button
            key={km}
            onClick={() => setSelectedKm(km)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-all border ${
              selectedKm === km 
                ? 'bg-yellow-100 border-yellow-300 text-yellow-700' 
                : 'bg-white border-gray-100 text-gray-400 hover:bg-orange-50'
            }`}
          >
            <span className="text-[10px] font-black whitespace-nowrap">{km}</span>
          </button>
        ))}
      </div>

      <div className="px-5 pb-4 text-right mt-auto">
        <p className="text-yellow-500 font-black text-xl">
          Rs.{getDisplayPrice()} <span className="text-[10px] text-gray-400 uppercase">/ {selectedKm}</span>
        </p>
      </div>


      <button 
        onClick={() => navigate(`/vehicle/${vehicle.id}`, { state: { vehicle } })}
        className="w-full bg-[#1c1c1c] text-white font-black py-5 text-sm uppercase tracking-widest hover:bg-black transition-all active:scale-95"
      >
        Reserve This Ride
      </button>
    </div>
  );
};

/* -------------------- MAIN SLIDER COMPONENT -------------------- */

const SliderVehicle = () => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);


  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const q = query(collection(db, "vehicles"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setVehiclesData(data);
      } catch (err) {
        console.error("Firebase fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  // Responsive Screen Logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, vehiclesData.length - visibleCount);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [vehiclesData.length, visibleCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, vehiclesData.length - visibleCount);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  }, [vehiclesData.length, visibleCount]);

  // Auto-play
  useEffect(() => {
    if (isPaused || vehiclesData.length <= visibleCount) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused, vehiclesData.length, visibleCount]);

  if (loading) return <div className="py-20 text-center text-yellow-500 font-bold uppercase tracking-widest">Loading Fleet...</div>;

  return (
    <section className="bg-white py-12 md:py-16 px-6 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-black uppercase">
            Enjoy Our <span className="text-yellow-500">Journey</span>
          </h2>
          <p className="text-gray-500 max-w-xl mt-2 text-xs md:text-sm leading-relaxed font-medium">
            Premium quality rides curated for your comfort and safety. Choose your perfect match from our latest fleet.
          </p>
        </div>
        
        <div className="flex gap-2">
          <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all shadow-sm">
            <FaChevronLeft/>
          </button>
          <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-all shadow-sm">
            <FaChevronRight/>
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
              <SliderVehicleCard vehicle={v} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.max(0, vehiclesData.length - visibleCount + 1) }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === i ? 'w-8 bg-yellow-500' : 'w-2 bg-gray-200'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default SliderVehicle;