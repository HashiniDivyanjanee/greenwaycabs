import React, { useState } from "react";
import VehicleDetail from "./VehicleDetail";
import VehicleBookingPopup from "../Components/VehicleBookinPopup";

const Fleet = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleVehicleBookingClick = (vehicle) => {
    setSelectedVehicle(vehicle);
    setIsBookingOpen(true);
  };

  return (
    <>
      {/* Vehicle detail page */}
      <VehicleDetail
        onVehicleBookingClick={handleVehicleBookingClick}
      />

      {/* Booking popup */}
      <VehicleBookingPopup
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedVehicle={selectedVehicle}
      />
    </>
  );
};

export default Fleet;
