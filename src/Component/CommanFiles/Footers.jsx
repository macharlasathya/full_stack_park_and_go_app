
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./Footers.css";

// const Footer = () => {
//   return (
//     <footer className="footer w-100">
//       <div className="container-fluid px-5">
//         <div className="row py-3">
//           <div className="col-md-3 col-sm-6 mb-3">
//             <h5>ParkNGo</h5>
//             <p>Affordable parking spots across India.</p>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-3">
//             <h5>Top Places</h5>
//             <ul className="list-unstyled">
//               <li><a href="/">JP-Nagar</a></li>
//               <li><a href="/">BTM</a></li>
//               <li><a href="/">Hyderabad</a></li>
//               <li><a href="/">Rajajinagar</a></li>
//               <li><a href="/">Banashankari</a></li>
//               <li><a href="/">Marathahalli</a></li>
//             </ul>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-3">
//             <h5>Contact</h5>
//             <p>2nd Floor, Nextcoworks BTM Layout, Bengaluru, Karnataka 560076</p>
//             <p><strong>Service:</strong> +91 74882 39471</p>
//           </div>
//           <div className="col-md-3 col-sm-6 mb-3">
//             <h5>Follow Us</h5>
//             <div className="d-flex gap-2">
//               <a href="#"><i className="bi bi-facebook"></i></a>
//               <a href="#"><i className="bi bi-twitter"></i></a>
//               <a href="#"><i className="bi bi-instagram"></i></a>
//               <a href="#"><i className="bi bi-linkedin"></i></a>
//             </div>
//           </div>
//         </div>
//         <div className="text-center border-top pt-2">
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
    <footer className="footer w-100">
      <div className="container-fluid px-5">
        <div className="row py-3">
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>ParkNGo</h5>
            <p>Affordable parking spots across India.</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Top Places</h5>
            <ul className="list-unstyled">
              <li><a href="/">JP-Nagar</a></li>
              <li><a href="/">BTM</a></li>
              <li><a href="/">Hyderabad</a></li>
              <li><a href="/">Rajajinagar</a></li>
              <li><a href="/">Banashankari</a></li>
              <li><a href="/">Marathahalli</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Contact</h5>
            <p>2nd Floor, Nextcoworks BTM Layout, Bengaluru, Karnataka 560076</p>
            <p><strong>Service:</strong> +91 74882 39471</p>
          </div>
          <div className="col-md-3 col-sm-6 mb-4">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3 justify-content-start">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center border-top pt-2">
          <p>© {new Date().getFullYear()} ParkNGo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
