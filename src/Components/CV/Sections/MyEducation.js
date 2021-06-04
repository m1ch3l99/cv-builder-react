import React from "react";
import useStatValue from "../../../Context/StateProvider";
import "../../../styles/CV/Sections/MyEducation.css";

const MyEducation = () => {
  const [{ personData }] = useStatValue();
  const { education } = personData;

  return (
    <div className="my__edu">
      <div className="my__edu--title">EDUCATION</div>
      {education.map((edu, i) => (
        <div className="edu" key={i}>
          <div className="edu__left">
            <h3>
              {edu.degreeType} of {edu.major}
            </h3>
            <p>
              (
              {`${
                new Date(edu.fromDate).toUTCString().split(" ")[2]
              } ${new Date(edu.fromDate).getFullYear()}`}{" "}
              -{" "}
              {`${new Date(edu.toDate).toISOString().split("T")[0]}` ===
              `${new Date().toISOString().split("T")[0]}`
                ? "Curent"
                : `${
                    new Date(edu.toDate).toUTCString().split(" ")[2]
                  } ${new Date(edu.toDate).getFullYear()}`}
              )
            </p>
          </div>
          <div className="edu__right">
            <h4>{edu.collegeName}</h4>
            {edu.details ? (
              <p className="edu__desc">
                {edu?.details[0]?.toUpperCase() +
                  edu?.details.slice(1, edu?.details.length)}
                .
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyEducation;
