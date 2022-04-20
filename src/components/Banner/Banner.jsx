import React from "react";
import "./Banner.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner4 from "../../assets/Banner4.jpg";

export const Banner = () => {
  const properties = {
    duration: 3000,
    transitionDuration: 1000,
    easing: "ease",
  };
  const fadeImages = [
    Banner1,
    Banner2,
    Banner4,
    // "https://images.unsplash.com/photo-1543584756-8f40a802e14f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDI5Mjk5Ng&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    // "https://images.unsplash.com/photo-1579600161224-cac5a2971069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
  ];

  return (
    <div className="hero_container">
      <img src={Banner2} className="hero" />
    </div>

    // <Fade className="hero_container" {...properties}>
    //   {fadeImages.map((fadeImage, index) => (
    //     <div className="hero_container" key={index}>
    //       <img src={fadeImage} className="hero" />
    //     </div>
    //   ))}
    // </Fade>
  );
};
