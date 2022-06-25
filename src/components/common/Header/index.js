import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
    document.querySelector("body").classList.toggle("body-overflow-visible");
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item"> join free </div>
          <div className="mobile-nav-item"> contact us</div>
        </div>
      </div>
      <div className="max-width flex header">
        {/* <img
          src="/Users/deep/Desktop/overreacted-cred-master/src/components/common/Header/logo.png"
          className="header-logo"
          alt="ok"
        /> */}
        <div className="logo-image"></div>
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            class={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item"> join free</div>
          <div className="header-nav-item">contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
