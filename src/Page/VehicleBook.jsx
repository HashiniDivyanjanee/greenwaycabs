import React from 'react';
import Categories from '../Components/Categories';
import FeaturedVehicles from '../Components/FeaturedVehicles';
import PageBanner from '../Components/PageBanner';

const Vehicles = ({ selectedCategory, onSelectCategory, onSelectVehicle }) => {
  return (
    <div className="bg-white min-h-screen">
      <PageBanner 
        title="EXPLORE OUR FLEET" 
        subtitle="Our Vehicles" 
        bgImage="https://images.unsplash.com/photo-1485291571170-ef410762b085?auto=format&fit=crop&w=1200&q=80"
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
    </div>
  );
};

export default Vehicles;
