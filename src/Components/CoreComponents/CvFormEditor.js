import React, { useState } from "react";
import "../../styles/CoreStyles/CvFormEditor.css";
import AboutMe from "../FormSections/AboutMe";
import Card from "../UI/Card";
import Education from "../FormSections/Education";
import Skills from "../FormSections/Skills";
import WorkExperience from "../FormSections/WorkExperience";
import Languages from "../FormSections/Languages/Languages";
import Socials from "../FormSections/Socials/Socials";
import Additional from "../FormSections/Additional";
import { AddCircleRounded, Cancel } from "@material-ui/icons";
import style from "../../styles/UI/MUI";

const CvFormEditor = () => {
  const [open, setIsOpen] = useState(false);
  return (
    <div className="cvFormEditor">
      <Card>
        <AboutMe />
      </Card>

      <Card>
        <Education />
      </Card>

      <Card>
        <WorkExperience />
      </Card>

      <Card>
        <Skills />
      </Card>

      <Card>
        <Languages />
      </Card>

      <Card>
        <Socials />
      </Card>

      <AddCircleRounded
        onClick={() => setIsOpen(true)}
        style={style.roundedIcon}
      />

      {open && (
        <>
          <Cancel style={style.roundedIcon} onClick={() => setIsOpen(false)} />
          <Card className="large">
            <Additional />
          </Card>
        </>
      )}
    </div>
  );
};

export default CvFormEditor;
