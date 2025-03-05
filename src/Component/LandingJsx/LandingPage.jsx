
import SaftyCards from "../LandingJsx/UniquesaftyCards";
import CompanyOverview from "../LandingJsx/GotoAbout"
import FeatureCards from '../LandingJsx/Features'
import "bootstrap-icons/font/bootstrap-icons.css";
import CardGrid from '../LandingJsx/Blogs';
import AccordionComponent from '../LandingJsx/FAQ'
import Footer from '../LandingJsx/Last'
import "../LandingCss/homeLogo.css";
import EnterApp from '../LandingJsx/EnterApp'
import  Navbar from '../LandingJsx/Navbar'


function LandingPage() {
  return (
    <>
      < Navbar />
      <EnterApp/>
      <SaftyCards />
      <CompanyOverview />
      <FeatureCards />
     <CardGrid />
     <AccordionComponent title="Frequently Asked Questions!" />
     <Footer />
    </>
  );
}

export default LandingPage;