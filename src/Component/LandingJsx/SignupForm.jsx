// import React, { useState } from 'react';

// import '../LandingCss/SignupForm.css';
// import { useNavigate } from 'react-router-dom';

// const SignupForm = () => {
//     const [formType, setFormType] = useState('signup'); // Default to 'signup'
//     const navigate = useNavigate(); // Initialize navigation hook

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const values = Object.fromEntries(formData.entries());
        
//         console.log(`${formType === 'signup' ? 'Signup' : 'Login'} Successful:`, values);
        
//         // Simulate a successful signup/login (in a real app, you'd check credentials via API)
//         setTimeout(() => {
//             navigate('/homepage'); // Navigate to homepage after form submission
//         }, 1000);
//     };

//     return (
//         <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
//             <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
//                 <h2 className="text-center mb-4">
//                     {formType === 'signup' ? 'Sign Up' : 'Login'}
//                 </h2>
                
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor="username" className="form-label">Username</label>
//                         <div className="input-group">
//                             <span className="input-group-text">
//                                 <i className="bi bi-person"></i>
//                             </span>
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 id="username"
//                                 name="username"
//                                 placeholder="Enter Username"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {formType === 'signup' && (
//                         <div className="mb-3">
//                             <label htmlFor="email" className="form-label">Email address</label>
//                             <div className="input-group">
//                                 <span className="input-group-text">
//                                     <i className="bi bi-envelope"></i>
//                                 </span>
//                                 <input
//                                     type="email"
//                                     className="form-control"
//                                     id="email"
//                                     name="email"
//                                     placeholder="Enter Email"
//                                     required
//                                 />
//                             </div>
//                         </div>
//                     )}

//                     <div className="mb-3">
//                         <label htmlFor="password" className="form-label">Password</label>
//                         <div className="input-group">
//                             <span className="input-group-text">
//                                 <i className="bi bi-lock"></i>
//                             </span>
//                             <input
//                                 type="password"
//                                 className="form-control"
//                                 id="password"
//                                 name="password"
//                                 placeholder="Enter Password"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {formType === 'login' && (
//                         <div className="d-flex justify-content-between align-items-center mb-3">
//                             <div className="form-check">
//                                 <input
//                                     type="checkbox"
//                                     className="form-check-input"
//                                     id="remember"
//                                     name="remember"
//                                 />
//                                 <label className="form-check-label" htmlFor="remember">
//                                     Remember me
//                                 </label>
//                             </div>
//                             <a href="#" className="text-decoration-none">
//                                 Forgot password?
//                             </a>
//                         </div>
//                     )}

//                     {formType === 'signup' && (
//                         <div className="mb-3 form-check">
//                             <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 id="terms"
//                                 name="terms"
//                                 required
//                             />
//                             <label className="form-check-label" htmlFor="terms">
//                                 I agree to the terms & conditions
//                             </label>
//                         </div>
//                     )}

//                     <button type="submit" className="btn btn-primary w-100">
//                         {formType === 'signup' ? 'Sign Up' : 'Login'}
//                     </button>

//                     <p className="mt-3 text-center">
//                         {formType === 'signup' ? (
//                             <>
//                                 Already have an account?{' '}
//                                 <a
//                                     href="#"
//                                     onClick={() => setFormType('login')}
//                                     className="text-decoration-none"
//                                 >
//                                     Login
//                                 </a>
//                             </>
//                         ) : (
//                             <>
//                                 Don't have an account?{' '}
//                                 <a
//                                     href="#"
//                                     onClick={() => setFormType('signup')}
//                                     className="text-decoration-none"
//                                 >
//                                     Sign up
//                                 </a>
//                             </>
//                         )}
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default SignupForm;



import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../LandingCss/SignupForm.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // If validation is successful, navigate to the main app
    navigate('/app');
  };

  return (
    <div className="signup-wrapper">
      <div className="card">
        <h2 className="text-center">Create Your Account</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>
            </label>
          </div>
          
          <button type="submit" className="btn btn-primary w-100">Create Account</button>
        </form>
        
        <div className="mt-3 text-center">
          <p>Already have an account? <Link to="/login" className="text-decoration-none">Log In</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;