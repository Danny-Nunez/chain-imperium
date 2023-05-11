import React, { useEffect }  from "react";
import ChainSwapHeader from "../../components/ChainSwap-header";
import ChainSwapIntro from "../../components/ChainSwap-intro";
import AboutIntro2 from "../../components/About-intro2";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import MinimalArea from "../../components/Minimal-area";
import Navbar from "../../components/Navbar";
import Services4 from "../../components/Services4";
import SkillsCircle from "../../components/Skills-circle";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";

const ChainSwapDark = () => {
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
      <ChainSwapHeader />
      <ChainSwapIntro /> 
      
      {/* <AboutIntro2 /> */}
      <Services4 withPadding withOutTitle />
     
      
      <Footer />
    </DarkTheme>
  );
};

export default ChainSwapDark;
