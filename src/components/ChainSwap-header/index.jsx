import React from "react";
import Spline from '@splinetool/react-spline';

const ChainSwapHeader = () => {
  return (
    <header
      className="chainswap-header bg-img valign parallaxie"
      // style={{ backgroundImage: "url(/img/slid/7.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>ChainSwap</h1>
              <div className="path">
                
                <span>Web3 Tools</span>
                
              </div>
            </div>
          </div>
        </div>
      </div>
 
<div className="iframeheader">
<Spline loading-anim scene="https://prod.spline.design/EDqPXegW7Jh4sa4S/scene.splinecode" />  
</div>

      {/* <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>About Us</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                <a href="#0" className="active">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default ChainSwapHeader;
