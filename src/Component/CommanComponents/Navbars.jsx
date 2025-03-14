// import React from 'react';
// import './NavBars.css';
// import logoImage from '../../assets/AppLog.png'; // Adjust this path based on your project structure
// import { Link } from 'react-router-dom';

// function NavBars() {
//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#">
//           <div className="brand-container">
//             <div className="brand-logo">
//               <img src={logoImage} alt="Park'n Go Logo" className="rounded-logo" />
//             </div>
//             <span className="brand-text">ParkNGo –Quick parking, easy getaways</span>
//           </div>
//         </a>
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             {/* <li className="nav-item">
//               <a className="nav-link active" aria-current="page" href="#">Home</a>
//             </li> */}
//             <li className="nav-item dropdown">
//               <a 
//                 className="nav-link dropdown-toggle" 
//                 href="#" 
//                 role="button" 
//                 data-bs-toggle="dropdown" 
//                 aria-expanded="false"
//               >
//                 Register Spot
//               </a>
//               <ul className="dropdown-menu">
//                 <Link className="dropdown-item" to="/About">About</Link>
//                 <Link className="dropdown-item" to="/Blogs">Blogs</Link>
//                 <Link className="dropdown-divider"  to="/Features">Features</Link>
//                 <Link  className="dropdown-item" to="/FAQ">FAQ</Link>
//               </ul>
//             </li>
//           </ul>
//           <div className="contact-number">
//             <i className="bi bi-telephone-fill"></i>
//             <span>+919392499936</span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBars;


import React from 'react';
import './NavBars.css';
import logoImage from '../../assets/AppLog.png'; // Adjust this path based on your project structure
import { Link } from 'react-router-dom';

function NavBars() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div className="brand-container">
            <div className="brand-logo">
              <img src={logoImage} alt="Park'n Go Logo" className="rounded-logo" />
            </div>
            <span className="brand-text">ParkNGo –Quick parking, easy getaways</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/SubmitForm">Register Spot</Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/About">About</Link></li>
                <li><Link className="dropdown-item" to="/Blogs">Blogs</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/Features">Features</Link></li>
                <li><Link className="dropdown-item" to="/FAQ">FAQ</Link></li>
              </ul>
            </li>
          </ul>
          <div className="contact-number">
            <i className="bi bi-telephone-fill"></i>
            <span>+919392499936</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBars;