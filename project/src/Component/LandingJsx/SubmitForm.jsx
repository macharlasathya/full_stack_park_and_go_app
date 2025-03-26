import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../LandingCss/SubmitForm.css";

const submitRequest = async (requestData) => {
  console.warn('Using mock submitRequest. Replace with actual API call');
  return {
    message: 'Request submitted successfully (Mock Response)',
    data: requestData
  };
};

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    requestDetails: "",
    location: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Invalid contact number (10 digits required)";
    }
    
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.requestDetails.trim()) newErrors.requestDetails = "Request details are required";
    if (!formData.location.trim()) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const requestData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        contactNumber: formData.contact.trim(),
        address: formData.address.trim(),
        requestDetails: formData.requestDetails.trim(),
        location: formData.location.trim()
      };

      const data = await submitRequest(requestData);
      
      // Use more modern alert method
      alert(data.message || "Request submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        address: "",
        requestDetails: "",
        location: ""
      });
      setErrors({});
    } catch (error) {
      console.error("Error submitting request:", error);
      alert('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ps-form-outer-wrapper">
      <div className="ps-form-inner-container">
        <div className="ps-form-card">
          <form onSubmit={handleSubmit} className="ps-form">
            <h2 className="ps-form-heading">Submit Parking Spot Request</h2>
            
            {/* Form Fields */}
            <div className="ps-form-group">
              <label htmlFor="name" className="ps-form-label">Name</label>
              <input
                id="name"
                type="text"
                className={`ps-form-input ${errors.name ? 'ps-input-error' : ''}`}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <div className="ps-error-message">{errors.name}</div>}
            </div>

            {/* Email Field */}
            <div className="ps-form-group">
              <label htmlFor="email" className="ps-form-label">Email</label>
              <input
                id="email"
                type="email"
                className={`ps-form-input ${errors.email ? 'ps-input-error' : ''}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <div className="ps-error-message">{errors.email}</div>}
            </div>

            {/* Contact Field */}
            <div className="ps-form-group">
              <label htmlFor="contact" className="ps-form-label">Contact Number</label>
              <input
                id="contact"
                type="tel"
                className={`ps-form-input ${errors.contact ? 'ps-input-error' : ''}`}
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter 10-digit contact number"
              />
              {errors.contact && <div className="ps-error-message">{errors.contact}</div>}
            </div>

            {/* Address Field */}
            <div className="ps-form-group">
              <label htmlFor="address" className="ps-form-label">Address</label>
              <input
                id="address"
                type="text"
                className={`ps-form-input ${errors.address ? 'ps-input-error' : ''}`}
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
              />
              {errors.address && <div className="ps-error-message">{errors.address}</div>}
            </div>

            {/* Location Field */}
            <div className="ps-form-group">
              <label htmlFor="location" className="ps-form-label">Location</label>
              <input
                id="location"
                type="text"
                className={`ps-form-input ${errors.location ? 'ps-input-error' : ''}`}
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Enter parking spot location"
              />
              {errors.location && <div className="ps-error-message">{errors.location}</div>}
            </div>

            {/* Request Details Field */}
            <div className="ps-form-group">
              <label htmlFor="requestDetails" className="ps-form-label">Request Details</label>
              <textarea
                id="requestDetails"
                className={`ps-form-textarea ${errors.requestDetails ? 'ps-input-error' : ''}`}
                name="requestDetails"
                value={formData.requestDetails}
                onChange={handleChange}
                placeholder="Provide additional details about your parking request"
                rows="3"
              />
              {errors.requestDetails && <div className="ps-error-message">{errors.requestDetails}</div>}
            </div>

            {/* Submit Button */}
            <div className="ps-form-group">
              <button 
                type="submit" 
                className="ps-submit-button" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;