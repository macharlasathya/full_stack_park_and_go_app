import React from "react";
import axios from "axios";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";
import LandingPage from "./Component/LandingJsx/LandingPage";
import SignupForm from "./Component/LandingJsx/SignupForm";
import SubmitForm from "./Component/LandingJsx/SubmitForm";
import Footer from "./Component/CommanFiles/Footers";
import About from "./Component/LandingJsx/About";
import Feature from "./Component/LandingJsx/Features";
import Blogs from "./Component/LandingJsx/Blogs";
import FAQ from "./Component/LandingJsx/FAQ";
import NavBar from "./Component/CommanFiles/NavBars";
import "./App.css";
import ParkingSearchCard from "./Component/CommanFiles/ParkingSerachCard";
import FindCharges from "./Component/CommanFiles/FindCharges";
import ParkingBooking from "./Component/CommanFiles/ParkingBooking";
import CustomerDetails from "./Component/CommanFiles/CustomerDetails";
import Login from "./Component/LandingJsx/Login";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api/auth";
const BOOKING_API_URL = import.meta.env.VITE_BOOKING_API_URL || "http://localhost:5000/api/bookings";


if (!API_URL) console.error("❌ Auth API URL is not defined. Check your .env file.");
if (!BOOKING_API_URL) console.error("❌ Booking API URL is not defined. Check your .env file.");


export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};


export const submitBooking = async (bookingData) => {
  try {
    
    if (!bookingData) {
      throw new Error("Booking data is required");
    }

    
    const requiredFields = [
      'fullName', 
      'mobileNumber', 
      'vehicleNumber', 
      'entryTime', 
      'exitTime'
    ];

    const missingFields = requiredFields.filter(field => !bookingData[field]);
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

   
    const response = await axios.post(`${BOOKING_API_URL}/create`, bookingData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

   
    return response.data;
  } catch (error) {
    
    console.error("Booking Submission Error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });

  
    throw new Error(
      error.response?.data?.message || 
      error.message || 
      "Booking submission failed. Please try again."
    );
  }
};


function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}


function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}


function App() {
  return (
    <AuthProvider>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Navigate to="/app" replace />} />

        
          <Route path="/app" element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
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
    </AuthProvider>
  );
}

export default App;