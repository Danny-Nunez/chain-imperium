import React from "react";
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

  

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} />
      <ProductHeader sliderRef={fixedHeader} />
      <div className="main-content" ref={MainContent}>
      <div className="prServiceWrapper">
        <div className="prContainer">

        {status && status === 'success' && (
  <div className='bg-green-100 text-green-700 p-2 rounded border mb-2 border-green-700'>
    <h3>Thank you, Payment Successful.</h3>
     You will receive an email shortly with the info needed to complete your pr placement request.
  </div>
)}
{status && status === 'cancel' && (
  <div className='bg-red-100 text-red-700 p-2 rounded border mb-2 border-red-700'>
    <h3>Something went wrong please try again</h3>
    Payment Unsuccessful
  </div>
)}

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
          
        </div>

        
        
        </div>
      </div>
      <Footer />
    </DarkTheme>
  );
};

export default Products;
