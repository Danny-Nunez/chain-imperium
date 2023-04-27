import React from "react";
import Split from "../Split";

const BlockchainIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Web 3.0 solutions for your business.</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                We utilize the in-depth knowledge and extensive technical experience of top experts at Chain Imperium to tackle your most complex technology challenges and develop the skills necessary to excel in the blockchain domain. Our all-encompassing blockchain consulting services enable organizations to achieve enduring performance improvements and drive innovation more effectively within the technology realm.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainIntro;
