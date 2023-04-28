/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
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
                src="/img/min-area.jpg"
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
                  About us.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Our creative Ad agency is ranked among the finest in the US.
                  We cultivate smart ideas for start-ups and seasoned players.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                     Our Mission
                  </h6>
                  <p>
                  At Chain Imperium, our mission in the blockchain sector is to establish a comprehensive suite of tools, systems, and services that companies of all sizes, from large corporations to small retail businesses, can leverage. We aim to facilitate their use of this technology and, as a result, drive significant productivity gains. From conceptualization to execution, our strategists and engineers work closely with clients, guiding them along the optimal path for blockchain strategy development tailored to their businesses.
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

export default MinimalArea;
