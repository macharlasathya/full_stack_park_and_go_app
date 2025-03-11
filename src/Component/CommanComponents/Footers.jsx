import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../CommanComponents/Footers.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          {/* ParkNGo Section */}
          <div className="col-md-3 col-12">
            <h5>ParkNGo</h5>
            <p>We provide the cheap and best<br />parking spot in India.</p>
          </div>

          {/* Top Searched Places */}
          <div className="col-md-3 col-6">
            <h5>Top Searched Places</h5>
            <ul className="list-unstyled">
              <li><a href="/"><i className="bi bi-geo-alt"></i> Parking Spot in JP-Nagar</a></li>
              <li><a href="/"><i className="bi bi-geo-alt"></i> Parking Spot in BTM</a></li>
              <li><a href="/"><i className="bi bi-geo-alt"></i> Parking Spot in Hyderabad</a></li>
              <li><a href="/"><i className="bi bi-geo-alt"></i> Parking Spot in Rajajinagar</a></li>
              <li><a href="/"><i className="bi bi-geo-alt"></i> Parking Spot in Banashankari</a></li>
              <li><a href="/"><i className="bi bi-geo-alt"></i> Parking Spot in Marathahalli</a></li>
            </ul>
          </div>

          {/* Corporate Office Address */}
          <div className="col-md-3 col-6">
            <h5>Corporate Office Address</h5>
            <ul className="list-unstyled corporate-address">
              <li>2nd Floor, Nextcoworks BTM Layout,</li>
              <li>BTM 2nd Stage, Bengaluru, Karnataka 560076</li>
              <li className="customer-service">Customer Service: +91 74882 39471</li>
            </ul>
          </div>

          {/* Discover Section */}
          <div className="col-md-3 col-12">
            <h5>Discover</h5>
            <ul className="list-unstyled">
              <li><a href="/"><i className="bi bi-newspaper"></i> Blogs</a></li>
              <li><a href="/"><i className="bi bi-geo-alt"></i> Request Spot</a></li>
              <li><a href="/"><i className="bi bi-building"></i> Register Spot</a></li>
              <li><a href="/"><i className="bi bi-question-circle"></i> FAQ</a></li>
              <li><a href="/"><i className="bi bi-envelope"></i> Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="m-0">© {new Date().getFullYear()} ParkNGo. All rights reserved.</p>
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






