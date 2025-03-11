
// import { Routes, Route } from 'react-router-dom';
// import LandingPage from './Component/LandingJsx/LandingPage';
// import SignupForm from './Component/LandingJsx/SignupForm';
// import Home from './Component/LandingJsx/Home';
// import  SubmitForm from './Component/LandingJsx/SubmitForm'
// import Footer from './Component/CommanComponents/Footers';
// import UniquesaftyCards from './Component/LandingJsx/UniquesaftyCards';
// import  Feature from './Component/LandingJsx/Features';
// import Blogs from './Component/LandingJsx/Blogs'
// import FAQ from './Component/LandingJsx/FAQ'
// // import "bootstrap/dist/css/bootstrap.css";
// // import "bootstrap/dist/js/bootstrap.js";
// import Navbars from './Component/CommanComponents/Navbars';


// function App() {
//   return (
//     <>
   
//     <Navbars />
//     <Routes>
//      {/* <Route path="/" element={<LandingPage />} />  */}
//        <Route path="/signup" element={<SignupForm />} />
//       <Route path="/SubmitForm" element={<SubmitForm/>}/> 
//       <Route path="/UniquesaftyCards" element={<UniquesaftyCards/>}/>
//       <Route path="/Features" element={<Feature/>}/>
//       <Route path="/Blogs" element={<Blogs/>}/>
//       <Route path="/FQA" element={<FAQ/>}/>
//     </Routes>
//     <Footer /> 
//     </>
//   );
 
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingJsx/LandingPage";
import SignupForm from "./Component/LandingJsx/SignupForm";
import Home from "./Component/LandingJsx/Home";
import SubmitForm from "./Component/LandingJsx/SubmitForm";
import Footer from "./Component/CommanComponents/Footers";
import UniquesaftyCards from "./Component/LandingJsx/UniquesaftyCards";
import Feature from "./Component/LandingJsx/Features";
import Blogs from "./Component/LandingJsx/Blogs";
import FAQ from "./Component/LandingJsx/FAQ";
import Navbars from "./Component/CommanComponents/Navbars";
import "./App.css"; // Ensure this contains necessary styles
import ParkingSearchCard from "./Component/CommanComponents/ParkingSerachCard"

function App() {
  return (
    <div className="page-container">
      <Navbars />
      <div className="main-content">
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/SubmitForm" element={<SubmitForm />} />
          <Route path="/UniquesaftyCards" element={<UniquesaftyCards />} />
          <Route path="/Features" element={<Feature />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/FQA" element={<FAQ />} />
        </Routes>
      </div>
      <ParkingSearchCard />
      <Footer />
    </div>
  );
}

export default App;


