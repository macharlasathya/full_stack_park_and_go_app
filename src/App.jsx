import { useState } from "react";
import Navbar from "./Component/LandingJsx/Navbar"; 
import SaftyCards from "./Component/LandingJsx/UniquesaftyCards";
import CompanyOverview from "./Component/LandingJsx/GotoAbout"
import FeatureCards from './Component/LandingJsx/Features'
import "bootstrap-icons/font/bootstrap-icons.css";
import CardGrid from './Component/LandingJsx/Blogs';
import AccordionComponent from './Component/LandingJsx/FAQ'
import Footer from './Component/LandingJsx/Last'
import "./Component/LandingCss/homeLogo.css";
import LoginForm from '../src/Component/Dynamic_pagejsx/Login'
import LandingPage from './Component/LandingJsx/LandingPage'



function App() {
  return (
    <>
      <Navbar />
      <LandingPage/>
      <SaftyCards />
      <CompanyOverview />
      <FeatureCards />
     <CardGrid />
     <AccordionComponent title="Frequently Asked Questions!" />
     <Footer />

     <LoginForm/>
     
    
    </>
  );
}

export default App;

