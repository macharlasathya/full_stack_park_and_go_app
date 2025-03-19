


import React from "react";
import "./FindCharges.css";

const FindCharges = () => {
  const charges = [
    {
      location: "Gachibowli",
      vehicles: [
        { type: "Bike", size: "Small", hourly: "₹20", daily: "₹100" },
        { type: "Car", size: "Medium", hourly: "₹50", daily: "₹300" },
      ],
    },
    {
      location: "Madhapur",
      vehicles: [
        { type: "Bike", size: "Medium", hourly: "₹25", daily: "₹120" },
        { type: "Car", size: "Large", hourly: "₹60", daily: "₹350" },
      ],
    },
    {
      location: "Kukatpally",
      vehicles: [
        { type: "Bike", size: "Small", hourly: "₹18", daily: "₹90" },
        { type: "Car", size: "Large", hourly: "₹55", daily: "₹320" },
      ],
    },
    {
      location: "Hitech City",
      vehicles: [
        { type: "Bike", size: "Large", hourly: "₹30", daily: "₹150" },
        { type: "Car", size: "Medium", hourly: "₹70", daily: "₹400" },
      ],
    },
    {
      location: "Begumpet",
      vehicles: [
        { type: "Bike", size: "Medium", hourly: "₹22", daily: "₹110" },
        { type: "Car", size: "Small", hourly: "₹45", daily: "₹280" },
      ],
    },
    {
      location: "Secunderabad Railway Parking",
      vehicles: [
        { type: "Bike", size: "Small", hourly: "₹15", daily: "₹80" },
        { type: "Car", size: "Medium", hourly: "₹40", daily: "₹250" },
      ],
    },
    {
      location: "Miyapur Park & Ride",
      vehicles: [
        { type: "Bike", size: "Medium", hourly: "₹20", daily: "₹100" },
        { type: "Car", size: "Large", hourly: "₹50", daily: "₹300" },
      ],
    },
    {
      location: "Kondapur Central Parking",
      vehicles: [
        { type: "Bike", size: "Small", hourly: "₹22", daily: "₹110" },
        { type: "Car", size: "Medium", hourly: "₹55", daily: "₹320" },
      ],
    },
    {
      location: "Ameerpet Metro Parking",
      vehicles: [
        { type: "Bike", size: "Medium", hourly: "₹18", daily: "₹90" },
        { type: "Car", size: "Small", hourly: "₹45", daily: "₹280" },
      ],
    },
    {
      location: "Jubilee Hills Premium Parking",
      vehicles: [
        { type: "Bike", size: "Large", hourly: "₹25", daily: "₹130" },
        { type: "Car", size: "Large", hourly: "₹65", daily: "₹380" },
      ],
    },
  ];

  return (
    <div className="page-content">
      <div className="charges-container">
        <h2>Parking Charges in Hyderabad</h2>
        <div className="table-responsive">
          <table className="charges-table">
            <thead>
              <tr>
                <th>Location</th>
                <th>Vehicle Type</th>
                <th>Size</th>
                <th>Hourly Rate</th>
                <th>Daily Rate</th>
              </tr>
            </thead>
            <tbody>
              {charges.map((place) => (
                place.vehicles.map((vehicle, idx) => (
                  <tr key={`${place.location}-${idx}`}>
                    {idx === 0 && (
                      <td rowSpan={place.vehicles.length}>{place.location}</td>
                    )}
                    <td>{vehicle.type}</td>
                    <td>{vehicle.size}</td>
                    <td>{vehicle.hourly}</td>
                    <td>{vehicle.daily}</td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FindCharges;
