import React, { useEffect, useState } from "react";
import useMatchMedia from "../../Hooks/useMatchMedia";
import "../../styles/CV/CVBody.css";
import AboutMe from "./Sections/AboutMe";
import MyEducation from "./Sections/MyEducation";
import MyLangs from "./Sections/MyLangs";
import MySkills from "./Sections/MySkills";
import MySocials from "./Sections/MySocials";
import MyWorkExp from "./Sections/MyWorkExp";

const CVBody = () => {
  const { mobileView } = useMatchMedia();

  return (
    <div className="cv__body mobile">
      {mobileView ? (
        <>
          <AboutMe />
          <MyEducation />
          <MyWorkExp />
          <MySkills />
          <MyLangs />
          <MySocials />
        </>
      ) : (
        <>
          <MyEducation />
          <AboutMe />
          <MyWorkExp />
          <MySkills />
          <MyLangs />
          <MySocials />
        </>
      )}
    </div>
  );
};

export default CVBody;
