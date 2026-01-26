import React, { useState } from "react";
import { FaTimes, FaCloud } from "react-icons/fa";

const TaxiBookingPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    nic: "",
    pickup: "",
    dropoff: "",
    pickupdate: "",
    dropoffdate: "",
    pickuptime: "",
    dropofftime: "",
    category: "",
    vehicleModel: "",
    kmPackage: "1 Km",
    days: "",
    ref: "",
  });

  const formatTimeAMPM = (time) => {
    if (!time) return "N/A";
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  const vehicleData = {
    Cars: [
      "Honda Grace",
      "Toyota Prius",
      "Honda Fit",
      "Suzuki Alto",
      "Suzuki Wagon R",
      "Every",
      "Suzuki Maruti",
      "Micro Panda",
    ],
    Vans: [
      "Toyota KDH",
      "Nissan Clipper (Buddy Van)",
      "Suzuki Every",
      "Mazda Every",
    ],
    Bikes: ["Bajaj CT 100", "Honda ZR"],
    "Heavy Vehicles": ["Bus", "Dimo Battaramulla"],
    "Three Wheelers": ["Bajaj Three-wheeler"],
  };

  const handleCategoryChange = (e) => {
    const selectedCat = e.target.value;
    setFormData((prev) => ({
      ...prev,
      category: selectedCat,
      vehicleModel: vehicleData[selectedCat] ? vehicleData[selectedCat][0] : "",
    }));
  };

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedPickupTime = formatTimeAMPM(formData.pickuptime);
    const formattedDropoffTime = formatTimeAMPM(formData.dropofftime);

    const message = `
Taxi & Hire Me Request
--------------------------
Customer Name: ${formData.name}
Phone Number: ${formData.phone}
Whatsapp Number: ${formData.whatsapp}
NIC: ${formData.nic}
Pick Up Location: ${formData.pickup}
Drop Off Location: ${formData.dropoff}
Pick Up Date: ${formData.pickupdate}
Pick Up Time: ${formattedPickupTime}
Drop Off Date: ${formData.dropoffdate}
Drop Off Time: ${formattedDropoffTime}
Duration: ${formData.days} Days
KM Package: ${formData.kmPackage}
Vehicle Category: ${formData.category}
Vehicle Model: ${formData.vehicleModel}
Ref. Number: ${formData.ref || "N/A"}
--------------------------
Note: I am sending the deposit slip via the next message.
`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/94718928844?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 overflow-y-auto bg-black/60 backdrop-blur-sm transition-all">
      <div className="relative w-full max-w-2xl my-8 bg-white rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-yellow-500 hover:text-white rounded-full transition-all z-10"
        >
          <i className="fa-solid fa-xmark">
            <FaTimes />
          </i>
        </button>

        <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">
              Taxi & <span className="text-yellow-500">Hire me</span>
            </h2>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-2">
              Instant Booking Request
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Field: Customer Name */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                Customer Name
              </label>
              <input
                required
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                placeholder="Enter your full name"
              />
            </div>

            {/* Field Group: Phone & NIC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Phone Number
                </label>
                <input
                  required
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="tel"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                  placeholder="07X XXX XXXX"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Whatsapp Number
                </label>
                <input
                  required
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  type="tel"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                  placeholder="07X XXX XXXX"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                NIC
              </label>
              <input
                required
                name="nic"
                value={formData.nic}
                onChange={handleInputChange}
                type="text"
                className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                placeholder="ID Card Number"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                Pick Up
              </label>
              <input
                required
                name="pickup"
                value={formData.pickup}
                onChange={handleInputChange}
                type="text"
                className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                placeholder="Address"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Pick Up Date
                </label>
                <input
                  required
                  name="pickupdate"
                  value={formData.pickupdate}
                  onChange={handleInputChange}
                  type="date"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Pick Up Time
                </label>
                <input
                  required
                  name="pickuptime"
                  value={formData.pickuptime}
                  onChange={handleInputChange}
                  type="time"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                Drop Off
              </label>
              <input
                required
                name="dropoff"
                value={formData.dropoff}
                onChange={handleInputChange}
                type="text"
                className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                placeholder="Address"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Drop Off Date
                </label>
                <input
                  required
                  name="dropoffdate"
                  value={formData.dropoffdate}
                  onChange={handleInputChange}
                  type="date"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Drop Off Time
                </label>
                <input
                  required
                  name="dropofftime"
                  value={formData.dropofftime}
                  onChange={handleInputChange}
                  type="time"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-yellow-500 px-1">
                  Select Category
                </label>
                <select
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleCategoryChange}
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 text-sm cursor-pointer"
                >
                  <option value="">Choose Category</option>
                  {Object.keys(vehicleData).map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-yellow-500 px-1">
                  Select Model
                </label>
                <select
                  required
                  name="vehicleModel"
                  value={formData.vehicleModel}
                  onChange={handleInputChange}
                  disabled={!formData.category}
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 text-sm cursor-pointer disabled:opacity-50"
                >
                  <option value="">Choose Model</option>
                  {formData.category &&
                    vehicleData[formData.category].map((model) => (
                      <option key={model} value={model}>
                        {model}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Field Group: Days & Ref */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-yellow-500 px-1">
                  How many Days
                </label>
                <input
                  required
                  name="days"
                  value={formData.days}
                  onChange={handleInputChange}
                  type="number"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 text-sm"
                  placeholder="1"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Ref. Number (Bank Trassaction ID)
                </label>
                <input
                  name="ref"
                  value={formData.ref}
                  onChange={handleInputChange}
                  type="text"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                  placeholder="Optional reference"
                />
              </div>
            </div>

            {/* Deposit Note */}
            <div className="py-4 border-t border-b border-gray-100">
              <p className="text-[11px] font-bold text-gray-400 leading-relaxed text-center px-4">
                To book a vehicle you need to deposit{" "}
                <span className="text-gray-900 font-black">Rs.3000</span>. Then
                upload the slip this number 071 892 88 44.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3 max-w-sm mx-auto">
              <div className="bg-white p-3 rounded-xl border border-yellow-100 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-black text-yellow-600 uppercase">
                    Bank Name
                  </span>
                  <span className="text-xs font-bold text-gray-800">
                    Bank of Ceylon (BOC)
                  </span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-black text-yellow-600 uppercase">
                    Account Name
                  </span>
                  <span className="text-xs font-bold text-gray-800">
                    Greenway Travels & Cab Service
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-yellow-600 uppercase">
                    Account No
                  </span>
                  <span className="text-sm font-black text-black tracking-wider">
                    92841338
                  </span>
                </div>
                <div className="mt-1 text-right">
                  <span className="text-[9px] font-bold text-gray-400 uppercase italic">
                    Branch: Kaduruwela
                  </span>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="submit"
                className="bg-[#111] text-white font-black py-4 rounded-xl hover:bg-black transition-all active:scale-95 shadow-lg shadow-gray-200 uppercase tracking-widest text-[12px]"
              >
                Submit & WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaxiBookingPopup;
