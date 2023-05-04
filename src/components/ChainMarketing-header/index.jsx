import React from "react";

const ChainMarketingHeader = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/8.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Chain Marketing</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                Services
                <span>/</span>
                <a href="#0" className="active">
                  Chain Marketing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ChainMarketingHeader;
