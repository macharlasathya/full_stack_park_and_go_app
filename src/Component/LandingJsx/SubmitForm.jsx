// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.js";

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
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card shadow-lg p-4 form-container mt-5"> {/* Added mt-5 to move form down */}
//         <h2 className="text-center mb-4">Submit Your Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">Name</label>
//             <input
//               type="text"
//               name="name"
//               className={`form-control ${errors.name ? "is-invalid" : ""}`}
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//             />
//             {errors.name && <div className="invalid-feedback">{errors.name}</div>}
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Email</label>
//             <input
//               type="email"
//               name="email"
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//             />
//             {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Contact</label>
//             <input
//               type="text"
//               name="contact"
//               className={`form-control ${errors.contact ? "is-invalid" : ""}`}
//               value={formData.contact}
//               onChange={handleChange}
//               placeholder="Enter your contact number"
//             />
//             {errors.contact && <div className="invalid-feedback">{errors.contact}</div>}
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Address</label>
//             <textarea
//               name="address"
//               className={`form-control ${errors.address ? "is-invalid" : ""}`}
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="Enter your address"
//               rows="3"
//             />
//             {errors.address && <div className="invalid-feedback">{errors.address}</div>}
//           </div>

//           <button type="submit" className="btn btn-primary w-100">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

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