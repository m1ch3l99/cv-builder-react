import React from "react";
import useStatValue from "../../Context/StateProvider";
import "../../styles/CV/CVHeader.css";

const CVHeader = () => {
  const [{ personData }] = useStatValue();
  const { aboutMe, socials } = personData;

  return (
    <div className="cv__header">
      {personData && (
        <>
          <p className="cv__self--title">{aboutMe.fullName}</p>
          <p className="cv__self--profession">{aboutMe.profession}</p>
          <div className="cv__self--info">
            <p className="info__mobile">+{aboutMe.phoneNumber}</p>
            <p className="info__email">{aboutMe.email}</p>
            <p className="info__portfolio">{socials.portfolio}</p>
            <p className="info__address">{aboutMe.address}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CVHeader;
