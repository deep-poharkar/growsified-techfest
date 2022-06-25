import React from "react";
import "./button.css";
const Button = ({ buttonText, onClick, prefix, customClass }) => {
  return (
    <div
      className={`button-wrapper flex absolute-center ${customClass}`}
      onClick={"https://www.instagram.com/photxnray/"}
    >
      {prefix}
      {buttonText}
    </div>
  );
};

export default Button;
