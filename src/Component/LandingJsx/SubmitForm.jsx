

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../LandingCss/SubmitForm.css"; // Using a unique CSS filename

const SubmitForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.contact) newErrors.contact = "Contact is required";
    else if (!/^\d{10}$/.test(formData.contact))
      newErrors.contact = "Invalid contact number (10 digits required)";
    if (!formData.address) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      console.log(formData);
      setFormData({ name: "", email: "", contact: "", address: "" });
      setErrors({});
    }
  };

  return (
    <div className="ps-form-outer-wrapper">
      <div className="ps-form-inner-container">
        <div className="ps-form-card">
          <h2 className="ps-form-heading">Submit Your Details</h2>
          <form onSubmit={handleSubmit} className="ps-form">
            <div className="ps-form-group">
              <label className="ps-form-label">Name</label>
              <input
                type="text"
                name="name"
                className={`ps-form-input ${errors.name ? "ps-input-error" : ""}`}
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              {errors.name && <div className="ps-error-message">{errors.name}</div>}
            </div>

            <div className="ps-form-group">
              <label className="ps-form-label">Email</label>
              <input
                type="email"
                name="email"
                className={`ps-form-input ${errors.email ? "ps-input-error" : ""}`}
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <div className="ps-error-message">{errors.email}</div>}
            </div>

            <div className="ps-form-group">
              <label className="ps-form-label">Contact</label>
              <input
                type="text"
                name="contact"
                className={`ps-form-input ${errors.contact ? "ps-input-error" : ""}`}
                value={formData.contact}
                onChange={handleChange}
                placeholder="Enter your contact number"
              />
              {errors.contact && <div className="ps-error-message">{errors.contact}</div>}
            </div>

            <div className="ps-form-group">
              <label className="ps-form-label">Address</label>
              <textarea
                name="address"
                className={`ps-form-textarea ${errors.address ? "ps-input-error" : ""}`}
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                rows="3"
              />
              {errors.address && <div className="ps-error-message">{errors.address}</div>}
            </div>

            <button type="submit" className="ps-submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitForm;