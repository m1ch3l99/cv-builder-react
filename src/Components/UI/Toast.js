import React from "react";
import useStatValue from "../../Context/StateProvider";
import "../../styles/UI/Toast.css";
const Toast = ({ message }) => {
  const [{ savedInfo }] = useStatValue();
  return (
    <div className={savedInfo ? "toast__slideIn" : "toast"}>
      <h4 className="toast__message">{message}</h4>
    </div>
  );
};

export default Toast;
