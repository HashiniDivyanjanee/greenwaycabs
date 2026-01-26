import React, { useState, useEffect } from "react";
import { db, uploadImage } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc,
} from "firebase/firestore";

import {
  FaTrash, FaPen
} from "react-icons/fa";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("vehicles");
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [vehicles, setVehicles] = useState([]);

  const categories = ["CAR", "VAN", "BIKE", "LORRY", "BUS", "CAB", "THREE WHEEL", "WAGON R", "EVERY", "WEDDING CARS"];

  const [newVehicle, setNewVehicle] = useState({
    name: "",
    category: "CAR",

    images: [null, null, null, null],
    kmPrices: { "1 Km": "","100 Km": "", "200 Km": "","250 Km": "", "300 Km": "","350 Km": "", "400 Km": "", "500 Km": "","Unlimited Km": "", },
    available: true,
  });

  const [galleryImages, setGalleryImages] = useState([]);
  const [newGalleryImage, setNewGalleryImage] = useState(null);

  useEffect(() => {
    if (isAuthenticated) fetchData();
  }, [isAuthenticated]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const vSnap = await getDocs(
        query(collection(db, "vehicles"), orderBy("createdAt", "desc"))
      );
      setVehicles(vSnap.docs.map((d) => ({ id: d.id, ...d.data() })));

      const gSnap = await getDocs(
        query(collection(db, "gallery"), orderBy("createdAt", "desc"))
      );
      setGalleryImages(gSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddGalleryImage = async () => {
    if (!newGalleryImage) return alert("Please select an image");
    setLoading(true);
    try {
      const url = await uploadImage(newGalleryImage, "gallery");
      await addDoc(collection(db, "gallery"), {
        url,
        createdAt: new Date().toISOString(),
      });
      setNewGalleryImage(null);
      fetchData();
      alert("Gallery image uploaded!");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (index, file) => {
    const updatedImages = [...newVehicle.images];
    updatedImages[index] = file;
    setNewVehicle({ ...newVehicle, images: updatedImages });
  };

  const handleAddVehicle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const uploadPromises = newVehicle.images.map((img) =>
        img instanceof File ? uploadImage(img, "vehicles") : img
      );
      const imageUrls = await Promise.all(uploadPromises);

      const vehicleData = {
        ...newVehicle,
        images: imageUrls.filter((url) => url !== null),
        createdAt: new Date().toISOString(),
      };

      if (editingId) {
        await updateDoc(doc(db, "vehicles", editingId), vehicleData);
        alert("Vehicle updated!");
      } else {
        await addDoc(collection(db, "vehicles"), vehicleData);
        alert("Vehicle added!");
      }
      resetForm();
      fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setNewVehicle({
      name: "",
      category: "CAR",
      // seats: "",
      // fuelType: "",
      // transmission: "",
      images: [null, null, null, null],
      kmPrices: { "1 Km": "","100 Km": "", "200 Km": "","250 Km": "", "300 Km": "","350 Km": "", "400 Km": "", "500 Km": "","Unlimited Km": "", },
      available: true,
    });
    setEditingId(null);
  };

  const handleToggleStatus = async (id, currentStatus) => {
    await updateDoc(doc(db, "vehicles", id), { available: !currentStatus });
    fetchData();
  };

  const handleEdit = (v) => {
    setEditingId(v.id);
    setNewVehicle({
      name: v.name,
      category: v.category || "CAR",
      // seats: v.seats || "",
      // fuelType: v.fuelType || "",
      // transmission: v.transmission || "",
      images: v.images || [null, null, null, null],
      kmPrices: v.kmPrices || {
        "1 Km": "",
        "100 Km": "",
        "200 Km": "",
        "250 Km": "",
        "300 Km": "",
        "350 Km": "",
        "400 Km": "",
        "500 Km": "",
        "Unlimited Km": "",
      },
      available: v.available ?? true,
    });
    setActiveTab("vehicles");
  };

  const handleDelete = async (coll, id) => {
    if (window.confirm("Are you sure?")) {
      await deleteDoc(doc(db, coll, id));
      fetchData();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (password === "admin123") setIsAuthenticated(true);
            else alert("Wrong password");
          }}
          className="bg-white p-10 rounded-[2.5rem] shadow-2xl w-full max-w-md"
        >
          <h2 className="text-3xl font-black text-center mb-8 uppercase tracking-tighter">
            Admin <span className="text-yellow-500">Access</span>
          </h2>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-gray-50 rounded-2xl mb-6 outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-black text-white font-black py-4 rounded-2xl uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black uppercase tracking-tighter">
            Admin <span className="text-yellow-500">Dashboard</span>
          </h1>
          <div className="flex bg-white p-2 rounded-2xl shadow-sm">
            <button
              onClick={() => setActiveTab("vehicles")}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase ${
                activeTab === "vehicles" ? "bg-yellow-500" : "text-gray-400"
              }`}
            >
              Vehicles
            </button>
            <button
              onClick={() => setActiveTab("gallery")}
              className={`px-6 py-2 rounded-xl text-xs font-black uppercase ${
                activeTab === "gallery" ? "bg-yellow-500" : "text-gray-400"
              }`}
            >
              Gallery
            </button>
          </div>
        </div>

        {activeTab === "vehicles" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* --- ADD/EDIT FORM --- */}
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
              <h3 className="text-xl font-black mb-6 uppercase">
                {editingId ? "Edit Vehicle" : "Add Vehicle"}
              </h3>
              <form onSubmit={handleAddVehicle} className="space-y-4">
                <input
                  required
                  placeholder="Vehicle Name"
                  className="w-full p-4 bg-gray-50 rounded-xl"
                  value={newVehicle.name}
                  onChange={(e) =>
                    setNewVehicle({ ...newVehicle, name: e.target.value })
                  }
                />

                {/* CATEGORY DROPDOWN */}
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                    Vehicle Category
                  </label>
                  <select
                    className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 font-bold text-sm"
                    value={newVehicle.category}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, category: e.target.value })
                    }
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {Object.keys(newVehicle.kmPrices).map((pkg) => (
                    <input
                      key={pkg}
                      type="number"
                      placeholder={`${pkg} Price`}
                      className="p-3 bg-gray-50 rounded-xl text-sm"
                      value={newVehicle.kmPrices[pkg]}
                      onChange={(e) =>
                        setNewVehicle({
                          ...newVehicle,
                          kmPrices: {
                            ...newVehicle.kmPrices,
                            [pkg]: e.target.value,
                          },
                        })
                      }
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[0, 1, 2, 3].map((i) => (
                    <div key={i} className="text-[10px] font-bold">
                      <label>IMAGE {i + 1}</label>
                      <input
                        type="file"
                        className="w-full mt-1 text-[8px]"
                        onChange={(e) =>
                          handleImageChange(i, e.target.files[0])
                        }
                      />
                    </div>
                  ))}
                </div>
                <button
                  disabled={loading}
                  className="w-full bg-yellow-500 text-black font-black py-4 rounded-xl uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                >
                  {loading
                    ? "Processing..."
                    : editingId
                    ? "Update Vehicle"
                    : "Add to Fleet"}
                </button>
                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="w-full text-[10px] font-black uppercase text-gray-400"
                  >
                    Cancel Edit
                  </button>
                )}
              </form>
            </div>

            {/* --- LIST SECTION --- */}
            <div className="lg:col-span-2 space-y-4">
              {vehicles.map((v) => (
                <div
                  key={v.id}
                  className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={v.images?.[0] || v.image}
                      className="w-20 h-14 object-cover rounded-xl"
                      alt=""
                    />
                    <div>
                      <h4 className="font-black text-sm uppercase">{v.name}</h4>
                      <div className="flex gap-2 items-center mt-1">
                        <span className="text-[9px] bg-gray-100 px-2 py-0.5 rounded font-bold text-gray-500">
                          {v.category}
                        </span>
                        <button
                          onClick={() => handleToggleStatus(v.id, v.available)}
                          className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${
                            v.available
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                          }`}
                        >
                          {v.available ? "Available" : "Booked"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(v)}
                      className="text-blue-500 p-2"
                    >
                      <i className="fa-solid fa-pen"><FaPen/></i>
                    </button>
                    <button
                      onClick={() => handleDelete("vehicles", v.id)}
                      className="text-red-500 p-2"
                    >
                      <i className="fa-solid fa-trash-can"><FaTrash/></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "gallery" && (
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
            <h3 className="text-xl font-black mb-4 uppercase">
              Manage Gallery
            </h3>
            <div className="flex gap-4 mb-6">
              <input
                type="file"
                onChange={(e) => setNewGalleryImage(e.target.files[0])}
                className="flex-1 p-2 bg-gray-100 rounded-xl"
              />
              <button
                onClick={handleAddGalleryImage}
                disabled={loading}
                className="bg-black text-white px-6 rounded-xl font-bold"
              >
                {loading ? "..." : "UPLOAD"}
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {galleryImages.map((img) => (
                <div key={img.id} className="relative group aspect-square">
                  <img
                    src={img.url}
                    className="w-full h-full object-cover rounded-xl"
                    alt=""
                  />
                  <button
                    onClick={() => handleDelete("gallery", img.id)}
                    className="absolute inset-0 bg-red-500/80 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-all"
                  >
                    <i className="fa-solid fa-trash text-xl"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
