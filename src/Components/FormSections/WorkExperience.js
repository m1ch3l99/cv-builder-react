import React from "react";
import useWorkExperience from "../../Hooks/useWorkExperience";

import Button from "../UI/Button";
import InputField from "../UI/InputField";

const WorkExperience = () => {
  const {
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
  } = useWorkExperience();
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h2 className="label">Work Experiences</h2>
        <div className="div">
          <InputField
            label="Job Title"
            placeholder="Job Title"
            type="text"
            value={jobTitle}
            onChangeHandler={onJobTitleChange}
          />
          <InputField
            label="Company Name"
            placeholder="Company Name"
            type="text"
            value={companyName}
            onChangeHandler={onCompanyNameChange}
          />
          <InputField
            label="Company Address"
            placeholder="Company Address"
            type="text"
            value={companyAddress}
            onChangeHandler={onCompanyAddressChange}
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
            label="Description(Optional)"
            placeholder="Description"
            type="text"
            value={description}
            onChangeHandler={onDescriptionChange}
          />
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperience;
