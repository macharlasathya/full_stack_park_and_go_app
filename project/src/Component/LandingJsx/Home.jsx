
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; 
import NavBars from '../CommanFiles/NavBars';

const Home = () => {
    const { logout } = useAuth(); 
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

    return (
        <>
            <NavBars />
            <div className="container mt-4">
                <h2>Welcome to Home Page</h2>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </>
    );
};

export default Home;
