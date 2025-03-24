
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../LandingCss/Login.css';
import { loginUser } from '../../App'; 

const LoginForm = () => {
    const navigate = useNavigate();
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
            
          
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('userId', response.user.id);
            
            
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