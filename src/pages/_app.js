import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/Cursor";
import ScrollToTop from "../components/Scroll-to-top";
import FacebookChat from "../components/FacebookChat";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Crafting Blockchain and Web3 Solutions | Chain Imperium</title>
        <meta
          name="description"
          content="Chain Imperium offers blockchain development services, smart contract architectures, NFT marketplace creation, Metaverse development, and more. Contact us for a consultation."
        />
        <link rel="icon" href="/img/favicon.ico" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H35NWP06V7"
        ></script>
      </Head>
      <Cursor />
      <LoadingScreen />
      <FacebookChat />
      <ScrollToTop />
      <Component {...pageProps} />

      <Script strategy="beforeInteractive" id="wow" src="/js/wow.min.js" />
      <Script strategy="beforeInteractive" id="splitting" src="/js/splitting.min.js" />
      <Script id="simpleParallax" src="/js/simpleParallax.min.js" />
      <Script strategy="beforeInteractive" id="isotope" src="/js/isotope.pkgd.min.js" />
      <Script strategy="lazyOnload" id="initWow" src="/js/initWow.js" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H35NWP06V7');
          `,
        }}
      />
    </>
  );
}

export default MyApp;

