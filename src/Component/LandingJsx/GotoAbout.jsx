import React from "react";
import "../../Component/LandingCss/GotoAbout.css";
import Gotoabout from "/src/assets/GotoAbout.jpg"; // Ensure correct path

const CompanyOverview = () => {
  return (
    <div id="Aboutsection"  className="container text-center company-container">
      <div className="row d-flex align-items-start"> 
        {/* Left Side - Image */}
        <div className="col-md-6 text-center">
          <img
            src={Gotoabout}
            alt="Parking"
            className="img-fluid rounded company-image"
          />
        </div>

        {/* Right Side - Content */}
        <div className="col-md-6 text-start d-flex flex-column justify-content-start">
          <h2 className="company-title">Company Overview</h2>

          {/* First Paragraph (Black Text) */}
          <p className="company-text-primary">
            Welcome to <b>ParkSpot</b>, your ultimate destination for hassle-free monthly car parking solutions. 
            At ParkSpot, our mission is to revolutionize the parking experience by providing convenient and 
            reliable monthly car parking services. We value efficiency, reliability, and customer satisfaction above all else.
          </p>

          <h3 className="services-title">Our Services</h3>

          {/* Second Paragraph (Dark Gray Text) */}
          <p className="company-text-secondary">
            ParkSpot offers a range of monthly car parking services designed to meet your needs. With our 
            user-friendly platform, finding and booking a parking spot is quick and easy. Experience the 
            convenience and benefits of secure parking tailored to your requirements.
          </p>

          {/* Footer with Highlighted Text */}
          <p className="company-footer">
            Let's get started and 
            <span className="highlight"> register your Parking Spot</span> 
            with your parking companion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;

