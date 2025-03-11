// import React from 'react';
// import '../LandingCss/EnterApp.css';
// import landingImage from '../../assets/homeLogo.jpg';
// import { Link } from 'react-router-dom';



import React from 'react';
import '../LandingCss/EnterApp.css';
import landingImage from '../../assets/homeLogo.jpg';
import { Link } from 'react-router-dom';

const EnterApp = () => {
  return (
    <div className="image-container">
      <img src={landingImage} alt="Landing" className="background-image" />
      <Link className="enter-button" to="/signup">Enter the App</Link>
    </div>
  );
};

export default EnterApp;
