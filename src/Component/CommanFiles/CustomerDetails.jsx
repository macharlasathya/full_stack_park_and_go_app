// import React, { useState, useEffect } from 'react';
// import './CustomerDetails.css'; // Renamed CSS file

// const CustomerDetails = () => {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     mobileNumber: '',
//     vehicleNumber: '',
//     inTime: new Date().toISOString().slice(0, 16), // Set current date/time as default
//     location: { lat: 37.7749, lng: -122.4194 },
//     paymentStatus: 'Pending',
//     orderNumber: 'ORD' + Math.floor(100000 + Math.random() * 900000) // Generate order number by default
//   });

//   // QR code state
//   const [qrCodeUrl, setQrCodeUrl] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Generate QR code immediately and when relevant data changes
//   useEffect(() => {
//     if (formData.vehicleNumber) {
//       generateQRCode();
//     } else {
//       // Generate a default QR code with just the order number
//       const qrData = encodeURIComponent(
//         `Order: ${formData.orderNumber}\nAmount: $10.00`
//       );
//       setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`);
//     }
//   }, [formData.orderNumber, formData.vehicleNumber]);

//   // Function to generate QR code
//   const generateQRCode = () => {
//     const qrData = encodeURIComponent(
//       `Order: ${formData.orderNumber}\nVehicle: ${formData.vehicleNumber}\nAmount: $10.00`
//     );
//     setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`);
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle payment completion
//   const handlePaymentComplete = () => {
//     setIsSubmitting(true);
    
//     // Simulate payment processing delay
//     setTimeout(() => {
//       setFormData({
//         ...formData,
//         paymentStatus: 'Completed'
//       });
//       setIsSubmitting(false);
//       // Ensure QR code is generated after payment
//       generateQRCode();
//     }, 1000);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission delay
//     setTimeout(() => {
//       alert("Form submitted successfully! Order number: " + formData.orderNumber);
//       setIsSubmitting(false);
//       // In a real app, you would send this data to your backend
//     }, 1000);
//   };

//   return (
//     // Using much more specific class names to avoid conflicts
//     <div className="vehicle-parking-reg-container">
//       <div className="vehicle-parking-reg-header">
//         <div className="vehicle-parking-reg-logo">
//           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="12" cy="12" r="10"></circle>
//             <path d="M12 6v6l4 2"></path>
//           </svg>
//         </div>
//         <h1>Vehicle Parking Registration</h1>
//         <p className="vehicle-parking-reg-subheading">Quick and secure parking management system</p>
//         <div className="vehicle-parking-reg-header-divider"></div>
//       </div>
      
//       <form onSubmit={handleSubmit}>
//         <div className="vehicle-parking-reg-grid">
//           {/* Left column */}
//           <div>
//             <div className="vehicle-parking-reg-form-group">
//               <label className="vehicle-parking-reg-label" htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="vehicle-parking-reg-input"
//                 placeholder="Enter your full name"
//               />
//             </div>
            
//             <div className="vehicle-parking-reg-form-group">
//               <label className="vehicle-parking-reg-label" htmlFor="mobileNumber">Mobile Number</label>
//               <input
//                 type="tel"
//                 id="mobileNumber"
//                 name="mobileNumber"
//                 value={formData.mobileNumber}
//                 onChange={handleChange}
//                 pattern="[0-9]{10}"
//                 required
//                 className="vehicle-parking-reg-input"
//                 placeholder="10-digit mobile number"
//               />
//             </div>
            
//             <div className="vehicle-parking-reg-form-group">
//               <label className="vehicle-parking-reg-label" htmlFor="vehicleNumber">Vehicle Number</label>
//               <input
//                 type="text"
//                 id="vehicleNumber"
//                 name="vehicleNumber"
//                 value={formData.vehicleNumber}
//                 onChange={handleChange}
//                 required
//                 className="vehicle-parking-reg-input"
//                 placeholder="Enter vehicle registration number"
//               />
//             </div>
            
//             <div className="vehicle-parking-reg-form-group">
//               <label className="vehicle-parking-reg-label" htmlFor="inTime">In Time</label>
//               <input
//                 type="datetime-local"
//                 id="inTime"
//                 name="inTime"
//                 value={formData.inTime}
//                 onChange={handleChange}
//                 required
//                 className="vehicle-parking-reg-input"
//               />
//             </div>
//           </div>
          
//           {/* Right column */}
//           <div>
//             <div className="vehicle-parking-reg-form-group">
//               <label className="vehicle-parking-reg-label">Location</label>
//               <div className="vehicle-parking-reg-map">
//                 <p>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
//                     <circle cx="12" cy="10" r="3"></circle>
//                   </svg>
//                   <br />
//                   Google Maps integration would go here.
//                   <br />
//                   <span className="vehicle-parking-reg-map-note">(Requires Google Maps API Key)</span>
//                 </p>
//               </div>
//             </div>
            
