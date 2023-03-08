import React, { useState } from "react";
import StepFive from "./FormSteps/StepFive";
import StepOne from "./FormSteps/StepOne";
import StepThree from "./FormSteps/StepThree";
import StepFour from "./FormSteps/StepFour";
import StepTwo from "./FormSteps/StepTwo";

function FormParent() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    mobileNumber: "",
    address: "",
    gender: "",
    education: "",
    nationality: ""
  });

  const FormTitles = ["Step One", "Step Two", "Step Three", "Step Four", "Step Five"];

  const PageDisplay = () => {
    if (page === 0) {
        return <StepOne formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
        return <StepTwo formData={formData} setFormData={setFormData} />;
    } else if (page == 2) {
        return <StepThree formData={formData} setFormData={setFormData} />;
    } else if (page == 3) {
        return <StepFour formData={formData} setFormData={setFormData} />;
    } else {
      return <StepFive formData={formData} setFormData={setFormData} />;
    }
  };

  const ProgressBarPercentage = (page) => {
    let percentage;
    switch (page) {
      case 0:
        percentage = '20%'
        break;
      case 1:
        percentage = '40%'
        break;
      case 2:
        percentage = '60%'
        break;
      case 3:
        percentage = '80%'
        break;
      default:
        percentage = '100%'
        break;
    }
    return percentage;
  }

  return (
    <div className="form">
      <div className="form-container">
        <div className="progressbar">
          <div
            style={{ width: ProgressBarPercentage(page) }}
          ></div>
        </div>
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormParent;