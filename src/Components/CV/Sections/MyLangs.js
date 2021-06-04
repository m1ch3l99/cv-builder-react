import React from "react";
import useStatValue from "../../../Context/StateProvider";
import "../../../styles/CV/Sections/MyLangs.css";

const MyLangs = () => {
  const [{ personData }] = useStatValue();
  const { languages } = personData;
  return (
    <div className="my__langs">
      <div className="my__langs--title">MY LANGUAGES</div>
      {languages.map((lang, i) => (
        <p className="lang" key={i}>
          {lang}
        </p>
      ))}
    </div>
  );
};

export default MyLangs;
