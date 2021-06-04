import { useState } from "react";
import useStatValue from "../Context/StateProvider";

const useEducation = () => {
  const [degreeType, setDegreeType] = useState("");
  const [major, setMajor] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(false);

  const [, dispatch] = useStatValue();

  const onDegreeChange = (e) => setDegreeType(e.target.value);
  const onMajorChange = (e) => setMajor(e.target.value);
  const onCollegeChange = (e) => setCollegeName(e.target.value);
  const onFromDateChange = (e) => setFromDate(e.target.value);
  const onToDateChange = (e) => setToDate(e.target.value);
  const onDetailsChange = (e) => setDetails(e.target.value);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!degreeType || !major || !collegeName || !fromDate || !toDate) {
      setError(true);
      return;
    }
    const education = {
      degreeType,
      major,
      collegeName,
      fromDate,
      toDate,
      details,
    };
    dispatch({
      type: "SET_EDUCATION",
      payload: education,
    });

    dispatch({
      type: "SAVE__INFO",
    });

    setDegreeType("");
    setMajor("");
    setCollegeName("");
    setFromDate("");
    setToDate("");
    setDetails("");
  };

  return {
    degreeType,
    major,
    collegeName,
    fromDate,
    toDate,
    details,
    onDegreeChange,
    onMajorChange,
    onCollegeChange,
    onFromDateChange,
    onToDateChange,
    onDetailsChange,
    onFormSubmit,
    error,
  };
};

export default useEducation;