//             <div className="vehicle-parking-reg-form-group">
//               <label className="vehicle-parking-reg-label">Payment QR Code</label>
//               <div className="vehicle-parking-reg-qr-container">
//                 <div className="vehicle-parking-reg-qr-code">
//                   {qrCodeUrl ? (
//                     <img 
//                       src={qrCodeUrl} 
//                       alt="Payment QR Code" 
//                       width="200" 
//                       height="200"
//                     />
//                   ) : (
//                     <p>QR code will appear here</p>
//                   )}
//                 </div>
//                 <div className="vehicle-parking-reg-payment-info">
//                   <p>Order #: {formData.orderNumber}</p>
//                   <p>Amount: $10.00</p>
//                   <p>Status: {formData.paymentStatus}</p>
//                   <button
//                     type="button"
//                     onClick={handlePaymentComplete}
//                     disabled={isSubmitting || formData.paymentStatus === 'Completed'}
//                     className="vehicle-parking-reg-payment-button"
//                   >
//                     {formData.paymentStatus === 'Completed' ? 'Payment Completed' : 'Complete Payment'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <div className="vehicle-parking-reg-footer">
//           <button 
//             type="submit" 
//             className="vehicle-parking-reg-submit-button"
//             disabled={isSubmitting || formData.paymentStatus !== 'Completed'}
//           >
//             {isSubmitting ? 'Submitting...' : 'Register Vehicle'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CustomerDetails;

