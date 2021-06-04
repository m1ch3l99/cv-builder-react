import { useState } from "react";
import useStateValue from "../Context/StateProvider";
import { phonePattern, emailPattern } from "../patterns/patterns";
const useAboutMe = () => {
  //states
  const [focus, setFocus] = useState(false);
  const [fullName, setFullName] = useState("");
  const [address, setAdress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [error, setError] = useState({ allErr: "" });

  const [invalidNum, setInvalidNum] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [, dispatch] = useStateValue();

  //functions
  const onFullNameChange = (e) => setFullName(e.target.value);
  const onAddressChange = (e) => setAdress(e.target.value);
  const onPhoneNumberChange = (e) => setPhoneNumber(e);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onProfessionChange = (e) => setProfession(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !address || !phoneNumber || !email) {
      setError({ ...error, allErr: "Please fill in all fields" });
      return;
    }

    if (phoneNumber.search(phonePattern)) {
      //invalid number
      setInvalidNum(true);
      return;
    } else {
      setInvalidNum(false);
    }

    if (email.search(emailPattern)) {
      //ivalid email
      setInvalidEmail(true);
      return;
    } else {
      setInvalidEmail(false);
    }

    const aboutMe = {
      fullName,
      address,
      phoneNumber,
      email,
      profession,
    };

    dispatch({
      type: "SET_ABOUT_ME",
      payload: aboutMe,
    });

    dispatch({
      type: "SAVE__INFO",
    });
  };

  return {
    focus,
    setFocus,
    fullName,
    address,
    phoneNumber,
    email,
    profession,
    onProfessionChange,
    onFullNameChange,
    onPhoneNumberChange,
    onAddressChange,
    onEmailChange,
    onFormSubmit,
    error,
    invalidNum,
    invalidEmail,
  };
};

export default useAboutMe;
