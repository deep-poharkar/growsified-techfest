import React from "react";
import Button from "../common/Button";
import "./credSecurity.css";

const CredSecurity = () => {
  return (
    <div className="cred-security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top dynamic-margin">
            <div className="photo-section-heading">
             for the retros and the genz.
            </div>
            <div className="photo-section-subheading">
            classical or hip hop we got both.
            </div>
          </div>
          <div className="photo-section-bottom dynamic-margin">
            <div className="photo-section-description">
              GROWSIFIED has every community to learn from weather it be music or rap,cinema or social media, painting or photoshop.
            </div>
            <div className="photo-section-button">
              <Button buttonText=" see your interest" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredSecurity;
