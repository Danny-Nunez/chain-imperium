/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const ChainMarketingArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/chain-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h3
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  BUILD YOUR BRAND ON THE BLOCKCHAIN
                </h3>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                <a href='https://calendly.com/chainimperium/30min?month=2023-05' target={"_blank"} rel={"noreferrer"}>
                <button className="BookNow">Book Now</button>
              </a> 
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                <h7>EMPOWERING CREATORS AND BRANDS WITH ART AND TECHNOLOGY</h7>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>• Blockchain Press Release & Community Management</p></li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>• Social Media Marketing & Search Engine Optimization</p></li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>• Discord & Telegram Marketing</p></li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>• KOLs Influencers Marketing</p></li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>• Email & Content Marketing</p></li>
                  <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>• Reputation Management & Growth Hacking </p></li>
                  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainMarketingArea;
