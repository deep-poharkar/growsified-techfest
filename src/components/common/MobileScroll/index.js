import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";
import mobile_img from "./mockup 1.png";

const scrollData = [
  {
    heading: "we’ve got you all covered.",
    description:
      "over hundred communities and thousands of brilliant students you get a chance to learn any skill that you ever wanted to learn.",
    mobile_img: "./mockup 1.png",
  },
  {
    heading: " make smartest friends.",
    description:
      " join a community and learn from better peers and make them your friends along the journey.",
    mobile_img: "./mockup 1.png",
  },
  {
    heading: "don't mine for the quality content.",
    description:
      " finding a perfect video to learn from is as hard as getting a girlfriend in engineering but we have smartest minds to teach and help.",
    mobile_img: "./mockup 1.png",
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="mobile-scroll flex max-width">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} setCurrentImg={setCurrentImg} i={i} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].mobile_img}
              className="mobile-screen-img slide-in-right "
              key={scrollData[currentImg].mobile_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
