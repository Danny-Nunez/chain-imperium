import React from "react";
import Split from "../Split";

const AboutIntro2 = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Our Mission</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                At Chain Imperium, our mission in the blockchain sector is to establish a comprehensive suite of tools, systems, and services that companies of all sizes, from large corporations to small retail businesses, can leverage. We aim to facilitate their use of this technology and, as a result, drive significant productivity gains. From conceptualization to execution, our strategists and engineers work closely with clients, guiding them along the optimal path for blockchain strategy development tailored to their businesses.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro2;
