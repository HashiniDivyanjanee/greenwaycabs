import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import Booking from "./Components/Booking";
import Category from "./Components/Categories";
import Vehicle from "./Page/VehicleBook";
import RentalProcess from "./Components/RentalProcess";
import Stats from "./Components/Status";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Contact from "./Page/Contact";
import Gallery from "./Page/Gallery";
import About from "./Page/About";
import SliderVehicle from "./Components/SliderVehicle";
import VehicleDetail from "./Page/VehicleDetail";
import TaxiBookingPopup from "./Components/TaxiBookingPopup";
import VehicleBookingPopup from "./Components/VehicleBookinPopup";
import Admin from "./Page/Admin";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isTaxiPopupOpen, setIsTaxiPopupOpen] = useState(false);
  const [isVehiclePopupOpen, setIsVehiclePopupOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const openTaxiPopup = () => setIsTaxiPopupOpen(true);
  const closeTaxiPopup = () => setIsTaxiPopupOpen(false);
  const openVehiclePopup = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsBookingOpen(true);
  };
  const closeVehiclePopup = () => setIsVehiclePopupOpen(false);

  const HomePage = () => (
    <>
      <HeroSlider />
      <Booking onTaxiBookingClick={openTaxiPopup} />
      <Category
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <AboutUs />
      <SliderVehicle />
      <RentalProcess />
      <Stats />
      <Testimonials />
      <div className="mt-10">
        <Booking onTaxiBookingClick={openTaxiPopup} />
      </div>
    </>
  );

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />

            <Route
              path="/vehicle"
              element={
                <Vehicle
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              }
            />

            <Route
              path="/vehicle/:id"
              element={
                <VehicleDetail onVehicleBookingClick={openVehiclePopup} />
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
        <TaxiBookingPopup isOpen={isTaxiPopupOpen} onClose={closeTaxiPopup} />
        <VehicleBookingPopup
          isOpen={isBookingOpen}
          onClose={() => setIsBookingOpen(false)}
          selectedVehicle={selectedVehicle}
        />
      </div>
    </Router>
  );
};

export default App;
