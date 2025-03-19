
// import { Routes, Route } from "react-router-dom";
// import LandingPage from "./Component/LandingJsx/LandingPage";
// import SignupForm from "./Component/LandingJsx/SignupForm";
// import Home from "./Component/LandingJsx/Home";
// import SubmitForm from "./Component/LandingJsx/SubmitForm";
// import Footer from "./Component/CommanFiles/Footers";
// import About from "./Component/LandingJsx/About";
// import Feature from "./Component/LandingJsx/Features";
// import Blogs from "./Component/LandingJsx/Blogs";
// import FAQ from "./Component/LandingJsx/FAQ";
// import NavBars from "./Component/CommanFiles/NavBars";
// import "./App.css"; // Ensure this contains necessary styles
// import ParkingSearchCard from "./Component/CommanFiles/ParkingSerachCard"
// import FindCharges from './Component/CommanFiles/FindCharges'
// import ParkingBooking from "./Component/CommanFiles/ParkingBooking"
// import CustomerDetails from "./Component/CommanFiles/CustomerDetails"


// function App() {
//   return (
   
//     <div className="page-container">
//       <NavBars />
//       <div className="main-content">
//         <Routes>
//            {/* <LandingPage/> */}
//         {/* <Route path="/LandingPage" element={<LandingPage/>} /> */}
//           {/* <Route path="/signup" element={<SignupForm />} /> */}
//           <Route path="/SubmitForm" element={<SubmitForm />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Features" element={<Feature />} />
//           <Route path="/Blogs" element={<Blogs />} />
//           <Route path="/FAQ" element={<FAQ/>} />
//           <Route path="/" element={ <ParkingSearchCard />}/>
//           <Route path="/FindCharges" element={<FindCharges/>}/>
//           <Route path="/ParkingBooking" element={<ParkingBooking/>}/>
//           <Route path="/CustomerDetails/:id" element={<CustomerDetails/>}/>
//         </Routes>
//       </div>
//     <Footer />
//     </div>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";
// import LandingPage from "./Component/LandingJsx/LandingPage";
// import SignupForm from "./Component/LandingJsx/SignupForm";
// import Home from "./Component/LandingJsx/Home";
// import SubmitForm from "./Component/LandingJsx/SubmitForm";
// import Footer from "./Component/CommanFiles/Footers";
// import About from "./Component/LandingJsx/About";
// import Feature from "./Component/LandingJsx/Features";
// import Blogs from "./Component/LandingJsx/Blogs";
// import FAQ from "./Component/LandingJsx/FAQ";
// import NavBars from "./Component/CommanFiles/NavBars";
// import "./App.css";
// import ParkingSearchCard from "./Component/CommanFiles/ParkingSerachCard";
// import FindCharges from './Component/CommanFiles/FindCharges';
// import ParkingBooking from "./Component/CommanFiles/ParkingBooking";
// import CustomerDetails from "./Component/CommanFiles/CustomerDetails";
// import Login from "./Component/LandingJsx/Login"; // Import the Login component

// function App() {
//   return (
//     <div className="page-container">
//       <Routes>
//         {/* Landing page as the default route */}
//         <Route path="/" element={<LandingPage />} />
        
//         {/* Signup form route */}
//         <Route path="/signup" element={<SignupForm />} />
//         <Route path="/login" element={<Login />} />
        
//         {/* Main application routes with NavBars */}
//         <Route path="/app/*" element={
//           <>
//             <NavBars />
//             <div className="main-content">
//               <Routes>
//                 <Route path="/" element={<ParkingSearchCard />} />
//                 <Route path="/submit" element={<SubmitForm />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/features" element={<Feature />} />
//                 <Route path="/blogs" element={<Blogs />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/find-charges" element={<FindCharges />} />
//                 <Route path="/parking-booking" element={<ParkingBooking />} />
//                 <Route path="/customer-details/:id" element={<CustomerDetails />} />
//               </Routes>
//             </div>
//             <Footer />
//           </>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import { Routes, Route, Navigate } from "react-router-dom";
// import LandingPage from "./Component/LandingJsx/LandingPage";
// import SignupForm from "./Component/LandingJsx/SignupForm";
// import Home from "./Component/LandingJsx/Home";
// import SubmitForm from "./Component/LandingJsx/SubmitForm";
// import Footer from "./Component/CommanFiles/Footers";
// import About from "./Component/LandingJsx/About";
// import Feature from "./Component/LandingJsx/Features";
// import Blogs from "./Component/LandingJsx/Blogs";
// import FAQ from "./Component/LandingJsx/FAQ";
// import NavBar from "./Component/CommanFiles/NavBars";
// import "./App.css";
// import ParkingSearchCard from "./Component/CommanFiles/ParkingSerachCard";
// import FindCharges from './Component/CommanFiles/FindCharges';
// import ParkingBooking from "./Component/CommanFiles/ParkingBooking";
// import CustomerDetails from "./Component/CommanFiles/CustomerDetails";
// import Login from "./Component/LandingJsx/Login";

