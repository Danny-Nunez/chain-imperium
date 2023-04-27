import React from "react";
import BlockchainHeader from "../../components/Blockchain-header";
import BlockchainIntro from "../../components/Blockchain-intro";
import CallToAction from "../../components/Call-to-action";
import Clients1 from "../../components/Clients1";
import Footer from "../../components/Footer";
import BlockchainArea from "../../components/Blockchain-area";
import Navbar from "../../components/Navbar";
import BlockchainServices4 from "../../components/BlockchainServices4";
import SkillsCircle from "../../components/Skills-circle";
import Team1 from "../../components/Team1";
import VideoWithTestimonials from "../../components/Video-with-testimonials";
import DarkTheme from "../../layouts/Dark";

const BlockchainDark = () => {
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
      <BlockchainHeader />
      <BlockchainIntro />
      <BlockchainServices4 withPadding withOutTitle />
      
      <BlockchainArea />
      
      <Footer />
    </DarkTheme>
  );
};

export default BlockchainDark;
