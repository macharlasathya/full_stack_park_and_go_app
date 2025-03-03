import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Dynamic_pagecss/Login.css'

const LoginForm = () => {

    const onFinish = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        console.log('Login Successful:', values);
        // Add your login logic here (e.g., API call)
    };

    return (
        <div className="container mt-5 d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
                <h2 className="text-center mb-4">Login</h2>

                <form onSubmit={onFinish}>
                    {/* Username Field */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <div className="input-group">
                            <span className="input-group-text">
                                <i className="bi bi-person"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                placeholder="Enter Username"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Field */}
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

                    {/* Remember Me and Forgot Password */}
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

                    {/* Submit Button */}
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


