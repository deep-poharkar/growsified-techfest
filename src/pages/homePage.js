import React from "react";

import BrandsLove from "../components/BrandsLove";
import Footer from "../components/common/footer";
import Header from "../components/common/Header";
import CredSecurity from "../components/CredSecurity";
import CredStory from "../components/CredStory";
import FeelSpecial from "../components/FeelSpecial";
import HeroSection from "../components/HeroSection";
import MobileScroll from "../components/MobileScroll";
import WindowPeak from "../components/WindowPeak";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeelSpecial />
      <BrandsLove />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />

      <Footer />
    </>
  );
};

export default HomePage;
