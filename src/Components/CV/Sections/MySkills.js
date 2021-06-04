import React from "react";
import useStatValue from "../../../Context/StateProvider";
import "../../../styles/CV/Sections/MySkills.css";

const MySkills = () => {
  const [{ personData }] = useStatValue();
  const { skills } = personData;
  return (
    <div className="my__skills">
      <div className="my__skills--title">MY SKILLS</div>
      {skills.map((skill, i) => (
        <p className="skill" key={i}>
          {skill}
        </p>
      ))}
    </div>
  );
};

export default MySkills;
