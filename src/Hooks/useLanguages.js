import { useState } from "react";
import useStatValue from "../Context/StateProvider";

const useLanguages = () => {
  const [lang, setLang] = useState("");
  const [languageList, setLanguageList] = useState([]);
  const [, dispatch] = useStatValue();

  const onSetLang = (e) => setLang(e.target.innerText);

  const onAddLang = (e) => {
    e.preventDefault();
    if (languageList.includes(lang)) {
      console.log("Duplicated");
      return;
    }
    setLanguageList([...languageList, lang]);
    setLang("");
  };

  const deleteLang = (langToDel) => {
    setLanguageList(languageList.filter((lang) => lang !== langToDel));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_LANGUAGES",
      payload: languageList.sort(),
    });
    dispatch({
      type: "SAVE__INFO",
    });
  };

  return {
    lang,
    onSetLang,
    onAddLang,
    languageList,
    deleteLang,
    onFormSubmit,
  };
};

export default useLanguages;
