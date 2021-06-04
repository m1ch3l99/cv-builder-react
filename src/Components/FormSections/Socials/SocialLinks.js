import { GitHub, LinkedIn, Person, Twitter } from "@material-ui/icons";
import React from "react";
import "../../../styles/CoreStyles/SocialLinks.css";

import InputField from "../../UI/InputField";

const SocialLinks = ({
  linkedIn,
  github,
  twitter,
  portfolio,
  onLinkedInChange,
  onGithubChange,
  onTwitterChange,
  onPortfolioChange,
}) => {
  return (
    <div className="links">
      <div className="links__input">
        <div className="social">
          <LinkedIn className="social__LI" />
          <InputField
            value={linkedIn}
            onChangeHandler={onLinkedInChange}
            type="text"
            className="social__input"
            placeholder="LinkedIn"
          />
        </div>

        <div className="social">
          <GitHub className="social__GH" />
          <InputField
            value={github}
            onChangeHandler={onGithubChange}
            type="text"
            className="social__input"
            placeholder="GitHub"
          />
        </div>

        <div className="social">
          <Twitter className="social__TW" />
          <InputField
            value={twitter}
            onChangeHandler={onTwitterChange}
            type="text"
            className="social__input"
            placeholder="Twitter"
          />
        </div>

        <div className="social">
          <Person className="social__P" />
          <InputField
            value={portfolio}
            onChangeHandler={onPortfolioChange}
            type="text"
            className="social__input"
            placeholder="Link to portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
