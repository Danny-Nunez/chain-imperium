import React from "react";
import Split from "../Split";

const ChainMarketingIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>How to Really Market</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                In the age of digital marketing, it has become increasingly important for businesses and creators to leverage a variety of tools and strategies to reach their target audience. From blockchain press releases to social media marketing and community management, there are many ways to engage with customers and build a brand presence online. Other techniques such as Discord and Telegram marketing, KOL influencer marketing, email and content marketing, reputation management, search engine optimization, and growth hacking are also critical to success in the digital landscape. By combining art and technology, creators and brands can empower themselves to stand out and connect with audiences in meaningful ways.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainMarketingIntro;
