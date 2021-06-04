import React from "react";
import useStatValue from "../../Context/StateProvider";
import "../../styles/UI/Switch.css";

const Switch = () => {
  const [{ toggle }, dispatch] = useStatValue();

  const toggleDirection = () => {
    dispatch({
      type: "TOGGLE",
    });
  };

  return (
    <div className="switch">
      <h4>Preview</h4>
      <div className="switch__track">
        <button
          className={!toggle ? `switch__thumb` : `switch__thumb--left`}
          onClick={toggleDirection}
        ></button>
      </div>
    </div>
  );
};

export default Switch;
