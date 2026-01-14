import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom"; // මෙය අලුතින් එක් කරන ලදී

/* -------------------- CARD COMPONENT -------------------- */
const VehicleBookCard = ({ vehicle, onSelect }) => {
  const displayImage = vehicle.images && vehicle.images.length > 0 
    ? vehicle.images[0] 
    : (vehicle.image || 'https://via.placeholder.com/400x300?text=No+Image');

  const [selectedKm, setSelectedKm] = useState('1 Km');
  const kmOptions = ['1 Km', '2 Km', '3 Km', '4 Km', '5 Km'];

  const getDisplayPrice = () => {
    if (vehicle.kmPrices && vehicle.kmPrices[selectedKm]) {
      return Number(vehicle.kmPrices[selectedKm]).toLocaleString();
    }
    return Number(vehicle.basePrice || 0).toLocaleString();
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-2xl group">
      <div className="p-8 flex items-center justify-center bg-white h-56 md:h-72 overflow-hidden relative">
        <div className="absolute top-4 left-4 bg-gray-50 rounded-full px-3 py-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest border">
          {vehicle.category}
        </div>
        <img src={displayImage} alt={vehicle.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110" />
      </div>

      <div className="px-8 py-4 flex justify-between items-center bg-gray-50/50">
        <h3 className="text-xl font-bold text-gray-900 truncate">{vehicle.name}</h3>
        <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${vehicle.available !== false ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'}`}>
          {vehicle.available !== false ? 'Available' : 'Booked'}
        </span>
      </div>

      <div className="px-8 py-6 flex flex-wrap gap-2 justify-center">
        {kmOptions.map((km) => (
          <button
            key={km}
            onClick={(e) => { e.stopPropagation(); setSelectedKm(km); }}
            className={`px-3 py-2 rounded-full border text-[10px] font-black transition-all ${selectedKm === km ? 'bg-[#fef3e7] border-[#f8e3cc] text-[#e67e22]' : 'bg-white border-gray-100 text-gray-400'}`}
          >
            {km}
          </button>
        ))}
      </div>

      <div className="px-8 pb-8 text-right mt-auto">
        <p className="text-yellow-500 font-black text-2xl md:text-3xl">
          Rs.{getDisplayPrice()} <span className="text-xs font-bold text-gray-400 uppercase">/ {selectedKm}</span>
        </p>
      </div>

      <button 
        onClick={() => onSelect(vehicle.id)} // ID එක පමණක් යවමු
        className="w-full bg-[#111] text-white font-black py-6 hover:bg-black transition-all uppercase tracking-widest"
      >
        Reserve This Ride
      </button>
    </div>
  );
};

/* -------------------- MAIN COMPONENT -------------------- */
const FeaturedVehicles = ({ selectedCategory = 'ALL', viewMode = 'grid' }) => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Navigation සඳහා

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const snap = await getDocs(query(collection(db, 'vehicles'), orderBy('createdAt', 'desc')));
        setVehiclesData(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      } catch (err) { console.error(err); } finally { setLoading(false); }
    };
    fetchVehicles();
  }, []);

  const handleSelectVehicle = (id) => {
    navigate(`/vehicle/${id}`); // /vehicle/ID-HERE ලෙස navigate වේ
  };

  const filteredVehicles = useMemo(() => {
    return vehiclesData.filter(v => selectedCategory === 'ALL' || v.category === selectedCategory);
  }, [selectedCategory, vehiclesData]);

  if (loading) return <div className="py-20 text-center">Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
      {filteredVehicles.map((v) => (
        <VehicleBookCard key={v.id} vehicle={v} onSelect={handleSelectVehicle} />
      ))}
    </div>
  );
};

export default FeaturedVehicles;