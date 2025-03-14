
import About from "./About";
import CompanyOverview from "./GotoAbout"
import Feature  from './Features'

import Blogs from './Blogs';
import FAQ from './FAQ'
import Footer from './Last'
import "../LandingCss/homeLogo.css";
import EnterApp from './EnterApp'
import  Navbar from './Navbar'


function LandingPage() {
  return (
    <>
      < Navbar />
      <EnterApp/>
      <About />
      <CompanyOverview />
      <Feature  />
     <Blogs/>
     <FAQ title="Frequently Asked Questions!" />
     <Footer />
    </>
  );
}

export default LandingPage;