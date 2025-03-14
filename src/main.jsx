
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import LandingPage from './Component/LandingJsx/LandingPage.jsx';
import ParkingCharges from './Component/CommanComponents/FindCharges.jsx';
import NavBars from './Component/CommanComponents/NavBars.jsx';





createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
      <App />
    </BrowserRouter>


    
    
    
    
 
);

