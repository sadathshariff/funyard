import React from "react";
import "./Banner.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner1 from "../../assets/Banner1.jpg";
import Banner2 from "../../assets/Banner2.jpg";
import Banner3 from "../../assets/Banner3.jpg";
import Banner4 from "../../assets/Banner4.jpg";
import Banner5 from "../../assets/Banner5.jpg";

export const Banner = () => {
  const properties = {
    duration: 1500,
    transitionDuration: 1000,
    easing: "ease",
  };
  const fadeImages = [Banner2, Banner3, Banner4, Banner1, Banner5];

  return (
    <div className="hero_container">
      <Fade {...properties}>
        {fadeImages.map((fadeImage, index) => (
          <div className="hero_container" key={index}>
            <img src={fadeImage} className="hero  resp-img" />
          </div>
        ))}
      </Fade>
    </div>
  );
};
