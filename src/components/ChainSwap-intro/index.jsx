import React, { useState }  from "react";
import Split from "../Split";
import Head from 'next/head';


const ChainSwapIntro = () => {
  

  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>ChainSwap</h4>
              <p>Make money with your own swap</p>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                <div className="Uniswap">
                <div>
        
      </div>       
                  <iframe className="iframe-container" src="https://chainswap.vercel.app/"  />
                </div>
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainSwapIntro;
