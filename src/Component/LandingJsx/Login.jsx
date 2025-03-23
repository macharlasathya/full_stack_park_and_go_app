

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../LandingCss/Login.css';

// const LoginForm = () => {
//     const navigate = useNavigate();
    
//     const onFinish = (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const values = Object.fromEntries(formData.entries());
//         console.log('Login Successful:', values);
        
//         // After successful login, redirect to the app page with navbar
//         navigate('/app');
//     };
    
//     return (
//         <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
//             <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
//                 <h2 className="text-center mb-4">Login</h2>
                
//                 <form onSubmit={onFinish}>
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
                    
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                         <div className="form-check">
//                             <input
//                                 type="checkbox"
//                                 className="form-check-input"
//                                 id="remember"
//                                 name="remember"
//                             />
//                             <label className="form-check-label" htmlFor="remember">
//                                 Remember me
//                             </label>
//                         </div>
//                         <a href="#" className="text-decoration-none">
//                             Forgot password?
//                         </a>
//                     </div>
                    
//                     <button type="submit" className="btn btn-primary w-100">
//                         Log In
//                     </button>
                    
//                     <p className="mt-3 text-center">
//                         Don't have an account?{' '}
//                         <a href="/signup" className="text-decoration-none">Sign Up</a>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../LandingCss/Login.css';
// import { loginUser } from '../../App'; // Import the loginUser function

// const LoginForm = () => {
//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
    
//     const onFinish = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setError(null);
        
//         const formData = new FormData(e.target);
//         const values = Object.fromEntries(formData.entries());
        
//         try {
//             // Call the API to validate credentials
//             const response = await loginUser(values);
//             console.log('Login Successful:', response);
            
//             // Store authentication token or user data in localStorage/sessionStorage
//             localStorage.setItem('authToken', response.token);
//             localStorage.setItem('user', JSON.stringify(response.user));
            
//             // Then redirect after successful login
//             navigate('/app');
//         } catch (error) {
//             setError('Login failed. Please check your credentials.');
//             console.error('Login error:', error);
//         } finally {
//             setIsLoading(false);
//         }
//     };
    
//     return (
//         <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
//             <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
//                 <h2 className="text-center mb-4">Login</h2>
                
//                 {error && <div className="alert alert-danger">{error}</div>}
                
//                 <form onSubmit={onFinish}>
//                     {/* Form fields remain the same */}
                    
//                     <button 
//                         type="submit" 
//                         className="btn btn-primary w-100" 
//                         disabled={isLoading}
//                     >
//                         {isLoading ? 'Logging in...' : 'Log In'}
//                     </button>
                    
//                     <p className="mt-3 text-center">
//                         Don't have an account?{' '}
//                         <a href="/signup" className="text-decoration-none">Sign Up</a>
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LandingCss/Login.css';
import { loginUser } from '../../App'; // Import the loginUser function

const LoginForm = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    
    const onFinish = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        
        try {
            // Now directly using email field instead of mapping from username
            const userData = {
                email: values.email, // Changed from values.username to values.email
                password: values.password
            };
            
            const response = await loginUser(userData);
            
            // Store auth token
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('userId', response.user.id);
            
            // Redirect to app page after successful login
            navigate('/app');
        } catch (error) {
            setError('Invalid credentials. Please try again.');
        }
    };
    
    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>
                
                {error && <div className="alert alert-danger">{error}</div>}
                
                <form onSubmit={onFinish}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-lock"></i>
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="remember"
                                name="remember"
                            />
                            <label className="form-check-label" htmlFor="remember">
                                Remember me
                            </label>
                        </div>
                        <a href="#" className="text-decoration-none">
                            Forgot password?
                        </a>
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100">
                        Log In
                    </button>
                    
                    <p className="mt-3 text-center">
                        Don't have an account?{' '}
                        <a href="/signup" className="text-decoration-none">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;