import React from "react";
import Split from "../Split";

const Web3Intro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Web 3.0 Software & Services</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                Chain Imperium offers a range of blockchain development services and solutions to help businesses scale. These include developing mobile, web, and hardware wallets, creating white label crypto exchanges for both centralized and decentralized platforms, designing and building decentralized applications, and developing customized smart contract architectures for various industries. We also provide software development services, Metaverse development, UI/UX/3D design, e-commerce development, and NFT marketplace creation. Additionally, they offer ongoing support and maintenance to ensure the proper functioning of third-party upgrades and app releases. Interested parties can contact us to schedule an initial consultation.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Intro;
