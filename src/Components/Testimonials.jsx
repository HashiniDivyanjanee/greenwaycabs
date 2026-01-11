
import React from 'react';

const reviews = [
  { name: 'Amila Perera', role: 'Tourist', img: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Saman Kumara', role: 'Business Traveller', img: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Nimali Silva', role: 'Local Resident', img: 'https://i.pravatar.cc/150?u=3' },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-20 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Our <span className="text-yellow-500">Testimonials</span></h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-12 md:mb-16 text-xs md:text-sm">
        Don't just take our word for it. Here's what our customers have to say about their experience with Greenway.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-2xl relative transition-all hover:bg-white hover:shadow-xl">
            <div className="flex items-center gap-4 mb-5">
              <img src={rev.img} alt={rev.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-yellow-500 shadow-sm" />
              <div className="text-left">
                <h4 className="font-bold text-gray-900 text-sm md:text-base">{rev.name}</h4>
                <p className="text-[10px] md:text-xs text-gray-500">{rev.role}</p>
              </div>
            </div>
            <p className="text-xs md:text-sm text-gray-500 text-left mb-6 italic leading-relaxed">
              "Excellent service and well-maintained vehicles. The booking process was seamless and the driver was very professional."
            </p>
            <div className="flex gap-1 text-yellow-500 text-[10px]">
              {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