// function App() {
//   return (
//     <div className="page-container">
//       <Routes>
//         {/* Landing page as the default route */}
//         <Route path="/" element={<LandingPage />} />
        
//         {/* Signup form route */}
//         <Route path="/signup" element={<SignupForm />} />
        
//         {/* Login form route */}
//         <Route path="/login" element={<Login />} />
        
//         {/* Protected routes redirect after login */}
//         <Route path="/home" element={<Navigate to="/app" replace />} />
        
//         {/* Main application routes with NavBars */}
//         <Route path="/app/*" element={
//           <>
//             <NavBar />
//             <div className="main-content">
//               <Routes>
//                 <Route path="/" element={<ParkingSearchCard />} />
//                 <Route path="/submit" element={<SubmitForm />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/features" element={<Feature />} />
//                 <Route path="/blogs" element={<Blogs />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/find-charges" element={<FindCharges />} />
//                 <Route path="/parking-booking" element={<ParkingBooking />} />
//                 <Route path="/customer-details/:id" element={<CustomerDetails />} />
//               </Routes>
//             </div>
//             <Footer />
//           </>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// import { Routes, Route, Navigate } from "react-router-dom";
// import LandingPage from "./Component/LandingJsx/LandingPage";
// import SignupForm from "./Component/LandingJsx/SignupForm";
// import Home from "./Component/LandingJsx/Home";
// import SubmitForm from "./Component/LandingJsx/SubmitForm";
// import Footer from "./Component/CommanFiles/Footers";
// import About from "./Component/LandingJsx/About";
// import Feature from "./Component/LandingJsx/Features";
// import Blogs from "./Component/LandingJsx/Blogs";
// import FAQ from "./Component/LandingJsx/FAQ";
// import NavBar from "./Component/CommanFiles/NavBars";
// import "./App.css";
// import ParkingSearchCard from "./Component/CommanFiles/ParkingSerachCard";
// import FindCharges from './Component/CommanFiles/FindCharges';
// import ParkingBooking from "./Component/CommanFiles/ParkingBooking";
// import CustomerDetails from "./Component/CommanFiles/CustomerDetails";
// import Login from "./Component/LandingJsx/Login";

// function App() {
//   return (
//     <div className="page-container">
//       <Routes>
//         {/* Landing page as the default route */}
//         <Route path="/" element={<LandingPage />} />
        
//         {/* Signup form route */}
//         <Route path="/signup" element={<SignupForm />} />
        
//         {/* Login form route */}
//         <Route path="/login" element={<Login />} />
        
//         {/* Protected routes redirect after login */}
//         <Route path="/home" element={<Navigate to="/app" replace />} />
        
//         {/* Main application routes with NavBars */}
//         <Route path="/app" element={
//           <>
//             <NavBar />
//             <div className="main-content">
//               <Routes>
//                 <Route index element={<ParkingSearchCard />} />
//                 <Route path="submit" element={<SubmitForm />} />
//                 <Route path="about" element={<About />} />
//                 <Route path="features" element={<Feature />} />
//                 <Route path="blogs" element={<Blogs />} />
//                 <Route path="faq" element={<FAQ />} />
//                 <Route path="find-charges" element={<FindCharges />} />
//                 <Route path="parking-booking" element={<ParkingBooking />} />
//                 <Route path="customer-details/:id" element={<CustomerDetails />} />
//               </Routes>
//             </div>
//             <Footer />
//           </>
//         } />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import LandingPage from "./Component/LandingJsx/LandingPage";
import SignupForm from "./Component/LandingJsx/SignupForm";
import Home from "./Component/LandingJsx/Home";
import SubmitForm from "./Component/LandingJsx/SubmitForm";
import Footer from "./Component/CommanFiles/Footers";
import About from "./Component/LandingJsx/About";
import Feature from "./Component/LandingJsx/Features";
import Blogs from "./Component/LandingJsx/Blogs";
import FAQ from "./Component/LandingJsx/FAQ";
import NavBar from "./Component/CommanFiles/NavBars";
import "./App.css";
import ParkingSearchCard from "./Component/CommanFiles/ParkingSerachCard";
import FindCharges from './Component/CommanFiles/FindCharges';
import ParkingBooking from "./Component/CommanFiles/ParkingBooking";
import CustomerDetails from "./Component/CommanFiles/CustomerDetails";
import Login from "./Component/LandingJsx/Login";

// Layout component with NavBar and Footer
function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Outlet /> {/* This is where nested route components will render */}
      </div>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="page-container">
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Navigate to="/app" replace />} />
        
        {/* App routes with shared layout */}
        <Route path="/app" element={<AppLayout />}>
          <Route index element={<ParkingSearchCard />} />
          <Route path="submit" element={<SubmitForm />} />
          <Route path="about" element={<About />} />
          <Route path="features" element={<Feature />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="find-charges" element={<FindCharges />} />
          <Route path="parking-booking" element={<ParkingBooking />} />
          <Route path="customer-details/:id" element={<CustomerDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;