import React from "react";
import "./Hero.css";
import handIcon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/men.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Best Deals! Best Prices</h2>

        <div className="hero-hand-icon">
          <p>New</p>
          <img src={handIcon} alt="" height={"50px"} />
          <p>Collection</p>
          <p>For</p>
          <p>Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="" height={"30px"} />
        </div>
      </div>
      <div className="hero-right">
        <img src={men} alt="" height={"400px"} />
      </div>
    </div>
  );
};

export default Hero;
