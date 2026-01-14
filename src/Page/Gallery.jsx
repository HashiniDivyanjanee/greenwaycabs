
import React, { useState, useEffect } from 'react';
import PageBanner from '../Components/PageBanner';
import { db } from '../../firebase';
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const snap = await getDocs(query(collection(db, 'gallery'), orderBy('createdAt', 'desc')));
        setImages(snap.docs.map(d => d.data().url));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

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
        
        {loading ? (
          <div className="py-20 text-center"><i className="fa-solid fa-circle-notch fa-spin text-4xl text-yellow-500"></i></div>
        ) : (
          <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
            {images.map((src, i) => (
              <div 
                key={i} 
                className="break-inside-avoid animate-in fade-in zoom-in duration-700 overflow-hidden rounded-2xl group shadow-sm hover:shadow-2xl transition-all" 
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <img 
                  src={src} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in" 
                  alt={`Greenway Gallery ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
