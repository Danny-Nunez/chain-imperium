import React from "react";
import Lottie from "react-lottie";
import animationData from "../../public/img/404.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Custom404() {
    return <div className="NoPageWrap"><Lottie options={defaultOptions}/><h3>Oops page not found!</h3></div>
  }