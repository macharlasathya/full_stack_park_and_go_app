// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "../LandingCss/SubmitForm.css"; // Using a unique CSS filename

// const SubmitForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     address: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email format";
//     if (!formData.contact) newErrors.contact = "Contact is required";
//     else if (!/^\d{10}$/.test(formData.contact))
//       newErrors.contact = "Invalid contact number (10 digits required)";
//     if (!formData.address) newErrors.address = "Address is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       alert("Form submitted successfully!");
//       console.log(formData);
//       setFormData({ name: "", email: "", contact: "", address: "" });
//       setErrors({});
//     }
//   };

//   return (
//     <div className="ps-form-outer-wrapper">
//       <div className="ps-form-inner-container">
//         <div className="ps-form-card">
//           <h2 className="ps-form-heading">Submit Your Details</h2>
//           <form onSubmit={handleSubmit} className="ps-form">
//             <div className="ps-form-group">
//               <label className="ps-form-label">Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className={`ps-form-input ${errors.name ? "ps-input-error" : ""}`}
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//               />
//               {errors.name && <div className="ps-error-message">{errors.name}</div>}
//             </div>

//             <div className="ps-form-group">
//               <label className="ps-form-label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className={`ps-form-input ${errors.email ? "ps-input-error" : ""}`}
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//               />
//               {errors.email && <div className="ps-error-message">{errors.email}</div>}
//             </div>

//             <div className="ps-form-group">
//               <label className="ps-form-label">Contact</label>
//               <input
//                 type="text"
//                 name="contact"
//                 className={`ps-form-input ${errors.contact ? "ps-input-error" : ""}`}
//                 value={formData.contact}
//                 onChange={handleChange}
//                 placeholder="Enter your contact number"
//               />
//               {errors.contact && <div className="ps-error-message">{errors.contact}</div>}
//             </div>

//             <div className="ps-form-group">
//               <label className="ps-form-label">Address</label>
//               <textarea
//                 name="address"
//                 className={`ps-form-textarea ${errors.address ? "ps-input-error" : ""}`}
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Enter your address"
//                 rows="3"
//               />
//               {errors.address && <div className="ps-error-message">{errors.address}</div>}
//             </div>

//             <button type="submit" className="ps-submit-button">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubmitForm;





// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "../LandingCss/SubmitForm.css";

// const SubmitForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     address: "",
//     requestDetails: "",
//     location: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [userId, setUserId] = useState("");

