import React from 'react'
import { FaCar, FaBus, FaMotorcycle,FaShuttleVan, FaTruck, FaCarSide, FaSpaceShuttle, FaCarAlt } from "react-icons/fa";

const cats = [
  { icon: FaCar, label: 'CAR' },
  { icon: FaBus, label: 'BUS' },
  { icon: FaMotorcycle, label: 'BIKE' },
  { icon: FaShuttleVan, label: 'VAN' },
  { icon: FaTruck, label: 'LORRY' },
  { icon: FaCarSide, label: 'CAB' },
  { icon: FaSpaceShuttle, label: 'THREE WHEEL' },
  { icon: FaCarAlt, label: 'WEDDING CAR' },
];

const Categories = () => {
  return (
    <section className='py-12 md:py-16 px-6 text-center'>
      <h2 className='text-2xl md:text-3xl font-bold mb-2'>
        Our <span className='text-yellow-500'>Categories</span>
      </h2>

      <p className='text-gray-500 max-w-2xl mx-auto mb-8 md:mb-10 text-xs md:text-sm'>
        Explore our wide range of vehicles curated for every need.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4 max-w-6xl mx-auto">
        {cats.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-3 md:p-4 group cursor-pointer hover:bg-yellow-500 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="h-10 md:h-12 flex items-center justify-center mb-2 md:mb-3">
                <Icon className="text-2xl md:text-3xl text-black group-hover:text-white transition-colors" />
              </div>

              <p className="text-[9px] md:text-[10px] font-black bg-black text-white py-1 px-1 rounded group-hover:bg-white group-hover:text-black transition-colors truncate">
                {cat.label}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Categories