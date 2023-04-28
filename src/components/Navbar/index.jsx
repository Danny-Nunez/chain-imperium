/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
} from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  React.useEffect(() => {
    
  }, []);
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt="logo" />
              ) : (
                <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
              )
            ) : (
              <img ref={lr} src={`${appData.lightLogo}`} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>

            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </span>
              <div className="dropdown-menu">
                <Link href="/services/blockchain">
                  <a className="dropdown-item">Blockchain Solutions</a>
                </Link>
                <Link href="/services/web3">
                  <a className="dropdown-item">Web3 Software & Services</a>
                </Link>
                <Link href="/services/financial">
                  <a className="dropdown-item">Financial Services</a>
                </Link>
                <Link href="/showcase4/showcase4-dark">
                  <a className="dropdown-item">Chain Marketing</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/about/about-dark">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                products
              </span>
              <div className="dropdown-menu">
                <Link href="/products/products-dark">
                  <a className="dropdown-item">PR Services</a>
                </Link>
                {/* <Link href="/works2/works2-dark">
                  <a className="dropdown-item">Masonry 3 Columns</a>
                </Link>
                <Link href="/works3/works3-dark">
                  <a className="dropdown-item">Masonry 2 Columns</a>
                </Link>
                <Link href="/works4/works4-dark">
                  <a className="dropdown-item">Pinterest List</a>
                </Link> */}
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
                <a className="nav-link">Career</a>
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
