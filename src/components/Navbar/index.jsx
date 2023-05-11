/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import appData from "../../data/app.json";
import {
  handleDropdown,
  handleMobileDropdown,
} from "../../common/navbar";
import styles from './MenuButton.module.css';


const Navbar = ({ lr, nr, theme }) => {
  const [opened, setOpened] = useState(false);
  React.useEffect(() => {
    
  }, []);

  const handleClick = () => {
    setOpened(!opened);
    handleMobileDropdown();
  };

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
      className={`${styles.menu} ${opened ? styles.opened : ''}`}
      onClick={handleClick}
      aria-expanded="false"
      aria-label="Toggle navigation"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      type="button"
    >
      <svg width="40" height="40" viewBox="0 0 100 100">
        <path className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
        <path className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>

        {/* <button
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
        </button> */}
        

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
                <Link href="/chainmarketing/chainmarketing-dark">
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
                <Link href="/chainswap/chainswap-dark">
                  <a className="dropdown-item">ChainSwap</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              {/* <Link href="/contact/contact-dark">
                <a className="nav-link">Career</a>
              </Link> */}
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
