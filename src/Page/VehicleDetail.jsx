
import React, { useState } from 'react';
import {
  FaGasPump,
  FaCloud,
  FaPhoneVolume,
  FaWhatsapp
} from "react-icons/fa";

const VehicleDetail = ({ vehicle }) => {
  const [selectedKm, setSelectedKm] = useState('1 Km');
  const kmPackages = ['1 Km', '2 Km', '3 Km', '4 Km', '5 Km', 'More'];

  const thumbnails = [
    vehicle.image,
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80',
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Page Header Area */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-gray-900 flex items-center gap-3">
            {vehicle.name}
          </h1>
          <div className="w-24 h-1.5 bg-yellow-500 mt-2 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left / Middle Content (8/12) */}
          <div className="lg:col-span-8">
            
            {/* Top Bar: Packages & Price */}
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
              {/* KM Packages */}
              <div className="flex flex-wrap gap-2">
                {kmPackages.map((pkg) => (
                  <button
                    key={pkg}
                    onClick={() => setSelectedKm(pkg)}
                    className={`px-6 py-3 rounded-xl font-bold text-xs md:text-sm transition-all border ${
                      selectedKm === pkg 
                        ? 'bg-yellow-500 border-yellow-600 text-black shadow-lg shadow-yellow-100' 
                        : 'bg-[#fdf3e7] border-[#f8e3cc] text-orange-400 hover:bg-yellow-50 hover:border-yellow-200'
                    }`}
                  >
                    <i className="fa-solid fa-gauge-simple-high mr-2 opacity-60"></i>
                    {pkg}
                  </button>
                ))}
              </div>

              {/* Price Box */}
              <div className="bg-gray-100 px-8 py-5 rounded-[2rem] text-center min-w-[200px] border border-gray-200 shadow-sm">
                <p className="text-3xl font-black text-gray-900 leading-none">
                  Rs.{vehicle.basePrice.toLocaleString()}
                </p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Per Day</p>
              </div>
            </div>

            {/* Visual Gallery Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
              {/* Main Image */}
              <div className="md:col-span-3 bg-gray-50 rounded-[2.5rem] overflow-hidden aspect-[4/4] flex items-center justify-center p-8 border border-gray-100 shadow-inner">
                <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-contain hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Thumbnails Sidebar */}
              <div className="flex flex-row md:flex-col gap-4">
                {thumbnails.map((img, i) => (
                  <div key={i} className="flex-1 bg-gray-50 rounded-3xl overflow-hidden aspect-square border border-gray-100 shadow-sm cursor-pointer group">
                    <img src={img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500 opacity-80 group-hover:opacity-100" />
                  </div>
                ))}
            
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-500 shadow-inner">
                    <i className="fa-solid fa-phone-volume text-2xl"><FaPhoneVolume/></i>
                 </div>
                 <div>
                    <h4 className="text-2xl font-black tracking-tight text-gray-900">076 25 25 225</h4>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Call and reserve your vehicle.</p>
                 </div>
              </div>
              <button className="bg-[#25D366] text-white font-black py-5 px-12 rounded-2xl hover:bg-[#128C7E] transition-all flex items-center gap-3 active:scale-95 shadow-lg shadow-green-100 uppercase tracking-widest text-sm w-full md:w-auto">
                <i className="fa-brands fa-whatsapp text-xl"><FaWhatsapp/></i>
                Whatsapp
              </button>
            </div>

          </div>

          {/* Right Content - Sidebar Booking Form (4/12) */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-[3rem] p-8 md:p-10 border border-gray-100 shadow-2xl sticky top-24">
              <h2 className="text-2xl md:text-3xl font-black text-center text-gray-900 mb-8 uppercase tracking-tighter">
                Book Your <span className="text-yellow-500">Vehicle</span>
              </h2>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                {/* Field: Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">Customer Name</label>
                  <input type="text" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" placeholder="Full Name" />
                </div>

                {/* Field Group: Phone & NIC */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">Phone Number</label>
                    <input type="tel" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" placeholder="07X XXX XXXX" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">NIC</label>
                    <input type="text" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" placeholder="NIC Number" />
                  </div>
                </div>

                {/* Field Group: Pick Up */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">Pick Up</label>
                    <input type="text" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" placeholder="Location" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">Pick Up Date / Time</label>
                    <input type="datetime-local" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" />
                  </div>
                </div>

                {/* Field Group: Drop Off */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">Drop Off</label>
                    <input type="text" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" placeholder="Location" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">Drop Off Date / Time</label>
                    <input type="datetime-local" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" />
                  </div>
                </div>

                {/* Field Group: Days & Ref */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">How many Days</label>
                    <input type="number" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" placeholder="0" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">Ref. Number</label>
                    <input type="text" className="w-full bg-white border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm" placeholder="Optional" />
                  </div>
                </div>

                {/* Deposit Note */}
                <div className="py-4">
                  <p className="text-[11px] font-bold text-gray-400 leading-relaxed text-center px-4">
                    To book a vehicle you need to deposit <span className="text-gray-900 font-black">Rs.3000</span>. Then upload the slip.
                  </p>
                </div>

                {/* File Upload Button */}
                <button className="w-full bg-gray-200 text-gray-600 font-black py-5 rounded-2xl hover:bg-gray-300 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-[11px]">
                  <i className="fa-solid fa-cloud-arrow-up text-lg"><FaCloud/></i>
                  Upload Image
                </button>

                {/* Submit Button */}
                <button className="w-full bg-[#111] text-white font-black py-6 rounded-2xl hover:bg-black transition-all active:scale-95 shadow-xl shadow-gray-200 uppercase tracking-widest text-sm mt-4">
                  Submit Request
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;
