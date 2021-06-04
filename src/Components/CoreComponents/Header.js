import React from "react";
import "../../styles/CoreStyles/Header.css";
import CvLogo from "../../assets/images/cvLogo.svg";
import Switch from "../UI/Switch";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={CvLogo} className="header__logo" alt="logo" />
        <h2 className="header__title">CV BUILDER</h2>
      </div>
      <Switch />
    </div>
  );
};

export default Header;
