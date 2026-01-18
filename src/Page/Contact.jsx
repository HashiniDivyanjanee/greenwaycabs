import React, { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { FaPhoneVolume, FaLocationArrow } from "react-icons/fa";
import AppInstall from "../Components/AppInstall";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "94753563009";

    const message = `*Contact Form Inquiry*%0A
    *Name:* ${formData.fullName}%0A
    *Email:* ${formData.email}%0A
    *Subject:* ${formData.subject}%0A
    *Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white">
      <PageBanner
        title="LET'S CONNECT"
        subtitle="Contact Us"
        bgImage="/icon/assets/hero/hero3.avif"
      />

      <div className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block">
              Reach Out
            </span>
            <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-tight">
              SEND US A <span className="text-yellow-500">MESSAGE</span>
            </h2>
            <form className="space-y-6" onSubmit={handleWhatsApp}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-yellow-400 w-full transition-all text-sm shadow-inner"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-yellow-400 w-full transition-all text-sm shadow-inner"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Booking Inquiry"
                  className="bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-yellow-400 w-full transition-all text-sm shadow-inner"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your travel plans..."
                  rows={5}
                  className="bg-gray-50 border-none p-5 rounded-2xl focus:ring-2 focus:ring-yellow-400 w-full resize-none transition-all text-sm shadow-inner"
                ></textarea>
              </div>
              <button type="submit" className="bg-yellow-500 text-black font-black py-5 px-12 rounded-2xl hover:bg-yellow-600 transition-all active:scale-95 shadow-xl shadow-yellow-100 w-full sm:w-auto uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl md:text-2xl font-black mb-8 uppercase tracking-tighter">
                OFFICE <span className="text-yellow-500">INFO</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                <div className="flex gap-6 items-start group">
                  <div className="shrink-0 w-14 h-14 bg-yellow-50 flex items-center justify-center rounded-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-location-dot text-xl">
                      <FaLocationArrow />
                    </i>
                  </div>
                  <div>
                    <h5 className="font-black text-xs md:text-sm uppercase tracking-widest mb-1">
                      Our Location
                    </h5>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                      2nd Canal Road,
                      <br />
                      Kaduruwela, Polonnaruwa
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-start group">
                  <div className="shrink-0 w-14 h-14 bg-yellow-50 flex items-center justify-center rounded-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                    <i className="fa-solid fa-phone-volume text-xl">
                      <FaPhoneVolume />
                    </i>
                  </div>
                  <div>
                    <h5 className="font-black text-xs md:text-sm uppercase tracking-widest mb-1">
                      Phone Numbers
                    </h5>
                    <p className="text-gray-500 text-sm md:text-base">
                      +94 77 576 3009
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                      +94 75 356 3009
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                      +94 71 892 8844
                    </p>
                    <p className="text-gray-500 text-sm md:text-base">
                      +94 27 436 6104
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] overflow-hidden h-80  contrast-125 border-4 border-gray-50 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.7305541980672!2d81.0247235744896!3d7.923187205318512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb454e2553b3ab%3A0x56d5ac8445086cd!2sGreenway%20Rent%20A%20Car%20-%20Polonnaruwa!5e0!3m2!1sen!2slk!4v1768421821683!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <AppInstall />
    </div>
  );
};
export default Contact;
