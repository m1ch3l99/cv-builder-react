import { useState } from "react";
import useStatValue from "../Context/StateProvider";

const useWorkExperience = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [description, setDescription] = useState("");

  const [, dispatch] = useStatValue();

  const onJobTitleChange = (e) => setJobTitle(e.target.value);
  const onCompanyNameChange = (e) => setCompanyName(e.target.value);
  const onCompanyAddressChange = (e) => setCompanyAddress(e.target.value);
  const onFromDateChange = (e) => setFromDate(e.target.value);
  const onToDateChange = (e) => setToDate(e.target.value);
  const onDescriptionChange = (e) => setDescription(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!jobTitle || !companyName || !companyAddress || !fromDate || !toDate) {
      return;
    }

    const workExperience = {
      jobTitle,
      companyAddress,
      companyName,
      fromDate,
      toDate,
      description,
    };

    dispatch({
      type: "SET_WORK_EXPERIENCE",
      payload: workExperience,
    });

    dispatch({
      type: "SAVE__INFO",
    });

    setJobTitle("");
    setCompanyName("");
    setCompanyAddress("");
    setFromDate("");
    setToDate("");
    setDescription("");
  };
  return {
    jobTitle,
    companyAddress,
    companyName,
    fromDate,
    toDate,
    description,
    onDescriptionChange,
    onFromDateChange,
    onJobTitleChange,
    onCompanyAddressChange,
    onCompanyNameChange,
    onToDateChange,
    onFormSubmit,
  };
};
export default useWorkExperience;
