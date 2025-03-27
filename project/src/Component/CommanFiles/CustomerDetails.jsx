
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './CustomerDetails.css';


const submitBooking = async (bookingData) => {

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Booking submitted:', bookingData);
      resolve({ success: true, message: 'Booking successful' });
    }, 1500);
  });
};

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const CustomerDetails = () => {
  const [searchParams] = useSearchParams();
  const locationName = searchParams.get("locationName") || "Parking Location";
  const address = searchParams.get("address") || "";
  const passedLat = searchParams.get("lat");
  const passedLng = searchParams.get("lng");
  const basePrice = "20.00";

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    vehicleNumber: '',
    inTime: new Date().toISOString().slice(0, 16),
    outTime: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString().slice(0, 16),
    location: {
      lat: passedLat ? parseFloat(passedLat) : 37.7749,
      lng: passedLng ? parseFloat(passedLng) : -122.4194
    },
    paymentStatus: 'Pending',
    orderNumber: 'ORD' + Math.floor(100000 + Math.random() * 900000),
    locationName: locationName,
    address: address,
    paymentReference: '',
    paymentTimestamp: '',
    duration: 2
  });

  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentVerificationCode, setPaymentVerificationCode] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [verificationAttempts, setVerificationAttempts] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [totalAmount, setTotalAmount] = useState(parseFloat(basePrice) * 2);

  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

 
  useEffect(() => {
    const calculateTotal = () => {
      const inTime = new Date(formData.inTime);
      const outTime = new Date(formData.outTime);
      const diffHours = Math.max(0, (outTime - inTime) / (1000 * 60 * 60));
      const duration = Math.max(1, Math.round(diffHours * 10) / 10);

      setFormData(prev => ({ ...prev, duration }));
      setTotalAmount(duration * parseFloat(basePrice));
    };

    calculateTotal();
  }, [formData.inTime, formData.outTime, basePrice]);

 
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView(
        [formData.location.lat, formData.location.lng],
        15
      );

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);

      markerRef.current = L.marker([formData.location.lat, formData.location.lng])
        .addTo(mapRef.current)
        .bindPopup(formData.locationName || 'Your location')
        .openPopup();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [formData.location.lat, formData.location.lng, formData.locationName]);

  
  useEffect(() => {
    if (formData.vehicleNumber) {
      const referenceCode = formData.orderNumber + '-' + Date.now().toString().substring(7);
      const paymentURL = `upi://pay?pa=yourmerchant@ybl&pn=ParkingSystem&am=${totalAmount.toFixed(2)}&cu=INR&tn=Parking for ${formData.vehicleNumber}&tr=${referenceCode}`;

      setFormData(prev => ({ ...prev, paymentReference: referenceCode }));
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(paymentURL)}`);
    }
  }, [formData.orderNumber, formData.vehicleNumber, totalAmount]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
  const initiatePaymentVerification = () => {
    if (!formData.vehicleNumber || !formData.name || !formData.mobileNumber) {
      setErrorMessage('Please fill in all required fields before proceeding with payment');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      setPaymentVerificationCode(verificationCode);
      setShowVerificationModal(true);
      setIsSubmitting(false);
      alert(`Verification code: ${verificationCode}`);
    }, 1500);
  };

 
  const verifyPayment = (e) => {
    e.preventDefault();
    const enteredCode = e.target.elements.verificationCode.value;

    if (enteredCode === paymentVerificationCode) {
      setFormData(prev => ({
        ...prev,
        paymentStatus: 'Completed',
        paymentTimestamp: new Date().toISOString()
      }));
      setPaymentSuccess(true);
      setShowVerificationModal(false);
      setVerificationAttempts(0);
      setErrorMessage('');
    } else {
      const newAttempts = verificationAttempts + 1;
      setVerificationAttempts(newAttempts);

      if (newAttempts >= 3) {
        setShowVerificationModal(false);
        setErrorMessage('Too many failed verification attempts.');
        setVerificationAttempts(0);
      } else {
        setErrorMessage(`Invalid verification code. Attempts remaining: ${3 - newAttempts}`);
      }
    }
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.paymentStatus !== 'Completed') {
      setErrorMessage('Please complete the payment before registering your vehicle.');
      setIsSubmitting(false);
      return;
    }

    const bookingData = {
      fullName: formData.name,
      mobileNumber: formData.mobileNumber,
      vehicleNumber: formData.vehicleNumber,
      entryTime: formData.inTime,
      exitTime: formData.outTime,
      parkingLocation: {
        coordinates: [formData.location.lat, formData.location.lng],
        name: formData.locationName,
        address: formData.address
      },
      paymentInformation: {
        method: 'UPI',
        reference: formData.paymentReference
      },
      pricePerHour: parseFloat(basePrice),
      duration: formData.duration,
      totalAmount: totalAmount,
      orderNumber: formData.orderNumber,
      status: formData.paymentStatus
    };

    try {
      const result = await submitBooking(bookingData);
      alert(`Vehicle registered successfully!\nOrder: ${formData.orderNumber}`);
    } catch (error) {
      setErrorMessage('Failed to save booking data. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="parking-container">
      <div className="parking-header">
        <div className="parking-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
          <h1>Vehicle Parking Registration</h1>
        </div>
        <div className="parking-location-header">
          <h2>{locationName}</h2>
        </div>
      </div>

      {errorMessage && <div className="parking-error-message">{errorMessage}</div>}

      <form onSubmit={handleSubmit} className="parking-form">
        <div className="parking-content">
          <div className="parking-details-section">
            <h2>Customer Details</h2>
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
              <div className="form-group time-input">
                <label htmlFor="inTime">Entry Time</label>
                <input
                  type="datetime-local"
                  id="inTime"
                  name="inTime"
                  value={formData.inTime}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group time-input">
                <label htmlFor="outTime">Exit Time</label>
                <input
                  type="datetime-local"
                  id="outTime"
                  name="outTime"
                  value={formData.outTime}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="price-info">
              <div className="price-row">
                <span>Price per Hour:</span>
                <strong>₹{basePrice}/hour</strong>
              </div>
              <div className="price-row">
                <span>Duration:</span>
                <strong>{formData.duration} hours</strong>
              </div>
              <div className="price-row total">
                <span>Total Amount:</span>
                <strong>₹{totalAmount.toFixed(2)}</strong>
              </div>
            </div>

            <div className="form-info">
              <div className="info-item">
                <span>Order Number:</span>
                <strong>{formData.orderNumber}</strong>
              </div>
              <div className="info-item">
                <span>Status:</span>
                <strong className={formData.paymentStatus === 'Completed' ? 'status-paid' : 'status-pending'}>
                  {formData.paymentStatus}
                </strong>
              </div>
            </div>

            {paymentSuccess && (
              <div className="payment-success-info">
                <p>✓ Payment verified successfully</p>
                <p>Timestamp: {new Date(formData.paymentTimestamp).toLocaleString()}</p>
                <p>Reference: {formData.paymentReference}</p>
              </div>
            )}

            <button
              type="submit"
              className="register-button"
              disabled={isSubmitting || formData.paymentStatus !== 'Completed'}
            >
              {isSubmitting ? 'Processing...' : 'Register Vehicle'}
            </button>
          </div>

          <div className="parking-map-payment-section">
            <div className="map-section">
              <h2>Parking Location</h2>
              <div ref={mapContainerRef} className="map-container"></div>
              <p className="coordinates-info">
                Coordinates: {formData.location.lat.toFixed(6)}, {formData.location.lng.toFixed(6)}
              </p>
              {address && (
                <div className="address-details">
                  <strong>Address:</strong> {address}
                </div>
              )}
            </div>

            <div className="payment-section">
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
      </form>

      {showVerificationModal && (
        <div className="verification-modal-overlay">
          <div className="verification-modal">
            <h3>Payment Verification</h3>
            <p>Please enter the verification code sent to your mobile number ending with {formData.mobileNumber.slice(-4)}</p>

            {errorMessage && <div className="verification-error">{errorMessage}</div>}

            <form onSubmit={verifyPayment}>
              <div className="verification-input-container">
                <input
                  type="text"
                  name="verificationCode"
                  placeholder="Enter 6-digit code"
                  className="verification-input"
                  maxLength="6"
                  pattern="[0-9]{6}"
                  required
                />
              </div>

              <div className="verification-actions">
                <button
                  type="button"
                  onClick={() => setShowVerificationModal(false)}
                  className="cancel-button"
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">Verify</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;