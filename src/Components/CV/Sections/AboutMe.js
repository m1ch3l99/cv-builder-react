import React from "react";
import useStatValue from "../../../Context/StateProvider";
import "../../../styles/CV/Sections/AboutMe.css";

const AboutMe = () => {
  const [{ personData }] = useStatValue();
  const { aboutMe } = personData;
  return (
    <div className="about__me">
      <div className="about__me--title">ABOUT ME</div>
      <div className="about__me--tags">
        <div className="tags">
          <p className="tag">Name:</p>
          <p className="tag">Adress:</p>
          <p className="tag">Email:</p>
          <p className="tag">Phone Number:</p>
        </div>

        <div className="values">
          <p className="val fn">{aboutMe.fullName}</p>
          <p className="val">{aboutMe.address}</p>
          <p className="val">{aboutMe.email}</p>
          <p className="val">+{aboutMe.phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
