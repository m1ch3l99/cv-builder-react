import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import useAboutMe from "../../Hooks/useAboutMe";
import style from "../../styles/UI/MUI";
import Button from "../UI/Button";
import InputField from "../UI/InputField";

const AboutMe = () => {
  const {
    fullName,
    address,
    phoneNumber,
    email,
    focus,
    setFocus,
    onFullNameChange,
    onAddressChange,
    onEmailChange,
    onProfessionChange,
    profession,
    onPhoneNumberChange,
    onFormSubmit,
    error,
    invalidNum,
    invalidEmail,
  } = useAboutMe();

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h2 className="label">About Me</h2>
        <div className="div">
          <InputField
            value={fullName}
            label="Full Name"
            type="text"
            placeholder="Full Name"
            onChangeHandler={onFullNameChange}
          />
          <InputField
            value={address}
            label="Address"
            type="text"
            placeholder="Address"
            onChangeHandler={onAddressChange}
          />
          <label style={style.label}>Phone number</label>
          <PhoneInput
            value={phoneNumber}
            country="lb"
            autoFormat={true}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            inputStyle={focus ? style.input[":focus:"] : style.input}
            onChange={onPhoneNumberChange}
          />

          <InputField
            label="Profession"
            placeholder="Profession"
            type="text"
            value={profession}
            onChangeHandler={onProfessionChange}
          />
          <InputField
            value={email}
            label="Email"
            type="text"
            placeholder="Email"
            onChangeHandler={onEmailChange}
          />

          <div className="error">
            {!fullName || !address || !phoneNumber || !email ? (
              <h3>{error.allErr}</h3>
            ) : (
              ""
            )}
            {invalidNum && <h3>Invalid phone number</h3>}
            {invalidEmail && <h3>Invalid email format</h3>}
          </div>

          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AboutMe;
