

import React, { useState, useEffect, useRef } from 'react';
import './CustomerDetails.css';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useParams, useSearchParams } from 'react-router-dom';


const CustomerDetails = () => {


  return (
    <div className="parking-container">
      <div className="parking-wrapper">

        <div className="parking-header">
          <div className="parking-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
            <h1>Vehicle Parking Registration</h1>
          </div>

          {formData.locationName && (
            <div className="parking-location-info">
              <p><strong>Location:</strong> {formData.locationName}</p>
              {formData.address && <p><strong>Address:</strong> {formData.address}</p>}
            </div>
          )}
        </div>

        {errorMessage && <div className="parking-error-message">{errorMessage}</div>}


        <div className="parking-grid">

          <div className="parking-column customer-details">
            <div className="parking-card">
              <h2>Customer Details</h2>


              <form onSubmit={handleSubmit} className="parking-form">

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    pattern="[0-9]{10}"
                    required
                    placeholder="10-digit mobile number"
                  />
                </div>


                <div className="form-group">
                  <label htmlFor="vehicleNumber">Vehicle Number</label>
                  <input
                    type="text"
                    id="vehicleNumber"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter vehicle registration number"
                  />
                </div>


                <div className="time-picker-container">

                </div>

                <div className="price-info">

                </div>


                <button
                  type="submit"
                  className="register-button"
                  disabled={isSubmitting || formData.paymentStatus !== 'Completed'}
                >
                  {isSubmitting ? 'Processing...' : 'Register Vehicle'}
                </button>
              </form>
            </div>
          </div>


          <div className="parking-column location-payment">
            <div className="parking-card map-section">
              <h2>Parking Location</h2>
              <div ref={mapContainerRef} className="map-container"></div>
              <p className="coordinates-info">
                Coordinates: {formData.location.lat.toFixed(6)}, {formData.location.lng.toFixed(6)}
              </p>
            </div>

            <div className="parking-card payment-section">
              <h2>Payment Information</h2>
              <div className="qr-section">
                <h3>Scan to Pay</h3>
                <div className="qr-container">
                  {qrCodeUrl ? (
                    <img
                      src={qrCodeUrl}
                      alt="Payment QR Code"
                      className="qr-code"
                    />
                  ) : (
                    <div className="qr-placeholder">QR code will appear here</div>
                  )}
                </div>

                {!paymentSuccess && (
                  <button
                    type="button"
                    onClick={initiatePaymentVerification}
                    disabled={isSubmitting}
                    className="verify-button"
                  >
                    {isSubmitting ? 'Processing...' : 'Verify Payment'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>


      {showVerificationModal && (
        <div className="verification-modal-overlay">

        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
