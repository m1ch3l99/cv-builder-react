import React from "react";
import useSkills from "../../Hooks/useSkills";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import List from "../UI/List";

const Skills = () => {
  const { addSkill, onSkillChange, skill, skills, deleteSkill, onFormSubmit } =
    useSkills();

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h2 className="label">Skills</h2>
        <div className="div">
          <div className="infoItem">
            <span>⚠️</span>Skills could be soft or hard.<span>⚠️</span>
          </div>
          <InputField
            value={skill}
            onChangeHandler={onSkillChange}
            label="Skills"
            type="text"
            placeholder="Enter skills you succeed in😉."
          />
          <Button
            type="submit"
            onClickHandler={addSkill}
            className="add__skill"
          >
            Add Skill
          </Button>

          <div className="items">
            {skills?.map((skill, i) => (
              <List key={i} onDeleteItem={deleteSkill} item={skill} />
            ))}
          </div>
          <Button className="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default Skills;
