import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ParkingSearchCard.css";

const ParkingSearchCard = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-5 shadow-lg parking-card">
        {/* Top Section */}
        <div className="d-flex justify-content-between align-items-center gap-3">
          <button className="btn feature-btn btn-primary">
            <i className="bi bi-car-front-fill me-2 fs-5"></i>
            Find the Spot
          </button>
          <button className="btn feature-btn btn-success">
            <i className="bi bi-currency-rupee me-2 fs-5"></i>
            Find the Price
          </button>
        </div>

        {/* Underline */}
        <hr className="my-3" />

        {/* Title */}
        <h3 className="text-center fw-bold title-text">
          Search Parking Spot in Seconds
        </h3>

        {/* Search Bar */}
        <div className="search-container mt-3">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Enter location"
          />
          <i className="bi bi-search search-icon"></i>
        </div>

        {/* Separate Search Button */}
        <div className="text-center mt-4">
          <button className="btn btn-lg btn-primary full-search-btn">
            <i className="bi bi-search me-2"></i> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParkingSearchCard;




