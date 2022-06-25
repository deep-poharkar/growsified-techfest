import React from "react";
import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>join communities. learn skills. get ahead of your peers.</div>
      </div>
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">learn everything that interests you.</div>
        <div className="hero-subheading">
          join along with top growing industries.
        </div>
        <Button
          buttonText=" Join Communities"
          onClick={"https://www.instagram.com/photxnray/ "}
        />
      </div>
    </div>
  );
};

export default HeroSection;
