import { useState } from "react";
import useStatValue from "../Context/StateProvider";

const useSocials = () => {
  const [linkedIn, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [twitter, setTwitter] = useState("");
  const [portfolio, setPortfolio] = useState("");

  const [, dispatch] = useStatValue();

  const onLinkedInChange = (e) => setLinkedIn(e.target.value);
  const onGithubChange = (e) => setGithub(e.target.value);
  const onTwitterChange = (e) => setTwitter(e.target.value);
  const onPortfolioChange = (e) => setPortfolio(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const socials = {
      linkedIn,
      github,
      twitter,
      portfolio,
    };
    dispatch({
      type: "SET_SOCIALS",
      payload: socials,
    });
    dispatch({
      type: "SAVE__INFO",
    });
  };
  return {
    linkedIn,
    onLinkedInChange,
    github,
    onGithubChange,
    twitter,
    onTwitterChange,
    portfolio,
    onPortfolioChange,
    onFormSubmit,
  };
};
export default useSocials;
