import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
import FeaturedVehiclesBook from "./Components/FeaturedVehicles";
import SliderVehicle from "./Components/SliderVehicle";
import VehicleDetail from "./Page/VehicleDetail";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeVehicle, setActiveVehicle] = useState(null);
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      if (!hash.startsWith("vehicle/")) {
        // setActiveVehicle(null); // Optional: keep state or clear it
      }
      setCurrentPage(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page) => {
    window.location.hash = page;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (currentPage !== "vehicle") {
      navigateTo("vehicle");
    }
  };

  const handleVehicleSelect = (vehicle) => {
    setActiveVehicle(vehicle);
    navigateTo(`vehicle-detail`);
  };

  const renderContent = () => {
    if (currentPage === "vehicle-detail" && activeVehicle) {
      return <VehicleDetail vehicle={activeVehicle} />;
    }

    switch (currentPage) {
      case "about":
        return <About />;
      case "vehicle":
        return (
          <Vehicle
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
            onSelectVehicle={handleVehicleSelect}
          />
        );
      case "gallery":
        return <Gallery />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return (
          <>
            <HeroSlider />
            <Booking />
            <Category
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
            <AboutUs />
            <SliderVehicle />
            <RentalProcess />
            <Stats />
            <Testimonials />
            <div className="mt-10">
              <Booking />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-grow">{renderContent()}</main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
