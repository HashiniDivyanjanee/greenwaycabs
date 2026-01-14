import React, { useState } from "react";
// react-router-dom අවශ්‍ය කොටස් import කරගන්න
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

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
import Admin from "./Page/Admin";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [isTaxiPopupOpen, setIsTaxiPopupOpen] = useState(false);

  const openTaxiPopup = () => setIsTaxiPopupOpen(true);
  const closeTaxiPopup = () => setIsTaxiPopupOpen(false);

  // Home Page එක සඳහා වෙනම Component එකක් ලෙස සකසා ගැනීම පිරිසිදුයි
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
    // මුළු App එකම Router එකකින් වට කිරීම අනිවාර්යයි
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <NavBar />
        
        <main className="flex-grow">
          <Routes>
            {/* ප්‍රධාන පිටු සඳහා පාරවල් (Routes) සැකසීම */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            
            {/* වාහන ලැයිස්තු පිටුව */}
            <Route path="/vehicle" element={
              <Vehicle 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
              />
            } />

            {/* වාහන විස්තර පිටුව (Slider එකෙන් මෙතනට navigate කරයි) */}
            <Route path="/vehicle/:id" element={<VehicleDetail />} />
            
            {/* වැරදි URL එකක් ගැහුවොත් Home එකට යවන්න */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
        <TaxiBookingPopup isOpen={isTaxiPopupOpen} onClose={closeTaxiPopup} />
      </div>
    </Router>
  );
};

export default App;