/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "../../Split";
import Link from "next/link";
import appData from "../../../data/app.json";
import handleFullScreenNavbar from "../../../common/handleFullScreenNavbar";

const NavbarFullMenu = ({ theme, lr }) => {
  React.useEffect(() => {
    handleFullScreenNavbar();
  }, []);
  return (
    <>
      <div
        id="navi"
        className={`topnav ${theme ? (theme === "light" ? "light" : "") : ""}`}
      >
        <div className="container-fluid">
          <div className="logo">
            <a href="#0">
              {theme ? (
                theme === "light" ? (
                  <img src={`${appData.darkLogo}`} alt="logo" />
                ) : (
                  <img src={`${appData.lightLogo}`} alt="logo" />
                )
              ) : (
                <img src={`${appData.lightLogo}`} alt="logo" />
              )}
            </a>
          </div>
          <div className="menu-icon">
            <span className="icon">
              <i></i>
              <i></i>
            </span>
            <Split>
              <span className="text" data-splitting>
                <span className="menu-text">Menu</span>
              </span>
            </Split>
          </div>
        </div>
      </div>

      <div className="hamenu">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8">
              <div className="menu-links">
                <ul className="main-menu">
                  <li>
                    <div className="o-hidden">
                    <Link href="/home/home1-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>Home
                              </a>
                            </Link>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                       
                        
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">02.</span>Services
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/services/blockchain">
                              <a className="sub-link">
                                <span className="nm">01.</span>Blockchain Solutions
                              </a>
                            </Link>
                          </div>
                        </li>
                       
                        <li>
                          <div className="o-hidden">
                            <Link href="/services/web3">
                              <a className="sub-link">
                                <span className="nm">03.</span>Web3 Software & Services
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/services/financial">
                              <a className="sub-link">
                                <span className="nm">04.</span>Financial Services
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>



                  <li>
                    <div className="o-hidden">
                      <Link href="/about/about-dark">
                        <a className="link">
                          <span className="nm">03.</span>About Us
                        </a>
                      </Link>
                    </div>
                  </li>
                  
                  <li>
                    <div className="o-hidden">
                      <span className="link dmenu">
                        <span className="nm">04.</span>Products
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="sub-menu">
                      <ul>
                        <li>
                          <div className="o-hidden">
                            <span className="sub-link back">
                              <i className="pe-7s-angle-left"></i> Go Back
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/products/products-dark">
                              <a className="sub-link">
                                <span className="nm">01.</span>PR Services
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div className="o-hidden">
                            <Link href="/chainswap/chainswap-dark">
                              <a className="sub-link">
                                <span className="nm">02.</span>Web3 Tools
                              </a>
                            </Link>
                          </div>
                        </li>
                        
                        
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="o-hidden">
                      <Link href="/contact/contact-dark">
                        <a className="link">
                          <span className="nm">05.</span>Contact
                        </a>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="cont-info">
                <div className="item">
                  <h6>Phone :</h6>
                  <p>(571) 4 9 C H A I N</p>
                </div>
                <div className="item">
                  <h6>Address :</h6>
                  
                  <p>
                    
                  8609 Westwood Center Dr Suite 110, Tysons Corner, VA 22182
                  </p>
                </div>
                <div className="item">
                  <h6>Email :</h6>
                  <p>
                    <a href="#0">admin@chainimperium.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarFullMenu;
