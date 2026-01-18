import React from 'react';
import Categories from '../Components/Categories';
import FeaturedVehicles from '../Components/FeaturedVehicles';
import PageBanner from '../Components/PageBanner';
import AppInstall from "../Components/AppInstall";

const Vehicles = ({ selectedCategory, onSelectCategory, onSelectVehicle }) => {
  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="EXPLORE OUR FLEET" 
        subtitle="Our Vehicles" 
       bgImage="/icon/assets/hero/hero3.avif"
      />

      {/* Category Selection section */}
      <Categories 
        selectedCategory={selectedCategory} 
        onSelectCategory={onSelectCategory} 
      />
      
      {/* Vehicle Grid view with filtering */}
      <FeaturedVehicles 
        selectedCategory={selectedCategory} 
        viewMode="grid" 
        onSelectVehicle={onSelectVehicle}
      />

      <AppInstall />
    </div>
  );
};

export default Vehicles;
