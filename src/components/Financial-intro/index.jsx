import React from "react";
import Split from "../Split";

const FinancialIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Financial Services</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                We provide cutting-edge blockchain financial services that revolutionize traditional processes in the financial industry. Our offerings include cross-border payments, remittances, digital identity management, smart contracts, tokenization of assets, and decentralized finance (DeFi) solutions. By leveraging the power of blockchain technology, we help financial institutions streamline operations, reduce costs, and foster greater transparency and trust in their transactions.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialIntro;
