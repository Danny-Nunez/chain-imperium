import React from "react";
import ProductHeader from "../../components/Product-header";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import DarkTheme from "../../layouts/Dark";
import confetti from 'canvas-confetti';
import { useRouter } from 'next/router';

const ProductsSuccess = () => {
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
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 2000);
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
          
          
        </div>

        
        
        </div>
      </div>
      <Footer />
    </DarkTheme>
  );
};

export default ProductsSuccess;
