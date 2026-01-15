import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaGripHorizontal, FaCar, FaBus, FaMotorcycle,
  FaShuttleVan, FaTruck, FaCarSide, FaSpaceShuttle, FaCarAlt
} from "react-icons/fa";

const cats = [
  { icon: FaGripHorizontal, label: 'ALL' },
  { icon: FaCar, label: 'CAR' },
  { icon: FaBus, label: 'BUS' },
  { icon: FaMotorcycle, label: 'BIKE' },
  { icon: FaShuttleVan, label: 'VAN' },
  { icon: FaTruck, label: 'LORRY' },
  { icon: FaCarSide, label: 'CAB' },
  { icon: FaSpaceShuttle, label: 'THREE WHEEL' },
  { icon: FaCarAlt, label: 'WEDDING CAR' },
];

const Categories = ({ selectedCategory, onSelectCategory }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryClick = (label) => {
    onSelectCategory(label);

    if (location.pathname === '/') {
      navigate('/vehicle');
    }
  };

  return (
    <section className="py-10 md:py-16 px-6 bg-white border-b border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
            Browse by <span className="text-yellow-500">Category</span>
          </h2>
          <div className="w-12 h-1 bg-yellow-500 mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4">
          {cats.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                onClick={() => handleCategoryClick(cat.label)} 
                className={`rounded-2xl p-4 md:p-5 flex flex-col items-center justify-center group cursor-pointer transition-all duration-300 shadow-sm border ${
                  selectedCategory === cat.label
                    ? 'bg-yellow-500 border-yellow-600 ring-4 ring-yellow-100 scale-105 z-10'
                    : 'bg-gray-50 border-gray-100 hover:bg-white hover:border-yellow-200 hover:shadow-md'
                }`}
              >
                <div className="h-10 md:h-12 flex items-center justify-center mb-3">
                  <Icon
                    className={`text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110 ${
                      selectedCategory === cat.label ? 'text-white' : 'text-gray-600'
                    }`}
                  />
                </div>
                <p
                  className={`text-[9px] md:text-[10px] font-black py-1.5 px-3 rounded-full transition-all uppercase tracking-wider text-center w-full truncate ${
                    selectedCategory === cat.label ? 'bg-white text-black' : 'bg-[#111] text-white'
                  }`}
                >
                  {cat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;