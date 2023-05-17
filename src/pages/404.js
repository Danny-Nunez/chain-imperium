import React from "react";
import Head from "next/head";
import Script from "next/script";
import Lottie from "react-lottie";
import animationData from "../../public/img/404.json"
import Navbar from "../components/Navbar";
import DarkTheme from '../layouts/Dark'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Custom404() {
    return (
    <>
    <DarkTheme>
    <Head>
        <title>Chain Imperium</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Navbar />
    <div className="NoPageWrap"><div className="lottieWrap"><Lottie options={defaultOptions} height={450}
    width={700}/></div><div className="NoPageTitle">Oops page not found! </div></div>

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
      ></Script>
      </DarkTheme>
    </>
    );
  };