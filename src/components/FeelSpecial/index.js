import React from "react";
import Button from "../common/Button";
import "./feelSpecial.css";

const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
            get your productivity timer higher.
            </div>
            <div className="photo-section-subheading">
          attend your first session for free.
            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
              explore and join communities which helps you grow your personal and professional skills from the better.
            </div>
            <div className="photo-section-button">
              <Button buttonText="Explore communities" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
