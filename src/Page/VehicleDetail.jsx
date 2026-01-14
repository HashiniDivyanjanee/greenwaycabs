import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../../firebase'; // ඔබේ firebase configuration path එකට අනුව සකසන්න
import { doc, getDoc } from "firebase/firestore";

const VehicleDetail = () => {
  const { id } = useParams(); // URL එකේ ඇති ID එක ලබා ගනී
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const docRef = doc(db, 'vehicles', id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setVehicle({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such vehicle!");
        }
      } catch (error) {
        console.error("Error fetching vehicle:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchVehicle();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-yellow-500"></div>
    </div>
  );

  if (!vehicle) return <div className="text-center py-20">Vehicle not found!</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <button onClick={() => navigate(-1)} className="mb-8 text-gray-500 hover:text-black font-bold flex items-center gap-2">
        ← BACK TO FLEET
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Images */}
        <div className="bg-white p-6 rounded-3xl border border-gray-100">
          <img 
            src={vehicle.images?.[0] || vehicle.image} 
            alt={vehicle.name} 
            className="w-full h-auto object-contain rounded-2xl"
          />
          <div className="grid grid-cols-4 gap-4 mt-6">
            {vehicle.images?.map((img, index) => (
              <img key={index} src={img} className="h-20 w-full object-cover rounded-lg border border-gray-100" alt="gallery" />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col">
          <span className="text-yellow-500 font-black tracking-widest text-sm uppercase mb-2">{vehicle.category}</span>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-4">{vehicle.name}</h1>
          
          <div className="flex gap-4 mb-8">
             <div className="bg-gray-100 px-4 py-2 rounded-lg font-bold text-xs uppercase">4 Seats</div>
             <div className="bg-gray-100 px-4 py-2 rounded-lg font-bold text-xs uppercase">Automatic</div>
             <div className="bg-gray-100 px-4 py-2 rounded-lg font-bold text-xs uppercase">Petrol</div>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            {vehicle.description || "Experience luxury and comfort with our premium fleet. This vehicle is regularly maintained and comes with a professional driver for your safety."}
          </p>

          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
            <h3 className="font-bold mb-4 uppercase text-xs tracking-widest text-gray-400">Pricing per distance</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
               {Object.entries(vehicle.kmPrices || {}).map(([km, price]) => (
                 <div key={km} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div className="text-[10px] font-bold text-gray-400 uppercase">{km}</div>
                    <div className="text-xl font-black text-gray-900">Rs.{Number(price).toLocaleString()}</div>
                 </div>
               ))}
            </div>
          </div>

          <button className="w-full bg-yellow-500 text-black font-black py-6 rounded-2xl text-lg hover:bg-yellow-600 transition-all shadow-xl shadow-yellow-100 uppercase tracking-widest">
            Book via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetail;