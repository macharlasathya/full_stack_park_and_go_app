import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./CustomerDetails.css";
// import { parkingLocations } from "./ParkingBooking";

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [parkingData, setParkingData] = useState(null);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    vehicleType: "Car",
    arrivalDate: "",
    arrivalTime: "",
    departureDate: "",
    duration: 1,
    totalCost: 0
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Load parking data and set default dates
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const parkingSpot = parkingLocations.find(spot => spot.id === parseInt(id));
      if (parkingSpot) {
        setParkingData(parkingSpot);
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        setBookingData({
          ...bookingData,
          arrivalDate: now.toISOString().split('T')[0],
          arrivalTime: now.toTimeString().split(' ')[0].substring(0, 5),
          departureDate: tomorrow.toISOString().split('T')[0],
          totalCost: parkingSpot.price * 24
        });
      }
      setIsLoading(false);
    }, 800);
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
    
    // Calculate cost if dates change
    if (["arrivalDate", "arrivalTime", "departureDate"].includes(name) && parkingData) {
      const arrival = new Date(`${bookingData.arrivalDate}T${bookingData.arrivalTime}`);
      const departure = new Date(`${bookingData.departureDate}T${bookingData.arrivalTime}`);
      if (!isNaN(arrival) && !isNaN(departure)) {
        const hours = Math.max(1, Math.ceil((departure - arrival) / (1000 * 60 * 60)));
        setBookingData(prev => ({
          ...prev,
          duration: hours,
          totalCost: parkingData.price * hours
        }));
      }
    }
  };

  // Navigation handlers
  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };
  
  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  // Payment submission
  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setBookingComplete(true);
      setBookingId("PK" + Math.floor(100000 + Math.random() * 900000));
      window.scrollTo(0, 0);
    }, 2000);
  };

  const handleNewBooking = () => navigate("/parking-results");

  // Loading state
  if (isLoading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Loading parking details...</p>
      </div>
    );
  }

  // Error state - parking not found
  if (!parkingData) {
    return (
      <div className="container py-5 text-center">
        <i className="bi bi-exclamation-circle display-1 text-danger"></i>
        <h3 className="mt-4">Parking Location Not Found</h3>
        <Link to="/parking-results" className="btn btn-primary mt-3">Back to Results</Link>
      </div>
    );
  }

  // Booking complete state
  if (bookingComplete) {
    return (
      <div className="container py-5 text-center">
        <i className="bi bi-check-circle display-1 text-success"></i>
        <h2 className="mt-4">Booking Confirmed!</h2>
        <div className="mt-4">
          <p><strong>Booking ID:</strong> {bookingId}</p>
          <p><strong>Location:</strong> {parkingData.name}</p>
          <p><strong>Duration:</strong> {bookingData.duration} hours</p>
          <p><strong>Total Cost:</strong> ${bookingData.totalCost.toFixed(2)}</p>
        </div>
        <button className="btn btn-primary mt-4" onClick={handleNewBooking}>
          Make Another Booking
        </button>
      </div>
    );
  }

  // Main booking flow
  return (
    <div className="container py-4">
      <Link to="/parking-results" className="btn btn-outline-secondary mb-4">
        <i className="bi bi-arrow-left me-2"></i>Back to Results
      </Link>
      
      {/* Progress bar */}
      <div className="progress mb-4">
        <div 
          className="progress-bar" 
          role="progressbar" 
          style={{ width: `${(currentStep / 3) * 100}%` }}
        ></div>
      </div>
      <div className="d-flex justify-content-between mb-4">
        <div className={`${currentStep >= 1 ? 'fw-bold' : ''}`}>Details</div>
        <div className={`${currentStep >= 2 ? 'fw-bold' : ''}`}>Review</div>
        <div className={`${currentStep >= 3 ? 'fw-bold' : ''}`}>Payment</div>
      </div>
      
      <div className="card shadow-sm">
        <div className="card-body">
          {/* Step 1: Booking details */}
          {currentStep === 1 && (
            <>
              <h3 className="mb-4">Enter Booking Details</h3>
              <form>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name" 
                      value={bookingData.name} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      value={bookingData.email} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
                  <select 
                    className="form-select" 
                    id="vehicleType" 
                    name="vehicleType" 
                    value={bookingData.vehicleType} 
                    onChange={handleInputChange}
                  >
                    <option value="Car">Car</option>
                    <option value="SUV">SUV</option>
                    <option value="Motorcycle">Motorcycle</option>
                  </select>
                </div>
                
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="arrivalDate" className="form-label">Arrival Date</label>
                    <input 
                      type="date" 
                      className="form-control" 
                      id="arrivalDate" 
                      name="arrivalDate" 
                      value={bookingData.arrivalDate} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="arrivalTime" className="form-label">Arrival Time</label>
                    <input 
                      type="time" 
                      className="form-control" 
                      id="arrivalTime" 
                      name="arrivalTime" 
                      value={bookingData.arrivalTime} 
                      onChange={handleInputChange} 
                      required 
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="departureDate" className="form-label">Departure Date</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="departureDate" 
                    name="departureDate" 
                    value={bookingData.departureDate} 
                    onChange={handleInputChange} 
                    required 
                  />
                </div>
                
                <button type="button" className="btn btn-primary w-100" onClick={handleNextStep}>
                  Continue to Review
                </button>
              </form>
            </>
          )}
          
          {/* Step 2: Review */}
          {currentStep === 2 && (
            <>
              <h3 className="mb-4">Review Your Booking</h3>
              <div className="row">
                <div className="col-md-6">
                  <h5>Personal Details</h5>
                  <p><strong>Name:</strong> {bookingData.name}</p>
                  <p><strong>Email:</strong> {bookingData.email}</p>
                  <p><strong>Vehicle Type:</strong> {bookingData.vehicleType}</p>
                </div>
                <div className="col-md-6">
                  <h5>Booking Details</h5>
                  <p><strong>Arrival:</strong> {bookingData.arrivalDate} at {bookingData.arrivalTime}</p>
                  <p><strong>Departure:</strong> {bookingData.departureDate}</p>
                  <p><strong>Duration:</strong> {bookingData.duration} hours</p>
                  <p><strong>Total Cost:</strong> ${bookingData.totalCost.toFixed(2)}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-4">
                <button type="button" className="btn btn-outline-secondary" onClick={handlePrevStep}>
                  Back
                </button>
                <button type="button" className="btn btn-primary" onClick={handleNextStep}>
                  Proceed to Payment
                </button>
              </div>
            </>
          )}
          
          {/* Step 3: Payment */}
          {currentStep === 3 && (
            <>
              <h3 className="mb-4">Payment Details</h3>
              <form onSubmit={handleSubmitPayment}>
                <div className="mb-4">
                  <h5>Select Payment Method</h5>
                  <div className="form-check mb-2">
                    <input 
                      type="radio" 
                      className="form-check-input" 
                      id="creditCard" 
                      name="paymentMethod" 
                      value="card" 
                      checked={paymentMethod === "card"} 
                      onChange={handlePaymentMethodChange} 
                    />
                    <label className="form-check-label" htmlFor="creditCard">
                      Credit / Debit Card
                    </label>
                  </div>
                  <div className="form-check">
                    <input 
                      type="radio" 
                      className="form-check-input" 
                      id="paypal" 
                      name="paymentMethod" 
                      value="paypal" 
                      checked={paymentMethod === "paypal"} 
                      onChange={handlePaymentMethodChange} 
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div>
                
                {paymentMethod === "card" && (
                  <>
                    <div className="mb-3">
                      <label htmlFor="cardNumber" className="form-label">Card Number</label>
                      <input type="text" className="form-control" id="cardNumber" required />
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <label htmlFor="expiry" className="form-label">Expiry Date</label>
                        <input type="text" className="form-control" id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="cvv" className="form-label">CVV</label>
                        <input type="text" className="form-control" id="cvv" required />
                      </div>
                    </div>
                  </>
                )}
                
                <div className="d-flex justify-content-between mt-4">
                  <button type="button" className="btn btn-outline-secondary" onClick={handlePrevStep}>
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={isProcessingPayment}
                  >
                    {isProcessingPayment ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : (
                      `Pay $${bookingData.totalCost.toFixed(2)}`
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      
      {/* Parking details sidebar */}
      <div className="mt-4 card">
        <div className="card-body">
          <h4>{parkingData.name}</h4>
          <p className="text-muted">{parkingData.address}</p>
          <p className="mb-1"><strong>Price:</strong> ${parkingData.price}/hour</p>
          <p><strong>Available Spots:</strong> {parkingData.availableSpots}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;