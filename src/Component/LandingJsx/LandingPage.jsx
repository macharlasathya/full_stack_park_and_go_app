import React from 'react';
import '../LandingCss/LandingPage.css';
import landingImage from '../../assets/homeLogo.jpg';


const LandingPage = () => {
    return (
        <div className="image-container">
            <img 
                src={landingImage} 
                alt="Landing" 
                className="background-image" 
            />
            <button 
                className="enter-button" 
                onClick={() => window.location.href = '/main-page'}
            >
                Enter the App
            </button>
        </div>
    );
};

export default LandingPage;
