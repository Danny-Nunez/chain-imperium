import React from "react";
import addParlx from "../../common/addParlx";

const ProductHeader = ({ sliderRef }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      addParlx()
    }
  }, [pageLoaded])
  return (
    <header ref={sliderRef} className="works-header fixed-slider hfixd valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11 static">
            <div className="capt mt-50">
              <div className="parlx">
                <h2 className="custom-font">
                  <span>Shopping</span>PR Marketing Packages.
                </h2>
                <p>
                We forge influential messages that transform the world.
                </p>
              </div>

              <div className="bactxt custom-font valign">
                <span className="full-width">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProductHeader;
