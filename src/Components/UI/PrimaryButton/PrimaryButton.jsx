import React from "react";
import "./PrimaryButton.scss"
const PrimaryButton = ({ func, text }) => {
  return (
    <button className="primary-button" onClick={func}>
      {text}
    </button>
  );
};

export default PrimaryButton;
