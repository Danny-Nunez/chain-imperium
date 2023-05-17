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
    return <div className="NoPageWrap"><div className="lottieWrap"><Lottie options={defaultOptions} height={450}
    width={700}/></div><div className="NoPageTitle">Oops page not found! </div></div>
  }