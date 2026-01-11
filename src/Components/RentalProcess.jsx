import React from "react";
import { FaCar, FaIdCard, FaCrosshairs, FaSmile } from "react-icons/fa";

const steps = [
  { id: "01", title: "Choose a Car", icon: FaCar },
  { id: "02", title: "Contact Us", icon: FaIdCard },
  { id: "03", title: "Pick-Up", icon: FaCrosshairs },
  { id: "04", title: "Enjoy Trip", icon: FaSmile },
];

const RentalProcess = () => {
  return (
    <section className="py-16 md:py-20 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        How it <span className="text-yellow-500">Works</span>
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-10 md:mb-12 text-xs md:text-sm">
        Renting a vehicle has never been easier. Just follow these four simple
        steps to get on the road.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="bg-gray-50 p-6 md:p-8 rounded-2xl relative group hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-yellow-100"
            >
              <div className="flex justify-between items-start mb-6">
                {/* ✅ Icon */}
                <Icon className="text-3xl md:text-4xl text-yellow-500" />

                <span className="text-3xl md:text-4xl font-bold text-gray-200 group-hover:text-yellow-100 transition-colors">
                  {step.id}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 text-left">
                {step.title}
              </h3>

              <p className="text-xs text-gray-400 text-left leading-relaxed">
                Quick and easy process to get your preferred vehicle booked and
                ready for your journey.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RentalProcess;
