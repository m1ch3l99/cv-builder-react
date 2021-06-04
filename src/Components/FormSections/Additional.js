import React from "react";
import useAdditional from "../../Hooks/useAdditional";
import Button from "../UI/Button";

const Additional = () => {
  const { additional, addEducationAD, addWorkExpAD, deleteSection } =
    useAdditional();

  return (
    <div>
      <h2 className="label">Additional Section</h2>
      <div className="btnWrapper">
        <Button className="additionals__btns" onClickHandler={addEducationAD}>
          Add Education
        </Button>
        <Button className="additionals__btns" onClickHandler={addWorkExpAD}>
          Add Work Experience
        </Button>
      </div>
      <div className="div small__div">
        <div className="additional__sec">
          {additional.map(({ component }) => (
            <div className="sec" key={component.key}>
              {component}
              <Button
                className="delete__sec"
                onClickHandler={() => deleteSection(component.key)}
              >
                Delete Section
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Additional;
