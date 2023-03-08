import React from "react";

function StepOne({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <label for="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <label for="middleName">Middle Name(Optional)</label>
      <input
        id="middleName"
        type="text"
        placeholder="Middle Name"
        value={formData.Name}
        onChange={(e) => {
          setFormData({ ...formData, middleName: e.target.value });
        }}
      />
      <label for="lastName">Last Name</label>
      <input
        id="lastName"
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
    </div>
  );
}

export default StepOne;