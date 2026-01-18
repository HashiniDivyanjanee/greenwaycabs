import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const slides = [
  {
    image:
      "/icon/assets/hero/hero1.avif",
    tag: "Premium Travel Service",
    title:
      'JOURNEY BEYOND <br/><span class="text-yellow-500">BOUNDARIES</span>',
    desc: "Experience the ultimate luxury travel across Sri Lanka with Greenway. Reliable, safe, and tailored for you.",
    accent: "fa-location-dot",
  },
  {
    image:
      "/icon/assets/hero/hero2.avif",
    tag: "Available 24/7",
    title: 'DRIVE YOUR <br/><span class="text-yellow-500">DREAMS</span>',
    desc: "From airport drops to wedding cars, find the perfect ride for every occasion in our massive fleet.",
    accent: "fa-car",
  },
  {
    image:
      "/icon/assets/hero/hero3.avif",
    tag: "Trusted by Thousands",
    title: 'EXPLORE THE <br/><span class="text-yellow-500">PARADISE</span>',
    desc: "Professional drivers and new vehicles ensure a comfortable journey to every corner of the island.",
    accent: "fa-map-location-dot",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-110 pointer-events-none"
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear ${
              idx === current ? "scale-110" : "scale-100"
            }`}
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%), url(${slide.image})`,
            }}
          />

          {/* Content Container */}
          <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
            <div className="max-w-3xl">
              {/* Tagline */}
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-1000 delay-300 transform ${
                  idx === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="w-10 h-[2px] bg-yellow-500"></div>
                <span className="text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.4em]">
                  {slide.tag}
                </span>
              </div>

              {/* Title */}
              <h1
                className={`text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 transition-all duration-1000 delay-500 transform ${
                  idx === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />

              {/* Description */}
              <p
                className={`text-gray-300 text-base md:text-xl max-w-lg mb-12 font-medium leading-relaxed transition-all duration-1000 delay-700 transform ${
                  idx === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                {slide.desc}
              </p>

              {/* Buttons */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-1000 delay-900 transform ${
                  idx === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <button
                  onClick={() => navigate("/vehicle")}
                  className="bg-yellow-500 text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-all shadow-2xl shadow-yellow-500/20 active:scale-95 flex items-center gap-3 group"
                >
                  Book Your Ride
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
                <button
                  onClick={() => navigate("/gallery")}
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white/20 transition-all active:scale-95"
                >
                  View Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Floating Info Badge - Glassmorphism */}
      {/* <div className="absolute bottom-12 right-6 md:right-12 z-20 hidden sm:block animate-float">
        <div className="glass p-6 md:p-8 rounded-[2.5rem] flex items-center gap-6 shadow-2xl">
          <div className="flex -space-x-4">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`https://i.pravatar.cc/150?u=${i + 20}`}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white object-cover"
                alt="User"
              />
            ))}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white bg-yellow-500 flex items-center justify-center text-black font-black text-[10px]">
              +1k
            </div>
          </div>
          <div className="pr-4">
            <div className="flex items-center gap-1 text-yellow-500 text-[10px] mb-1">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
            <p className="text-xl md:text-2xl font-black text-gray-900 leading-none">
              1,500+
            </p>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">
              Happy Clients
            </p>
          </div>
        </div>
      </div> */}

      {/* Slide Navigation Progress Bars */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex flex-col gap-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="group flex items-center gap-4 text-left"
          >
            <span
              className={`text-[10px] font-black transition-colors ${
                idx === current
                  ? "text-yellow-500"
                  : "text-white/40 group-hover:text-white"
              }`}
            >
              0{idx + 1}
            </span>
            <div className="relative w-12 md:w-20 h-[2px] bg-white/20 rounded-full overflow-hidden">
              <div
                className={`absolute top-0 left-0 h-full bg-yellow-500 transition-all duration-[7000ms] linear ${
                  idx === current ? "w-full" : "w-0"
                }`}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[8px] text-white font-black uppercase tracking-[0.3em]">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent"></div>
      </div>

      {/* Overlay Text Glow Effect */}
      <div className="absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-transparent to-black/20"></div>
    </div>
  );
};

export default HeroSlider;
