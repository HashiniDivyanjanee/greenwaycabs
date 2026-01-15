import React, { useState } from "react";

const VehicleBookingPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    nic: "",
    category: "",
    vehicleModel: "",
    date: "",
    time: "",
    kmPackage: "1 Km",
    days: "",
    ref: "",
  });

  const vehicleData = {
    Cars: [
      "Honda Grace",
      "Toyota Prius",
      "Honda Fit",
      "Suzuki Alto",
      "Suzuki Wagon R",
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

    const message = `
Taxi & Hire Me Request
--------------------------
Customer Name: ${formData.name}
Phone Number: ${formData.phone}
NIC: ${formData.nic}
Pick Up Location: ${formData.pickup}
Time: ${formData.time}
Date: ${formData.date}
Duration: ${formData.days} Days
KM Package: ${formData.kmPackage}
Vehicle Model: ${formData.vehicleModel}
Ref. Number: ${formData.ref || "N/A"}
--------------------------
Note: I am sending the deposit slip via the next message.
`;
    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/94769070920?text=${encodedMessage}`;
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
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="p-8 md:p-10 max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tighter">
              Booking <span className="text-yellow-500">Vehicle</span>
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
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                Address
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
            </div>

            {/* Field Group: Pick Up */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Booking Date
                </label>
                <input
                  required
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  type="date"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Booking Time
                </label>
                <input
                  required
                  name="time"
                  value={formData.time}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-yellow-500 px-1">
                  Select KM Package
                </label>
                <select
                  name="kmPackage"
                  value={formData.kmPackage}
                  onChange={handleInputChange}
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 text-sm"
                >
                  <option value="1 Km">1 Km Package</option>
                  <option value="2 Km">2 Km Package</option>
                  <option value="3 Km">3 Km Package</option>
                  <option value="4 Km">4 Km Package</option>
                  <option value="5 Km">5 Km Package</option>
                  <option value="Unlimited">Unlimited KM</option>
                </select>
              </div>
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
            </div>

            {/* Field Group: Days & Ref */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Ref. Number
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
                upload the slip.
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
                    Your Company Name
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-yellow-600 uppercase">
                    Account No
                  </span>
                  <span className="text-sm font-black text-black tracking-wider">
                    1234567890
                  </span>
                </div>
                <div className="mt-1 text-right">
                  <span className="text-[9px] font-bold text-gray-400 uppercase italic">
                    Branch: Colombo
                  </span>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <label className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-black py-4 rounded-xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-[11px]">
                <i className="fa-solid fa-cloud-arrow-up text-lg"></i>
                Upload Image
                <input type="file" className="hidden" accept="image/*" />
              </label>
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

export default VehicleBookingPopup;
