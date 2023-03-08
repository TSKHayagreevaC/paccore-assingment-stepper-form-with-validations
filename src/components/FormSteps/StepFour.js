import React from "react";

function StepFour({ formData, setFormData }) {
  return (
    <div className="sign-up-container">
      <label for="userGender">Gender</label>
      <select
          id="userGender"
          type="select"
          value={formData.gender}
          onChange={(event) => {
            setFormData({ ...formData, gender: event.target.value });
          }}
      >
        <option>Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Transgender">Transgender</option>
        <option value="Not willing to disclose">Not willing to disclose</option>
      </select>
      <label for="userEducation">Education</label>
      <select
          id="userEducation"
          type="select"
          value={formData.education}
          onChange={(event) => {
            setFormData({ ...formData, education: event.target.value });
          }}
      >
        <option>Select</option>
        <option value="Primary">Primary</option>
        <option value="Intermediate">Intermediate</option>
        <option value="UG">Under Graduate</option>
        <option value="PG">PG</option>
        <option value="PhD">PhD</option>
      </select>
      <label for="userNationality">Nationality</label>
      <input
        id="userNationality"
        type="text"
        placeholder="Nationality"
        value={formData.nationality}
        onChange={(event) =>
          setFormData({ ...formData, nationality: event.target.value })
        }
      />
    </div>
  );
}

export default StepFour;