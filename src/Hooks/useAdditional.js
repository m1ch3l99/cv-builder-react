import { useState } from "react";
import Education from "../Components/FormSections/Education";
import { v4 } from "uuid";
import WorkExperience from "../Components/FormSections/WorkExperience";

const useAdditional = () => {
  const [additional, setAdditional] = useState([]);
  let id = v4();

  const addEducationAD = (e) => {
    e.preventDefault();
    setAdditional([
      ...additional,
      {
        component: <Education key={id} />,
      },
    ]);
  };

  const addWorkExpAD = (e) => {
    e.preventDefault();
    setAdditional([
      ...additional,
      {
        component: <WorkExperience key={id} />,
      },
    ]);
  };

  const deleteSection = (id) => {
    setAdditional(additional.filter((item) => item.component.key !== id));
  };
  return {
    additional,
    addEducationAD,
    addWorkExpAD,
    deleteSection,
  };
};

export default useAdditional;
