
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Footers.css";

// const Footer = () => {
//   return (
//     <footer className="footer w-100">
//       <div className="container-fluid">
//         <div className="row py-4">
//           <div className="col-md-3 col-sm-6 mb-4">
//             <h5>ParkNGo</h5>
//             <p>Affordable parking spots across India.</p>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-4">
//             <h5>Top Places</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="/">
//                   <i className="bi bi-geo-alt location-icon"></i> HYDERABAD,TELANGANA
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <i className="bi bi-geo-alt location-icon"></i> BANGLOORE,KARNATAKA
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <i className="bi bi-geo-alt location-icon"></i> CHENNAI,TAMILNADU
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <i className="bi bi-geo-alt location-icon"></i> MUMBAI,MAHARASTRA
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <i className="bi bi-geo-alt location-icon"></i> TIRUVANANTHAPURAM,KERALA
//                 </a>
//               </li>
//               <li>
//                 <a href="/">
//                   <i className="bi bi-geo-alt location-icon"></i> GANDHINAGAR,GUJRAT
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-4">
//             <h5>Contact</h5>
//             <p>2nd Floor, Nextcoworks BTM Layout, Bengaluru, Karnataka 560076</p>
//             <p><strong>Service:</strong> +91 74882 39471</p>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-4">
//             <h5>Follow Us</h5>
//             <div className="d-flex gap-4 justify-content-start">
//               <a href="#"><i className="bi bi-facebook"></i></a>
//               <a href="#"><i className="bi bi-twitter"></i></a>
//               <a href="#"><i className="bi bi-instagram"></i></a>
//               <a href="#"><i className="bi bi-linkedin"></i></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center border-top pt-3">
//           <p>© {new Date().getFullYear()} ParkNGo. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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
                  <i className="bi bi-geo-alt footer_location_icon"></i> HYDERABAD, TELANGANA
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> BANGALORE, KARNATAKA
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> CHENNAI, TAMILNADU
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> MUMBAI, MAHARASHTRA
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> THIRUVANANTHAPURAM, KERALA
                </a>
              </li>
              <li className="footer_list_item">
                <a href="/" className="footer_link">
                  <i className="bi bi-geo-alt footer_location_icon"></i> GANDHINAGAR, GUJARAT
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