import React, { useState } from "react";

const TaxiBookingPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    nic: "",
    pickup: "",
    pickupDateTime: "",
    dropoff: "",
    dropoffDateTime: "",
    days: "",
    ref: "",
  });

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
Pick Up Date/Time: ${formData.pickupDateTime}
Drop Off Location: ${formData.dropoff}
Drop Off Date/Time: ${formData.dropoffDateTime}
Duration: ${formData.days} Days
Ref. Number: ${formData.ref || "N/A"}
--------------------------
Note: I am sending the deposit slip via the next message.
`;
 const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/94769070920?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');

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
              Taxi & <span className="text-yellow-500">Hire Me</span>
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
                  Pick Up
                </label>
                <input
                  required
                  name="pickup"
                  value={formData.pickup}
                  onChange={handleInputChange}
                  type="text"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                  placeholder="Pick-up location"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Pick Up Date / Time
                </label>
                <input
                  required
                  name="pickupDateTime"
                  value={formData.pickupDateTime}
                  onChange={handleInputChange}
                  type="datetime-local"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                />
              </div>
            </div>

            {/* Field Group: Drop Off */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  placeholder="Destination location"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  Drop Off Date / Time
                </label>
                <input
                  required
                  name="dropoffDateTime"
                  value={formData.dropoffDateTime}
                  onChange={handleInputChange}
                  type="datetime-local"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                />
              </div>
            </div>

            {/* Field Group: Days & Ref */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-[0.15em] text-yellow-500 px-1">
                  How many Days
                </label>
                <input
                  required
                  name="days"
                  value={formData.days}
                  onChange={handleInputChange}
                  type="number"
                  className="w-full bg-gray-50 border-none p-4 rounded-xl focus:ring-2 focus:ring-yellow-400 shadow-inner text-sm"
                  placeholder="1"
                />
              </div>
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

export default TaxiBookingPopup;
