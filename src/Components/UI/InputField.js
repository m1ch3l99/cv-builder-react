import React from "react";
import "../../styles/UI/InputField.css";

const InputField = ({
  disabled,
  value,
  label,
  type,
  placeholder,
  onChangeHandler,
  className,
  max,
  min,
}) => {
  return (
    <div className="inputField">
      <label>{label}</label>
      <input
        max={max}
        min={min}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandler}
        disabled={disabled}
        className={className}
      />
    </div>
  );
};

export default InputField;
