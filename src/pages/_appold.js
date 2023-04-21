import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/Navbar";
import IntroWithSlider1 from "../components/Intro-with-slider1";
import AboutUs1 from "../components/About-us1";
import BlogsTwoColumnSlider from "../components/Blogs-two-column-slider";
import CallToAction from "../components/Call-to-action";
import Clients1 from "../components/Clients1";
import Footer from "../components/Footer";
import Numbers1 from "../components/Numbers";
import Services1 from "../components/Services1";
import SkillsCircle from "../components/Skills-circle";
import VideoWithTestimonials from "../components/Video-with-testimonials";
import Works1Slider from "../components/Works1-slider";

const MyApp = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
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
  }, [fixedSlider, MainContent, navbarRef]);


  return (
    <>
    
      <Head>
        <title>Avo</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider1 sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs1 />
        <Services1 />
        <Numbers1 />
        <Works1Slider />
        <VideoWithTestimonials />
        <SkillsCircle theme="dark" subBG />
        <Clients1 theme="dark" />
        <BlogsTwoColumnSlider />
        <CallToAction subBG />
        <Footer />
      </div>
      </DarkTheme>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      {/* <Cursor />
      <LoadingScreen />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script
        strategy="beforeInteractive"
        id="wow"
        src="/js/wow.min.js"
      >
      </Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="isotope"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="lazyOnload" 
        id="initWow" 
        src="/js/initWow.js"
      ></Script> */}
    </>
  );
}

export default MyApp;
