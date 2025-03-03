import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Dynamic_pagecss/Signup.css'

const SingupForm = ({ isSignup }) => {
    const [formType, setFormType] = useState(isSignup ? 'signup' : 'login');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        console.log(`${formType === 'signup' ? 'Signup' : 'Login'} Successful:`, values);
        
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="card p-4 shadow" style={{ maxWidth: 400, width: '100%' }}>
                <h2 className="text-center mb-4">
                    {formType === 'signup' ? 'Sign Up' : 'Login'}
                </h2>
                
                <form onSubmit={handleSubmit}>
                   
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

                    {formType === 'signup' && (
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
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
                    )}

                    {
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

                   
                    {formType === 'login' && (
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
                    )}

                    {formType === 'signup' && (
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="terms"
                                name="terms"
                                required
                            />
                            <label className="form-check-label" htmlFor="terms">
                                I agree to the terms & conditions
                            </label>
                        </div>
                    )}

                    
                    <button type="submit" className="btn btn-primary w-100">
                        {formType === 'signup' ? 'Sign Up' : 'Login'}
                    </button>

                    <p className="mt-3 text-center">
                        {formType === 'signup' ? (
                            <>
                                Already have an account?{' '}
                                <a
                                    href="#"
                                    onClick={() => setFormType('login')}
                                    className="text-decoration-none"
                                >
                                    Login
                                </a>
                            </>
                        ) : (
                            <>
                                Don't have an account?{' '}
                                <a
                                    href="#"
                                    onClick={() => setFormType('signup')}
                                    className="text-decoration-none"
                                >
                                    Sign Up
                                </a>
                            </>
                        )}
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SingupForm;


