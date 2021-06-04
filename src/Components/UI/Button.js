import React from "react";
import "../../styles/UI/Button.css";

const Button = ({ children, type, onClickHandler, disabled, className }) => {
  return (
    <button
      className={`button ${className}`}
      type={type}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
