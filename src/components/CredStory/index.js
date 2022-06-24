import React from "react";
import "./credStory.css";

const CredStory = () => {
  return (
    <div className="cred-story flex absolute-center">
      <div className="max-width flex story-wrapper">
        <div className="flex cred-story-heading-wrapper">
          <div className="cred-story-heading">
            the GROWSIFIED starts with the hustle to learn a skill.
          </div>
        </div>
        <div className="cred-story-detail">
          <div className="cred-story-para">
            our founder wanted to learn premiere pro a video editing software
            but he could not find a proper video which could get him through. he
            surfed and surfed on the internet but couldn't get the solution.
          </div>
          <div className="cred-story-para">
            at last he found a guy on discord server who guided him, he thought
            what if I take these all brilliant credibles to a single platform
            and therefore the idea of GROWSIFIED striked in his mind.
          </div>
          <div className="cred-story-para">
            come join to make yourself and the nation more CREDIBLE.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredStory;
