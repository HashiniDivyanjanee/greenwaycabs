
import React, { useState, useEffect, useCallback } from 'react';

const reviews = [
  { 
    name: 'Amila Perera', 
    role: 'Tourist', 
    img: 'https://i.pravatar.cc/150?u=1',
    text: "Excellent service and well-maintained vehicles. The booking process was seamless and the driver was very professional. Highly recommended for anyone visiting Sri Lanka."
  },
  { 
    name: 'Saman Kumara', 
    role: 'Business Traveller', 
    img: 'https://i.pravatar.cc/150?u=2',
    text: "I use Greenway for all my business trips in Polonnaruwa. They are always on time, and the cars are spotless. Their customer support is top-notch."
  },
  { 
    name: 'Nimali Silva', 
    role: 'Local Resident', 
    img: 'https://i.pravatar.cc/150?u=3',
    text: "The best cab service in the area. Very affordable prices and reliable drivers. I feel safe traveling with them even late at night."
  },
  { 
    name: 'John Doe', 
    role: 'Expat', 
    img: 'https://i.pravatar.cc/150?u=4',
    text: "Amazing experience! We booked a van for a family trip and it was extremely comfortable. The driver knew all the best scenic routes."
  },
  { 
    name: 'Priya Raj', 
    role: 'Solo Traveller', 
    img: 'https://i.pravatar.cc/150?u=5',
    text: "As a solo female traveller, safety is my priority. Greenway exceeded my expectations. Professional, polite, and very punctual."
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      const maxIndex = reviews.length - visibleCount;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, [visibleCount]);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section className="py-16 md:py-20 px-6 text-center overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl items-center font-black mb-2 uppercase">Our <span className="text-yellow-500">Testimonials</span></h2>
       <p className="text-gray-500 max-w-2xl mx-auto mb-12 md:mb-16 text-xs md:text-sm leading-relaxed">
          Don't just take our word for it. Here's what our customers have to say about their experience with Greenway.
        </p>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {reviews.map((rev, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 px-3 md:px-4"
                style={{ width: `${100 / visibleCount}%` }}
              >
                <div className="bg-gray-50 p-6 md:p-8 rounded-3xl relative h-full flex flex-col transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-yellow-100">
                  <div className="flex items-center gap-4 mb-5">
                    <img 
                      src={rev.img} 
                      alt={rev.name} 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-yellow-500 shadow-sm object-cover" 
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{rev.name}</h4>
                      <p className="text-[10px] md:text-xs text-gray-500">{rev.role}</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-500 text-left mb-6 italic leading-relaxed flex-grow">
                    "{rev.text}"
                  </p>
                  <div className="flex gap-1 text-yellow-500 text-[10px]">
                    {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: Math.max(0, reviews.length - visibleCount + 1) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? 'w-8 bg-yellow-500' : 'w-2 bg-gray-300 hover:bg-yellow-200'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
