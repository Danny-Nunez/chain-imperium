/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const BlockchainArea = () => {
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
                src="/img/block-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  Blockchain Consultation
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Our team adeptly deploys your blockchain solutions by employing diverse tools and components.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                
                  <p>
                  • Initial Public Offering (IPO) &
Initial Coin Offering (ICO) advisory service
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  
                  <p>
                  • Start-up infrastructure & DeFi Solutions Development
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>
                  • Project & Business Plan development 
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>
                  • VC Relations & Fundraising
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>
                  • Coin & Token utilization, Integration
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <p>
                  • Security Token Offering Solutions & Smart Contract Architecture
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainArea;
