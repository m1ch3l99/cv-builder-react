import React from "react";
import useStatValue from "../../../Context/StateProvider";
import "../../../styles/CV/Sections/MySocials.css";

const MySocials = () => {
  const [{ personData }] = useStatValue();
  const { socials } = personData;
  return (
    <div className="my__soc">
      <div className="my__soc--title">SOCIAL LINKS</div>
      <div className="soc__links">
        <div className="soc">{socials.github}</div>
        <div className="soc">{socials.linkedIn}</div>
        <div className="soc">{socials.portfolio}</div>
        <div className="soc">{socials.twitter}</div>
      </div>
    </div>
  );
};

export default MySocials;
