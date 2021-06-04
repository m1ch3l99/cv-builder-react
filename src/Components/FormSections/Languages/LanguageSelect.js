import React from "react";
import "../../../styles/UI/LanguageSelect.css";
import Button from "../../UI/Button";
import languages from "./languagesList";
import InputField from "../../UI/InputField";

const LanguageSelect = ({ label, lang, onSetLang, onAddLang }) => {
  return (
    <div className="lang">
      <label>{label}</label>
      <div className="lang__select">
        <div className="lang__container">
          {languages.map((lang, i) => (
            <p key={i} value={lang.lang} onClick={onSetLang}>
              <span>{lang.flag}</span>
              <span value={lang.lang}>{lang.lang}</span>
            </p>
          ))}
        </div>
      </div>
      {lang ? (
        <>
          <InputField value={lang} disabled={true} />
          <Button onClickHandler={onAddLang} className="add__lang">
            Add Lang
          </Button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default LanguageSelect;
