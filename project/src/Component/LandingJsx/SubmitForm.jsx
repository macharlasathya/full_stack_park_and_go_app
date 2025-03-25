
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
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
  const [userId, setUserId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user._id) {
      setUserId(user._id);
    }
  }, []);

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
    if (!formData.requestDetails) newErrors.requestDetails = "Request details are required";
    if (!formData.location) newErrors.location = "Location is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submission attempted");

    if (!validateForm()) {
      console.log("Form validation failed", errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const requestData = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contact,
        address: formData.address,
        requestDetails: formData.requestDetails,
        location: formData.location
      };

      console.log("Sending data:", requestData);

      const data = await submitRequest(requestData);

      console.log("Request Response:", data);
      alert(data.message || "Request submitted successfully!");

  
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
    
  <div className="submit-form-container">
  <form onSubmit={handleSubmit}>
    
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Name"
    />
    {errors.name && <span className="error">{errors.name}</span>}
    
    
    
    <button type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : 'Submit Request'}
    </button>
  </form>
</div>
);
};

export default SubmitForm;