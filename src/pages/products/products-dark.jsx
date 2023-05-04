import React, { useEffect, useState } from "react";
import ProductHeader from "../../components/Product-header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import { checkout } from "../../common/checkout";
import confetti from 'canvas-confetti';
import { useRouter } from 'next/router';


const Products = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const router = useRouter();
  const { status } = router.query;
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);
  const [showDiv3, setShowDiv3] = useState(false);
  const [showDiv0, setShowDiv0] = useState(true);


  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, []);

  useEffect(() => {
    if (status && status === 'success') {
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }, 2500);
    }
  }, [status]);

  const handleShowDiv0 = () => {
    setShowDiv0(true);
    setShowDiv1(false);
    setShowDiv2(false);
    setShowDiv3(false);
  };

    const handleShowDiv1 = () => {
      setShowDiv0(false);
      setShowDiv1(true);
      setShowDiv2(false);
      setShowDiv3(false);
    };
  
    const handleShowDiv2 = () => {
      setShowDiv0(false);
      setShowDiv1(false);
      setShowDiv2(true);
      setShowDiv3(false);
    };

    const handleShowDiv3 = () => {
      setShowDiv0(false);
      setShowDiv1(false);
      setShowDiv2(false);
      setShowDiv3(true);
    };

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <ProductHeader sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
      <div className="prServiceWrapper">
      {status && status === 'success' && (
  <div className="successMessage">
    <h3>Thank you, <span>Payment Successful.</span></h3>
     You will receive an email shortly with the info needed to complete your pr placement request.
  </div>
)}
{status && status === 'cancel' && (
  <div className='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
    <h3>Something went wrong please try again</h3>
    Payment Unsuccessful
  </div>
)}
      <h4 className="selectionBoxHeader">PR Marketing Tier 1</h4>
      <div className="selectionBox">
        <p>
      <button className="selectionButton" onClick={handleShowDiv0}>Details</button>
      <button className="selectionButton" onClick={handleShowDiv1}>Yahoo Finance</button>
      <button className="selectionButton" onClick={handleShowDiv2}>Business Insider</button>
      <button className="selectionButton" onClick={handleShowDiv3}>Market Watch</button>
      </p>
      </div>

      <div style={{ display: showDiv0 ? 'block' : 'none' }}>
        

      <div className="prServiceWrap">
          <div className="prServiceImage">
            <img className="productImageheader" src="/img/tier1.png" alt="" />
            </div>
      
      <div className="prServiceDetails">
               <h5>GUARANTEED MEDIA PLACEMENTS!</h5> 
              <p> <ul>
          <li>- Place your order and complete the questionnaire.</li>
          <li>- We will pair you with a project manager and copywriter.</li>
          <li>- We write the content in 3-4 business days.</li>
          <li>- You approve the content.</li>
          <li>- Articles are published within 7-14 business days.</li>
          </ul></p>
          </div>
      </div>
      </div>
      

      <div style={{ display: showDiv1 ? 'block' : 'none' }}>
      <div className="prServiceCard">
            <img className="productImage" src="/img/yahoo.png" alt="" />
            <p><h6>1 PR Placement</h6></p>
            <ul className="prlist">
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}700-1100 word article</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Featured on Yahoo! Finance</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Published on yahoofinance.com</li>
          </ul>
          <p><h6>Price $650.00</h6></p>
            <button className="prbutton" onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N0ADSDG6gDcSJ4xYuqJRUn8",
                    quantity: 1
                  }
                ]
              })
            })}>Buy Now</button><button className="prbutton">Learn More +</button>
          </div>
      </div>
      <div style={{ display: showDiv2 ? 'block' : 'none' }}>
      <div className="prServiceCard">
            <img className="productImage" src="/img/businessinsider.png" alt="" />
            <p><h6>1 PR Placement</h6></p>
            <ul className="prlist">
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}700-1100 word article</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Featured on Business Insider</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Published on businessinsider.com</li>
          </ul>
          <p><h6>Price $650.00</h6></p>
            <button className="prbutton" onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N0aNKDG6gDcSJ4xF9RIqlMb",
                    quantity: 1
                  }
                ]
              })
            })}>Buy Now</button><button className="prbutton">Learn More +</button>
          </div>
      </div>

      <div style={{ display: showDiv3 ? 'block' : 'none' }}>
      <div className="prServiceCard">
            <img className="productImage" src="/img/marketwatch.png" alt="" />
            <p><h6>1 PR Placement</h6></p>
            <ul className="prlist">
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}700-1100 word article</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Featured on Market Watch</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Published on marketwatch.com</li>
          </ul>
          <p><h6>Price $650.00</h6></p>
            <button className="prbutton" onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N0aQrDG6gDcSJ4xDDoTsME7",
                    quantity: 1
                  }
                ]
              })
            })}>Buy Now</button><button className="prbutton">Learn More +</button>
          </div>
      </div>

        <div className="prContainer">
          {/* <div className="prServiceCard">
            <img className="productImage" src="/img/yahoo.png" alt="" />
            <p><h6>1 PR Placement</h6></p>
            <ul className="prlist">
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}700-1100 word article</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Featured on Yahoo! Finance</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Published on yahoofinance.com</li>
          </ul>
          <p><h6>Price $650.00</h6></p>
            <button className="prbutton" onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N0ADSDG6gDcSJ4xYuqJRUn8",
                    quantity: 1
                  }
                ]
              })
            })}>Buy Now</button><button className="prbutton">Learn More +</button>
          </div>
            
          <div className="prServiceCard">
            <img className="productImage" src="/img/businessinsider.png" alt="" />
            <p><h6>1 PR Placement</h6></p>
            <ul className="prlist">
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}700-1100 word article</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Featured on Business Insider</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Published on businessinsider.com</li>
          </ul>
          <p><h6>Price $650.00</h6></p>
            <button className="prbutton" onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N0aNKDG6gDcSJ4xF9RIqlMb",
                    quantity: 1
                  }
                ]
              })
            })}>Buy Now</button><button className="prbutton">Learn More +</button>
          </div>

          <div className="prServiceCard">
            <img className="productImage" src="/img/marketwatch.png" alt="" />
            <p><h6>1 PR Placement</h6></p>
            <ul className="prlist">
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}700-1100 word article</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Featured on Market Watch</li>
            <li className="prlistitem">
            <span className={`pe-7s-check`}></span>
            {" "}Published on marketwatch.com</li>
          </ul>
          <p><h6>Price $650.00</h6></p>
            <button className="prbutton" onClick={(() => {
              checkout({
                lineItems: [
                  {
                    price: "price_1N0aQrDG6gDcSJ4xDDoTsME7",
                    quantity: 1
                  }
                ]
              })
            })}>Buy Now</button><button className="prbutton">Learn More +</button>
          </div>
           */}
        </div>

        </div>
      </div>
      <Footer />
    </DarkTheme>
  );
};

export default Products;
