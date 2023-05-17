/* eslint-disable @next/next/no-img-element */
import appData from "../../data/app.json";
import axios from "axios";
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Footer = ({ noSubBG }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  

  const subscribe = () => {
    setLoading(true);
    axios
      .put("/api/mailingList", {
        email,
      })
      .then((result) => {
        if (result.status === 200) {
          toast.success(result.data.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Oops! Something went wrong.");
        setLoading(false);
      });
      
    
  };
  
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`}>
      <div className="container">
      <ToastContainer 
    position="bottom-center"
    theme="dark"
    autoClose={8000} 
    />
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img src={`${appData.lightLogo}`} alt="" />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Web : </span> www.chainimperium.com
                  </li>
                  <li>
                    <span>Email : </span> admin@chainimperium.com
                  </li>
                  <li>
                    <span>PR Release : </span> pr@chainimperium.com
                  </li>
                  <li>
                    <span>Phone : </span> (571) 4 9 C H A I N
                  </li>
                  
                  
                </ul>
              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up to our newsletter!</p>

              <div className='my-10'>
      
      <div className='form mt-5'>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type='email'
          placeholder='Your email'
          className="form-group custom-font input">
          </input>
        <button
          onClick={subscribe}
          className={`custom-font subButton ${loading ? "btn-disabled loading" : "subButton-set"}`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Subscribe!"}
        </button>
      </div>
      <hr className='my-5' />
    </div>

            </div>
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">

           <a href='https://www.instagram.com/p/CrySsdYscCa/' target={"_blank"} rel={"noreferrer"}>
           <img src="/img/insta/1.jpg" alt="" />
              </a>
              <a href='https://www.instagram.com/p/CryK592spFp/' target={"_blank"} rel={"noreferrer"}>
           <img src="/img/insta/2.jpg" alt="" />
              </a>
              <a href='https://www.instagram.com/p/CryCTK9s2Oz/' target={"_blank"} rel={"noreferrer"}>
           <img src="/img/insta/3.jpg" alt="" />
              </a>
                
                



               
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          {/* <p>
            <img className="awardSeal" src="/img/awardseal2022.png" alt="" />
          </p> */}
          <p>
            © 2023, Chain Imperium.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
