import React from "react";
import ReactDOM from "react-dom";
import useStatValue from "../../Context/StateProvider";
import usePreview from "../../Hooks/usePreview";
import "../../styles/CoreStyles/CvPreview.css";
import style from "../../styles/UI/MUI";
import CV from "../CV/CV";
import { Cancel } from "@material-ui/icons";

const Preview = () => {
  const { cancel } = usePreview();
  const [{ personData }] = useStatValue();

  return (
    <div className="cvPrev">
      <Cancel style={style.cancelIcon} onClick={cancel} />

      {Object.entries(personData.aboutMe).length === 0 ? (
        <h1 className="fallback">
          Start filling in the about me section to see the changes
        </h1>
      ) : (
        <CV />
      )}
    </div>
  );
};

const CvPreview = () => {
  return (
    <>
      {ReactDOM.createPortal(<Preview />, document.getElementById("preview"))}
    </>
  );
};

export default CvPreview;
