import React from "react";
import useLanguages from "../../../Hooks/useLanguages";
import Button from "../../UI/Button";
import List from "../../UI/List";
import LanguageSelect from "./LanguageSelect";

const Languages = () => {
  const {
    lang,
    onAddLang,
    onSetLang,
    languageList,
    deleteLang,
    onFormSubmit,
  } = useLanguages();

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h2 className="label">Languages</h2>
        <div className="div">
          <LanguageSelect
            label="Languages"
            lang={lang}
            onSetLang={onSetLang}
            onAddLang={onAddLang}
          />
          <div className="items">
            {languageList.map((lang, i) => (
              <List onDeleteItem={deleteLang} item={lang} key={i} />
            ))}
          </div>
          <Button className="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default Languages;
