import React from 'react';
import { FaCar, FaMeteor, FaMedal, FaHandsHelping,  } from "react-icons/fa";

const Stats = () => {
  const stats = [
    { icon: FaCar, count: '500+', label: 'Vehicle Fleet' },
    { icon: FaMeteor, count: '10K+', label: 'Miles Driven' },
    { icon: FaMedal, count: '1500+', label: 'Happy Clients' },
    { icon: FaHandsHelping, count: '24/7', label: 'Support' },
  ];

  return (
    <div className="bg-[#1a1a1a] py-12 md:py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="flex flex-col items-center">
              <div className="h-14 md:h-20 w-14 md:w-20 flex items-center justify-center mb-2 md:mb-4">
                <Icon className="text-3xl md:text-5xl text-yellow-500" />
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-1">
                {stat.count}
              </h3>

              <p className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
