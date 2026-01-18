import React, { useState, useMemo, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

/* -------------------- CARD COMPONENT -------------------- */
const VehicleBookCard = ({ vehicle, onSelect }) => {
  const displayImage =
    vehicle.images && vehicle.images.length > 0
      ? vehicle.images[0]
      : vehicle.image || "https://via.placeholder.com/400x300?text=No+Image";

  const category = vehicle.category ? vehicle.category.toLowerCase() : "";
  const isBusOrVan = category === "bus" || category === "van";
  const isBike = category === "bike";

  const kmOptions = isBike
    ? ["Unlimited"]
    : isBusOrVan
    ? ["1 Km"]
    : ["100 Km", "200 Km", "250 Km", "300 Km", "350 Km", "400 Km", "550 Km"];

  const [selectedKm, setSelectedKm] = useState(
    isBike ? "Unlimited" : isBusOrVan ? "1 Km" : "100 Km"
  );

  useEffect(() => {
    setSelectedKm(isBike ? "Unlimited" : isBusOrVan ? "1 Km" : "100 Km");
  }, [category, isBusOrVan, isBike]);

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
        <img
          src={displayImage}
          alt={vehicle.name}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="px-8 py-4 flex justify-between items-center bg-gray-50/50">
        <h3 className="text-xl font-bold text-gray-900 truncate">
          {vehicle.name}
        </h3>
        <span
          className={`text-[10px] font-black uppercase px-2 py-1 rounded-md ${
            vehicle.available !== false
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {vehicle.available !== false ? "Available" : "Booked"}
        </span>
      </div>

      <div className="px-8 py-6 flex flex-wrap gap-2 justify-center">
        {kmOptions.map((km) => (
          <button
            key={km}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedKm(km);
            }}
            className={`px-3 py-2 rounded-full border text-[10px] font-black transition-all ${
              selectedKm === km
                ? "bg-[#fef3e7] border-[#f8e3cc] text-[#e67e22]"
                : "bg-white border-gray-100 text-gray-400"
            }`}
          >
            {km}
          </button>
        ))}
      </div>

      <div className="px-8 pb-8 text-right mt-auto">
        <p className="text-yellow-500 font-black text-2xl md:text-3xl">
          Rs.{getDisplayPrice()}{" "}
          <span className="text-xs font-bold text-gray-400 uppercase"></span>
        </p>
      </div>

      <button
        onClick={() => onSelect(vehicle.id)}
        className="w-full bg-[#111] text-white font-black py-6 hover:bg-black transition-all uppercase tracking-widest"
      >
        Book Now
      </button>
    </div>
  );
};

/* -------------------- MAIN COMPONENT -------------------- */
const FeaturedVehicles = ({ selectedCategory = "ALL" }) => {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const snap = await getDocs(
          query(collection(db, "vehicles"), orderBy("createdAt", "desc"))
        );
        setVehiclesData(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchVehicles();
  }, []);

  const handleSelectVehicle = (id) => {
    navigate(`/vehicle/${id}`);
  };

const filteredVehicles = useMemo(() => {
    return vehiclesData.filter(v => {
      const matchesCategory = selectedCategory === 'ALL' || v.category === selectedCategory;
      const matchesSearch = v.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, vehiclesData, searchTerm]);

  if (loading)
    return (
      <div className="py-20 text-center font-bold text-gray-500">
        Loading Fleet...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Search Bar Section */}
      <div className="mb-12 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search your favorite vehicle..."
            className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-yellow-100 focus:bg-white transition-all font-medium text-gray-700 shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300 text-lg" />
        </div>
      </div>

      {/* Vehicles Grid */}
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredVehicles.map((v) => (
            <VehicleBookCard
              key={v.id}
              vehicle={v}
              onSelect={handleSelectVehicle}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-gray-400 font-bold text-lg">
            No vehicles found matching "{searchTerm}"
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="mt-4 text-yellow-600 font-black uppercase text-xs hover:underline"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default FeaturedVehicles;
