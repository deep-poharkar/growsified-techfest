import React, { useState } from "react";
import "./mobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: "we’ve got you all covered.",
    description:
      "over hundred communities and thousands of brilliant students. you get a chance to learn any skill that you ever wanted to learn.",
    mobile_img: "https://media.sproutsocial.com/uploads/2020/08/subreddits.png",
  },
  {
    heading: " make smartest friends.",
    description:
      " join a community and learn from better peers and make them your friends along the journey.",
    mobile_img:
      "https://images.unsplash.com/photo-1543807535-eceef0bc6599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    heading: "don't mine for the quality content.",
    description:
      " finding a perfect video to learn from is as hard as getting a girlfriend in engineering but we have smartest minds to teach and help.",
    mobile_img:
      "https://images.unsplash.com/photo-1584697964190-7383cbee8277?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
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
