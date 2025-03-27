
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../LandingCss/Login.css';
// import { useAuth } from '../../AuthContext'; 
// import { loginUser } from '../../App';

// const LoginForm = () => {
//     const navigate = useNavigate();
//     const { login } = useAuth(); 
//     const [error, setError] = useState('');
    
//     const onFinish = async (e) => {
//         e.preventDefault();
//         const formData = new FormData(e.target);
//         const values = Object.fromEntries(formData.entries());
        
//         try {
//             const userData = {
//                 email: values.email, 
//                 password: values.password
//             };
            
//             const response = await loginUser(userData);
            
//             if (response.token) {
//                 login(response.token); 
//                 localStorage.setItem('userId', response.user.id);
//                 navigate('/app');
//             } else {
//                 setError('Invalid credentials. Please try again.');
//             }
//         } catch (error) {
//             setError('Invalid credentials. Please try again.');
//         }
//     };
    
//     return (
//         <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
//             <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
//                 <h2 className="text-center mb-4">Login</h2>
                
//                 {error && <div className="alert alert-danger">{error}</div>}
                
//                 <form onSubmit={onFinish}>
//                     <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email</label>
//                         <div className="input-group">
//                             <span className="input-group-text">
//                                 <i className="bi bi-envelope"></i>
//                             </span>
//                             <input
//                                 type="email"
//                                 className="form-control"
//                                 id="email"
//                                 name="email"
//                                 placeholder="Enter Email"
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




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LandingCss/Login.css';
import { useAuth } from '../../AuthContext'; 
import { loginUser } from '../../App';

const LoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuth(); 
    const [error, setError] = useState('');

    const onFinish = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());

        try {
            const userData = {
                email: values.email, 
                password: values.password
            };

            const response = await loginUser(userData);

            if (response.token) {
                login(response.token); 
                localStorage.setItem('userId', response.user.id);
                navigate('/app');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            setError('Invalid credentials. Please try again.');
        }
    };

    // Guest login function
    const handleGuestLogin = () => {
        navigate('/app'); // Navigate directly to home
    };

    return (
        <div className="container d-flex justify-content-center align-items-center py-3" style={{ minHeight: '70vh' }}>
            <div className="login-card card p-3 shadow" style={{ maxWidth: 380, width: '100%' }}>
                <h3 className="text-center mb-3">Login</h3>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={onFinish}>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group">
                            <span className="login-input-group-text input-group-text">
                                <i className="bi bi-envelope"></i>
                            </span>
                            <input
                                type="email"
                                className="login-form-input form-control"
                                id="email"
                                name="email"
                                placeholder="Enter Email"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <span className="login-input-group-text input-group-text">
                                <i className="bi bi-lock"></i>
                            </span>
                            <input
                                type="password"
                                className="login-form-input form-control"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                required
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-2">
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
                        <a href="#" className="login-link text-decoration-none">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login button */}
                    <div className="mb-2">
                        <button 
                            type="submit" 
                            className="login-btn-primary btn btn-primary w-100"
                        >
                            Log In
                        </button>
                    </div>

                    {/* Guest Login button */}
                    <div className="mb-2">
                        <button 
                            type="button" 
                            className="login-btn-secondary btn btn-secondary w-100"
                            onClick={handleGuestLogin}
                        >
                            Guest Login
                        </button>
                    </div>

                    <p className="mt-2 text-center">
                        Don't have an account?{' '}
                        <a href="/signup" className="login-link text-decoration-none">Sign Up</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;