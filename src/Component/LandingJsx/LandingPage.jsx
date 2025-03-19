
// import About from "./About";
// import CompanyOverview from "./GotoAbout"
// import Feature  from './Features'
// import Blogs from './Blogs';
// import FAQ from './FAQ'
// import Footer from './Last'
// import "../LandingCss/homeLogo.css";
// import EnterApp from './EnterApp'
// import  Navbar from './Navbar'
// import { Routes,Route } from "react-router-dom";
// // import  SignupForm from   "../../Component/LandingCss/GotoAbout.css";


// function LandingPage() {
//   return (
//     <>
//     {/* <Routes>
//     <Route path="/signup" element={<SignupForm />} />
//     </Routes> */}
//       < Navbar />
//       <EnterApp/>
//       <About />
//       <CompanyOverview />
//       <Feature  />
//      <Blogs/>
//      <FAQ title="Frequently Asked Questions!" />
//      <Footer />
//     </>
//   );
// }

// export default LandingPage;

import { Link } from "react-router-dom";
import About from "./About";
import CompanyOverview from "./GotoAbout";
import Feature from './Features';
import Blogs from './Blogs';
import FAQ from './FAQ';
import Footer from './Last';
import "../LandingCss/homeLogo.css";
import Navbar from './Navbar';
// Import EnterApp component but we'll wrap it with Link
import EnterApp from './EnterApp';

function LandingPage() {
  return (
    <>
      <Navbar />
      {/* Wrap the EnterApp component with Link to navigate to signup */}
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <EnterApp />
      </Link>
      <About />
      <CompanyOverview />
      <Feature />
      <Blogs />
      <FAQ title="Frequently Asked Questions!" />
      <Footer />
    </>
  );
}

export default LandingPage;