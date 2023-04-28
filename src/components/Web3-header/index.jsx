import React from "react";

const Web3Header = () => {
  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{ backgroundImage: "url(/img/slid/5.jpg)" }}
      data-overlay-dark="5"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>Web3</h1>
              <div className="path">
                <a href="#0">Home</a>
                <span>/</span>
                  Services
                <span>/</span>
                <a href="#0" className="active">
                  Web3 Software & Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Web3Header;
