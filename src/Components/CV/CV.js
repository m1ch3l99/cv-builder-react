import React, { createRef } from "react";
import "../../styles/CV/CV.css";
import CVBody from "./CVBody";
import CVHeader from "./CVHeader";
import Pdf from "react-to-pdf";
import useStatValue from "../../Context/StateProvider";
import useMatchMedia from "../../Hooks/useMatchMedia";

const ref = createRef();

const CV = () => {
  const [{ personData }] = useStatValue();
  const { aboutMe } = personData;
  const { mobileView } = useMatchMedia();

  const options = {
    orientation: "portrait",
    unit: "px",
    // heigt, width
    format: !mobileView ? [657, 590] : [812, 200],
  };

  return (
    <div className="cv">
      <div className="ref" ref={ref}>
        <CVHeader />
        <CVBody />
      </div>
      <Pdf
        targetRef={ref}
        filename={`${aboutMe.fullName}.pdf`}
        options={options}
        x={0}
        y={0}
        scale={1}
      >
        {({ toPdf }) => (
          <button className="PDF" onClick={toPdf}>
            Generate PDF
          </button>
        )}
      </Pdf>
    </div>
  );
};

export default CV;
