import React from "react";
import ChainMarketingHeader from "../../components/ChainMarketing-header";
import ChainMarketingIntro from "../../components/ChainMarketing-intro";
import AboutIntro2 from "../../components/About-intro2";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import ChainMarketingArea from "../../components/ChainMarketing-area";
import Navbar from "../../components/Navbar";
import Services4 from "../../components/Services4";
import SkillsCircle from "../../components/Skills-circle";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";

const ChainMarketingDark = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <ChainMarketingHeader />
      <ChainMarketingIntro />
     
      <ChainMarketingArea />
      
      <CallToAction subBG />
      <Footer />
    </DarkTheme>
  );
};

export default ChainMarketingDark;
