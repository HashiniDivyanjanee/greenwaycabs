import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/Navbar";
import HeroSlider from "./Components/HeroSlider";
import Booking from "./Components/Booking";
import Categories from "./Components/Categories";
import Vehicle from "./Components/Vehicle";
import RentalProcess from "./Components/RentalProcess";
import Stats from "./Components/Status";
import Testimonials from "./Components/Testimonials";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <NavBar />
      <HeroSlider />
      <Booking />
      <Categories />
      <Vehicle />
      <RentalProcess/>
      <Stats/>
      <Testimonials/>
    </>
  );
}

export default App;
