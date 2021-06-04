import React from "react";
import useStatValue from "../../../Context/StateProvider";
import "../../../styles/CV/Sections/MyWorkExp.css";

const MyWorkExp = () => {
  const [{ personData }] = useStatValue();
  const { workExperience } = personData;

  return (
    <div className="my__workExp">
      <div className="my__workExp--title">WORK EXPERIENCES</div>
      {workExperience.map((work, i) => (
        <div className="workExp" key={i}>
          <div className="workExp__left">
            <h3>{work.jobTitle}</h3>
            <p>
              (
              {`${
                new Date(work.fromDate).toUTCString().split(" ")[2]
              } ${new Date(work.fromDate).getFullYear()}`}{" "}
              -{" "}
              {`${new Date(work.toDate).toISOString().split("T")[0]}` ===
              `${new Date().toISOString().split("T")[0]}`
                ? "Curent"
                : `${
                    new Date(work.toDate).toUTCString().split(" ")[2]
                  } ${new Date(work.toDate).getFullYear()}`}
              )
            </p>
          </div>
          <div className="workExp__right">
            <h4>
              {work.companyName} - {work.companyAddress}
            </h4>
            {work.description ? (
              <p className="workExp__desc">
                {work?.description[0]?.toUpperCase() +
                  work?.description.slice(1, work?.description.length)}
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

export default MyWorkExp;
