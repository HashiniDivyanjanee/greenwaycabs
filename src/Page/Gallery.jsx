
import React from 'react';
import PageBanner from '../Components/PageBanner';

const Gallery = () => {
const images = [
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
    'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
    'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7',
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d',
    'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2',
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_bagAX1gZ1hxzEs9CfzbqnbQHsOklCVRsQ&s',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKscL0p1kR_8JLxYDE4WQGxPrS20vuHEpEg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgzCXPeSdSOzxgKB0Gg7aBm2bFe13djaW1rQ&s',
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d',
  ];

  return (
    <div className="bg-white">
      <PageBanner 
        title="VISUAL JOURNEY" 
        subtitle="Gallery" 
        bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"
      />

      <section className="py-16 md:py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-yellow-500 font-black text-xs md:text-sm uppercase tracking-[0.3em] mb-4 block">Capturing Moments</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            OUR <span className="text-yellow-500">FLEET</span> IN FOCUS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">
            A glimpse into our diverse collection and the beautiful journeys we've been part of across the paradise island of Sri Lanka.
          </p>
        </div>
        
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
          {images.map((src, i) => (
            <div 
              key={i} 
              className="break-inside-avoid animate-in fade-in zoom-in duration-700 overflow-hidden rounded-2xl group shadow-sm hover:shadow-2xl transition-all" 
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <img 
                src={`${src}?auto=format&fit=crop&w=800&q=80`} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in" 
                alt={`Greenway Gallery ${i + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
