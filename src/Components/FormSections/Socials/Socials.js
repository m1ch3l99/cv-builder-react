import React from "react";
import useSocials from "../../../Hooks/useSocials";
import Button from "../../UI/Button";

import SocialLinks from "./SocialLinks";

const Socials = () => {
  const {
    linkedIn,
    onLinkedInChange,
    github,
    onGithubChange,
    twitter,
    onTwitterChange,
    portfolio,
    onPortfolioChange,
    onFormSubmit,
  } = useSocials();
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h2 className="label">Social Networks</h2>
        <div className="div">
          <div className="infoItem info-links">
            <span>⚠️</span>We suggest you to enter the links that you are active
            on !<span>⚠️</span>
          </div>
          <SocialLinks
            linkedIn={linkedIn}
            github={github}
            twitter={twitter}
            portfolio={portfolio}
            onGithubChange={onGithubChange}
            onLinkedInChange={onLinkedInChange}
            onTwitterChange={onTwitterChange}
            onPortfolioChange={onPortfolioChange}
          />
          <Button>Save</Button>
        </div>
      </form>
    </div>
  );
};

export default Socials;
