import { useState } from "react";
import useStatValue from "../Context/StateProvider";
const useSkills = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [, dispatch] = useStatValue();

  const onSkillChange = (e) => setSkill(e.target.value);

  const addSkill = (e) => {
    e.preventDefault();
    if (!skill) {
      return;
    }

    setSkills([...skills, skill]);
    setSkill("");
  };

  const deleteSkill = (skillToDel) => {
    setSkills(skills.filter((skill) => skill !== skillToDel));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "SET_SKILLS",
      payload: skills,
    });

    dispatch({
      type: "SAVE__INFO",
    });
  };

  return {
    skill,
    onSkillChange,
    addSkill,
    skills,
    deleteSkill,
    onFormSubmit,
  };
};

export default useSkills;