import React, { useState, useEffect, useRef } from 'react';
import './CustomerDetails.css'; // Renamed CSS file
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Need to fix Leaflet default icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const CustomerDetails = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    vehicleNumber: '',
    inTime: new Date().toISOString().slice(0, 16), // Set current date/time as default
    location: { lat: 37.7749, lng: -122.4194 }, // Default location
    paymentStatus: 'Pending',
    orderNumber: 'ORD' + Math.floor(100000 + Math.random() * 900000) // Generate order number by default
  });

  // QR code state
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Initialize the map
      mapRef.current = L.map(mapContainerRef.current).setView(
        [formData.location.lat, formData.location.lng], 
        13
      );

      // Add OpenStreetMap tile layer (free alternative to Google Maps)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);

      // Add a marker at the default location
      markerRef.current = L.marker([formData.location.lat, formData.location.lng])
        .addTo(mapRef.current)
        .bindPopup('Your location')
        .openPopup();

      // Handle click on map to update location
      mapRef.current.on('click', handleMapClick);
      
      // Try to get user's current location
      mapRef.current.locate({setView: true, maxZoom: 16});
      
      // Handle location found event
      mapRef.current.on('locationfound', onLocationFound);
      
      // Handle location error event
      mapRef.current.on('locationerror', onLocationError);
    }

    return () => {
      // Clean up map instance when component unmounts
      if (mapRef.current) {
        mapRef.current.off('click', handleMapClick);
        mapRef.current.off('locationfound', onLocationFound);
        mapRef.current.off('locationerror', onLocationError);
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Function to handle when user's location is found
  const onLocationFound = (e) => {
    const { lat, lng } = e.latlng;
    
    // Update the marker position
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
      markerRef.current.bindPopup(`You are within ${e.accuracy.toFixed(2)} meters from this point`).openPopup();
    }
    
    // Update the form data with new coordinates
    setFormData(prev => ({
      ...prev,
      location: { lat, lng }
    }));

    // Draw a circle showing accuracy
    L.circle(e.latlng, e.accuracy).addTo(mapRef.current);
  };

  // Function to handle location errors
  const onLocationError = (e) => {
    console.log('Location access error:', e.message);
    // You could show a notification to the user here
  };

  // Handle clicks on the map to update the marker and location
  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    
    // Update the marker position
    if (markerRef.current) {
      markerRef.current.setLatLng([lat, lng]);
      markerRef.current.bindPopup('Selected location').openPopup();
    }
    
    // Update the form data with new coordinates
    setFormData(prev => ({
      ...prev,
      location: { lat, lng }
    }));
  };

  // Generate QR code immediately and when relevant data changes
  useEffect(() => {
    if (formData.vehicleNumber) {
      generateQRCode();
    } else {
      // Generate a default QR code with just the order number
      const qrData = encodeURIComponent(
        `Order: ${formData.orderNumber}\nAmount: $10.00`
      );
      setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`);
    }
  }, [formData.orderNumber, formData.vehicleNumber]);

  // Function to generate QR code
  const generateQRCode = () => {
    const qrData = encodeURIComponent(
      `Order: ${formData.orderNumber}\nVehicle: ${formData.vehicleNumber}\nAmount: $10.00\nLocation: ${formData.location.lat.toFixed(6)}, ${formData.location.lng.toFixed(6)}`
    );
    setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrData}`);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle payment completion
  const handlePaymentComplete = () => {
    setIsSubmitting(true);
    
    // Simulate payment processing delay
    setTimeout(() => {
      setFormData({
        ...formData,
        paymentStatus: 'Completed'
      });
      setIsSubmitting(false);
      // Ensure QR code is generated after payment
      generateQRCode();
    }, 1000);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      alert(`Form submitted successfully!\nOrder number: ${formData.orderNumber}\nLocation: ${formData.location.lat.toFixed(6)}, ${formData.location.lng.toFixed(6)}`);
      setIsSubmitting(false);
      // In a real app, you would send this data to your backend
    }, 1000);
  };

  return (
    // Using much more specific class names to avoid conflicts
    <div className="vehicle-parking-reg-container">
      <div className="vehicle-parking-reg-header">
        <div className="vehicle-parking-reg-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 6v6l4 2"></path>
          </svg>
        </div>
        <h1>Vehicle Parking Registration</h1>
        <p className="vehicle-parking-reg-subheading">Quick and secure parking management system</p>
        <div className="vehicle-parking-reg-header-divider"></div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="vehicle-parking-reg-grid">
          {/* Left column */}
          <div>
            <div className="vehicle-parking-reg-form-group">
              <label className="vehicle-parking-reg-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="vehicle-parking-reg-input"
                placeholder="Enter your full name"
              />
            </div>
            
            <div className="vehicle-parking-reg-form-group">
              <label className="vehicle-parking-reg-label" htmlFor="mobileNumber">Mobile Number</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                pattern="[0-9]{10}"
                required
                className="vehicle-parking-reg-input"
                placeholder="10-digit mobile number"
              />
            </div>
            
            <div className="vehicle-parking-reg-form-group">
              <label className="vehicle-parking-reg-label" htmlFor="vehicleNumber">Vehicle Number</label>
              <input
                type="text"
                id="vehicleNumber"
                name="vehicleNumber"
                value={formData.vehicleNumber}
                onChange={handleChange}
                required
                className="vehicle-parking-reg-input"
                placeholder="Enter vehicle registration number"
              />
            </div>
            
            <div className="vehicle-parking-reg-form-group">
              <label className="vehicle-parking-reg-label" htmlFor="inTime">In Time</label>
              <input
                type="datetime-local"
                id="inTime"
                name="inTime"
                value={formData.inTime}
                onChange={handleChange}
                required
                className="vehicle-parking-reg-input"
              />
            </div>
          </div>
          
          {/* Right column */}
          <div>
            <div className="vehicle-parking-reg-form-group">
              <label className="vehicle-parking-reg-label">Location</label>
              <div 
                ref={mapContainerRef} 
                className="vehicle-parking-reg-map leaflet-map"
              >
                {/* Map will be rendered here by Leaflet */}
              </div>
              <p className="vehicle-parking-reg-map-coordinates">
                Selected coordinates: {formData.location.lat.toFixed(6)}, {formData.location.lng.toFixed(6)}
              </p>
            </div>
            
            <div className="vehicle-parking-reg-form-group">
              <label className="vehicle-parking-reg-label">Payment QR Code</label>
              <div className="vehicle-parking-reg-qr-container">
                <div className="vehicle-parking-reg-qr-code">
                  {qrCodeUrl ? (
                    <img 
                      src={qrCodeUrl} 
                      alt="Payment QR Code" 
                      width="200" 
                      height="200"
                    />
                  ) : (
                    <p>QR code will appear here</p>
                  )}
                </div>
                <div className="vehicle-parking-reg-payment-info">
                  <p>Order #: {formData.orderNumber}</p>
                  <p>Amount: $10.00</p>
                  <p>Status: {formData.paymentStatus}</p>
                  <button
                    type="button"
                    onClick={handlePaymentComplete}
                    disabled={isSubmitting || formData.paymentStatus === 'Completed'}
                    className="vehicle-parking-reg-payment-button"
                  >
                    {formData.paymentStatus === 'Completed' ? 'Payment Completed' : 'Complete Payment'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="vehicle-parking-reg-footer">
          <button 
            type="submit" 
            className="vehicle-parking-reg-submit-button"
            disabled={isSubmitting || formData.paymentStatus !== 'Completed'}
          >
            {isSubmitting ? 'Submitting...' : 'Register Vehicle'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerDetails;   