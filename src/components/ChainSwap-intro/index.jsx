import React, { useState }  from "react";
import Split from "../Split";
import Head from 'next/head';


const ChainSwapIntro = () => {
  

  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3pt2 col-md-4">
            <div className="htit sm-mb30">
              <h4>ChainSwaps</h4>
              <p>Chainswap provides a decentralized and inclusive trading environment, presenting opportunities for liquidity provision and incorporating innovative features that have bolstered its prominence within the decentralized finance (DeFi) ecosystem. It enables users to generate income through personal swap setups and establish wallet configurations to collect fees. One prominent challenge faced by many startup cryptocurrencies is showcasing their coin logo on Uniswap; however, Chainswap effectively resolves this issue. Additionally, Chainswap facilitates seamless token integration by supporting a broad spectrum of tokens, encompassing established ERC-20 tokens as well as emerging ones. As a result, users gain access to a diverse array of cryptocurrency assets and can actively engage with burgeoning token ecosystems.

              </p>
            </div>
          </div>
          <div className="col-lg-8pt2 offset-lg-1 col-md-8">
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
        {/* <div className="dexChart">
      
       <h3>ChainCharts</h3>
       <p>We offer custom charts power by Dextools for your web3 project!</p>
        <iframe className="wrapChart"
          width="100%"
          height="700"
          frameBorder="0"
          scrolling="no"
          src="https://dexscreener.com/ethereum/0x508F74D5080d4aD6D1d91BAe0C1AcB5d9418FD2d?embed=1&theme=dark&info=0"></iframe>
  <div className="barblock">.</div>
        </div> */}
        
      </div>
      
    </section>
  );
};

export default ChainSwapIntro;
