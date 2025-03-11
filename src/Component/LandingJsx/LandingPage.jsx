
import UniquesaftyCards from "../LandingJsx/UniquesaftyCards";
import CompanyOverview from "../LandingJsx/GotoAbout"
import Feature  from '../LandingJsx/Features'

import Blogs from '../LandingJsx/Blogs';
import FAQ from '../LandingJsx/FAQ'
import Footer from '../LandingJsx/Last'
import "../LandingCss/homeLogo.css";
import EnterApp from '../LandingJsx/EnterApp'
import  Navbar from '../LandingJsx/Navbar'


function LandingPage() {
  return (
    <>
      < Navbar />
      <EnterApp/>
      <UniquesaftyCards />
      <CompanyOverview />
      <Feature  />
     <Blogs/>
     <FAQ title="Frequently Asked Questions!" />
     <Footer />
    </>
  );
}

export default LandingPage;