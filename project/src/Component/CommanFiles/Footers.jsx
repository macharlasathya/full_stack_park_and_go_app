
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Footers.css";

const Footer = () => {
  return (
    <footer className="custom_site_footer w-100">
      <div className="footer_container container-fluid">
        <div className="footer_row row py-4">
          <div className="footer_column col-md-3 col-sm-6">
            <h5 className="footer_heading">ParkNGo</h5>
            <p className="footer_text">Affordable parking spots across India.</p>
          </div>
          
          <div className="footer_column col-md-3 col-sm-6">
            <h5 className="footer_heading">Top Places</h5>
            <ul className="footer_list list-unstyled">
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> GACHIBOWLI PARKING COMPLEX 
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> HITECHCITY PARKING ZONE 
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> MADHAPUR PUBLIC PARKING 
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> KUKATPALLY PARKING HUB 
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i>BEGUMPET SECURE PARKING 
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i>JUBILEE HILLS PREMIUM PARKING  
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footer_column col-md-3 col-sm-6">
            <h5 className="footer_heading">Contact</h5>
            <p className="footer_text">2nd Floor, Nextcoworks BTM Layout, Bengaluru, Karnataka 560076</p>
            <p className="footer_text"><strong>Service:</strong> +91 74882 39471</p>
          </div>
          
          <div className="footer_column col-md-3 col-sm-6">
            <h5 className="footer_heading">Follow Us</h5>
            <div className="footer_social_container d-flex gap-4 justify-content-start">
              <a href="#" className="footer_link"><i className="bi bi-facebook"></i></a>
              <a href="#" className="footer_link"><i className="bi bi-twitter"></i></a>
              <a href="#" className="footer_link"><i className="bi bi-instagram"></i></a>
              <a href="#" className="footer_link"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer_copyright text-center border-top pt-3">
          <p>© {new Date().getFullYear()} ParkNGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;