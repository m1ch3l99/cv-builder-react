import React from "react";
import useEducation from "../../Hooks/useEducation";
import Button from "../UI/Button";
import InputField from "../UI/InputField";

const Education = () => {
  const {
    collegeName,
    degreeType,
    details,
    fromDate,
    major,
    onCollegeChange,
    onDegreeChange,
    onDetailsChange,
    onFromDateChange,
    onMajorChange,
    onToDateChange,
    toDate,
    onFormSubmit,
    error,
  } = useEducation();

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h2 className="label">Education</h2>

        <div className="div">
          <InputField
            value={degreeType}
            onChangeHandler={onDegreeChange}
            label="Degree Type"
            type="text"
            placeholder="Degree Type"
          />
          <InputField
            label="Major"
            value={major}
            onChangeHandler={onMajorChange}
            type="text"
            placeholder="Major"
          />
          <InputField
            value={collegeName}
            onChangeHandler={onCollegeChange}
            label="College Name"
            type="text"
            placeholder="College Name"
          />
          <InputField
            min="1975-11-25"
            label="From"
            type="date"
            value={fromDate}
            onChangeHandler={onFromDateChange}
          />
          <InputField
            max={new Date().toISOString().split("T")[0]}
            label="To"
            type="date"
            value={toDate}
            onChangeHandler={onToDateChange}
          />
          <InputField
            label="Details(Optional)"
            type="text"
            placeholder="Details"
            value={details}
            onChangeHandler={onDetailsChange}
          />
          <div className="error">
            {error ? <h3>Please fill in the required fields</h3> : ""}
          </div>

          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default Education;
