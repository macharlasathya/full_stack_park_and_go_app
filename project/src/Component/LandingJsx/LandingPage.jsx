
import { Link } from "react-router-dom";
import About from "./About";
import CompanyOverview from "./GotoAbout";
import Feature from "./Features";
import Blogs from "./Blogs";
import FAQ from "./FAQ";
import Footer from "./Last";
import "../LandingCss/homeLogo.css";
import Navbar from "./Navbar";
import EnterApp from "./EnterApp";
import SubmitForm from "./SubmitForm";

function LandingPage() {
  return (
    <>
      <Navbar />
      <EnterApp />
      <About />
      <CompanyOverview />
      <Feature />
      <Blogs />
      <FAQ title="Frequently Asked Questions!" />
      <SubmitForm/>
      <Footer />
    </>
  );
}

export default LandingPage;


