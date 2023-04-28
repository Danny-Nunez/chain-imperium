import React from "react";
import Split from "../Split";
import web3services4Data from "../../data/sections/web3services4.json";

const Web3Services4 = ({ withBG, withPadding, halfBG, withOutTitle }) => {
  return (
    <section
      className={`services ${withPadding ? "section-padding" : ""} ${
        withBG ? "sub-bg" : ""
      }`}
    >
      <div className="container">
      <h5 className="wow fadeIn web3title" data-wow-delay=".5s">
              Our Work Flow
            </h5>
        {!withOutTitle && (
          <div className="sec-head custom-font text-center">
            <h6 className="wow fadeIn" data-wow-delay=".5s">
              Best Features
            </h6>
            <Split>
              <h3 className="wow words chars splitting" data-splitting>
                Services.
              </h3>
            </Split>
            <span className="tbg">Services</span>
          </div>
        )}
        <div className="row">
          {web3services4Data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div
                className={`item ${
                  index != web3services4Data.length - 1 ? "md-mb50" : ""
                } wow fadeInUp`}
                data-wow-delay={
                  item.id == 1 ? ".5s" : item.id == 2 ? ".3s" : ".8s"
                }
              >
                {/* <span className={`icon ${item.icon}`}></span> */}
                <img className="web3images" src={item.icon} alt="" />
                <h6>{item.title}</h6>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {halfBG && <div className="half-bg bottom"></div>}
    </section>
  );
};

export default Web3Services4;