//   // Get the user ID from localStorage (assuming it's stored there after login)
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user._id) {
//       setUserId(user._id);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email format";
//     if (!formData.contact) newErrors.contact = "Contact is required";
//     else if (!/^\d{10}$/.test(formData.contact))
//       newErrors.contact = "Invalid contact number (10 digits required)";
//     if (!formData.address) newErrors.address = "Address is required";
//     if (!formData.requestDetails) newErrors.requestDetails = "Request details are required";
//     if (!formData.location) newErrors.location = "Location is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submission attempted");
    
//     if (!validateForm()) {
//       console.log("Form validation failed", errors);
//       return;
//     }

//     try {
//       const requestData = {
//         userId: userId || "guest", // Use actual user ID or fallback to "guest"
//         requestDetails: formData.requestDetails,
//         location: formData.location
//       };

//       console.log("Sending data:", requestData);

//       const response = await fetch("http://localhost:5000/api/request/add", {
//         method: "POST",
//         headers: {
//            "Content-Type": "application/json"
//         },
//         body: JSON.stringify(requestData)
//       });

//       if (!response.ok) {
//         throw new Error(`Server responded with status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log("Request Response:", data);
//       alert(data.message);

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         contact: "",
//         address: "",
//         requestDetails: "",
//         location: ""
//       });
//       setErrors({});
//     } catch (error) {
//       console.error("Error submitting request:", error);
//       alert("Failed to submit request. Please check if the server is running.");
//     }
//   };

//   return (
//     <div className="ps-form-outer-wrapper">
//       <div className="ps-form-inner-container">
//         <div className="ps-form-card">
//           <h2 className="ps-form-heading">Submit Your Details</h2>
//           <form onSubmit={handleSubmit} className="ps-form">
//             <div className="form-group mb-3">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <div className="text-danger">{errors.name}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <div className="text-danger">{errors.email}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="contact">Contact Number</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="contact"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//               />
//               {errors.contact && <div className="text-danger">{errors.contact}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="address">Address</label>
//               <textarea
//                 className="form-control"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 rows="2"
//               ></textarea>
//               {errors.address && <div className="text-danger">{errors.address}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="requestDetails">Request Details</label>
//               <textarea
//                 className="form-control"
//                 id="requestDetails"
//                 name="requestDetails"
//                 value={formData.requestDetails}
//                 onChange={handleChange}
//                 rows="3"
//               ></textarea>
//               {errors.requestDetails && <div className="text-danger">{errors.requestDetails}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="location">Location</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//               />
//               {errors.location && <div className="text-danger">{errors.location}</div>}
//             </div>

//             <button type="submit" className="ps-submit-button btn btn-primary">Submit</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubmitForm;

// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";
// import "../LandingCss/SubmitForm.css";
// import { submitRequest } from "../../App"; // Import the helper function

// const SubmitForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     address: "",
//     requestDetails: "",
//     location: ""
//   });

//   const [errors, setErrors] = useState({});
//   const [userId, setUserId] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state

//   // Get the user ID from localStorage (assuming it's stored there after login)
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user._id) {
//       setUserId(user._id);
//     }
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Invalid email format";
//     if (!formData.contact) newErrors.contact = "Contact is required";
//     else if (!/^\d{10}$/.test(formData.contact))
//       newErrors.contact = "Invalid contact number (10 digits required)";
//     if (!formData.address) newErrors.address = "Address is required";
//     if (!formData.requestDetails) newErrors.requestDetails = "Request details are required";
//     if (!formData.location) newErrors.location = "Location is required";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submission attempted");
    
//     if (!validateForm()) {
//       console.log("Form validation failed", errors);
//       return;
//     }

//     setIsSubmitting(true); // Set loading state

//     try {
//       // Prepare data - map form fields to match backend expectations
//       const requestData = {
//         name: formData.name,
//         email: formData.email,
//         contactNumber: formData.contact, // Changed to match backend field name
//         address: formData.address,
//         requestDetails: formData.requestDetails,
//         location: formData.location
//       };

//       console.log("Sending data:", requestData);

//       // Use the helper function instead of direct fetch
//       const data = await submitRequest(requestData);
      
//       console.log("Request Response:", data);
//       alert(data.message || "Request submitted successfully!");

//       // Reset form
//       setFormData({
//         name: "",
//         email: "",
//         contact: "",
//         address: "",
//         requestDetails: "",
//         location: ""
//       });
//       setErrors({});
//     } catch (error) {
//       console.error("Error submitting request:", error);
//       // Error handling is now in the helper function
//     } finally {
//       setIsSubmitting(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="ps-form-outer-wrapper">
//       <div className="ps-form-inner-container">
//         <div className="ps-form-card">
//           <h2 className="ps-form-heading">Submit Your Details</h2>
//           <form onSubmit={handleSubmit} className="ps-form">
//             <div className="form-group mb-3">
//               <label htmlFor="name">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               {errors.name && <div className="text-danger">{errors.name}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {errors.email && <div className="text-danger">{errors.email}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="contact">Contact Number</label>
//               <input
//                 type="tel"
//                 className="form-control"
//                 id="contact"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//               />
//               {errors.contact && <div className="text-danger">{errors.contact}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="address">Address</label>
//               <textarea
//                 className="form-control"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 rows="2"
//               ></textarea>
//               {errors.address && <div className="text-danger">{errors.address}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="requestDetails">Request Details</label>
//               <textarea
//                 className="form-control"
//                 id="requestDetails"
//                 name="requestDetails"
//                 value={formData.requestDetails}
//                 onChange={handleChange}
//                 rows="3"
//               ></textarea>
//               {errors.requestDetails && <div className="text-danger">{errors.requestDetails}</div>}
//             </div>

//             <div className="form-group mb-3">
//               <label htmlFor="location">Location</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="location"
//                 name="location"
//                 value={formData.location}
//                 onChange={handleChange}
//               />
//               {errors.location && <div className="text-danger">{errors.location}</div>}
//             </div>

//             <button 
//               type="submit" 
//               className="ps-submit-button btn btn-primary"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SubmitForm;


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../LandingCss/SubmitForm.css";
import { submitRequest } from "../../App"; // Import the helper function

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
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state

  // Get the user ID from localStorage (assuming it's stored there after login)
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

    setIsSubmitting(true); // Set loading state

    try {
      // Prepare data - map form fields to match backend expectations
      const requestData = {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contact, // Changed to match backend field name
        address: formData.address,
        requestDetails: formData.requestDetails,
        location: formData.location
      };

      console.log("Sending data:", requestData);

      // Use the helper function instead of direct fetch
      const data = await submitRequest(requestData);
      
      console.log("Request Response:", data);
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
      // Error handling is now in the helper function
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <section id="SubmitForm">
      <div className="ps-form-outer-wrapper">
        <div className="ps-form-inner-container">
          <div className="ps-form-card">
            <h2 className="ps-form-heading">Submit Your Details</h2>
            <form onSubmit={handleSubmit} className="ps-form">
              <div className="form-group mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="contact">Contact Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                />
                {errors.contact && <div className="text-danger">{errors.contact}</div>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="address">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="2"
                ></textarea>
                {errors.address && <div className="text-danger">{errors.address}</div>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="requestDetails">Request Details</label>
                <textarea
                  className="form-control"
                  id="requestDetails"
                  name="requestDetails"
                  value={formData.requestDetails}
                  onChange={handleChange}
                  rows="3"
                ></textarea>
                {errors.requestDetails && <div className="text-danger">{errors.requestDetails}</div>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />
                {errors.location && <div className="text-danger">{errors.location}</div>}
              </div>

              <button 
                type="submit" 
                className="ps-submit-button btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmitForm;