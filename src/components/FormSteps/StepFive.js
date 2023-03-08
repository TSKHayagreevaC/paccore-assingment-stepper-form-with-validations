import React from "react";

function StepFive({ formData, setFormData }) {
  const formDataArray = []
  for (const [key, value] of Object.entries(formData)) {
    formDataArray.push({"key": key, "value": value})
  }
  return (
    <div className="sign-up-container">
      <h1>Review</h1>
      <ul>
        {formDataArray.map((eachItem) => {
          if (!eachItem.key.toLowerCase().includes("confirmpassword")) {
            return (
              <li className="review-list-item">
                <span className="text-bold">{`${eachItem.key} : `}</span>
                <span>{eachItem.value}</span>
              </li>
              )
            }
          }
        )}
      </ul>
    </div>
  );
}

export default StepFive;