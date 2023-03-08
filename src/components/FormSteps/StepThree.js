import React, {useState} from "react";

function StepThree({ formData, setFormData }) {
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");


  function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const myArray = email.match(re);
    if (!myArray) {
      setEmailError("Please Enter Valid Email")
    } else (
      setEmailError("")
    )
  }

  function validateMobileNumber(mobileNumber) {
    const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    const myArray = mobileNumber.match(re);
    if (!myArray) {
      setMobileError("Please Enter Valid Mobile Number")
    } else (
      setMobileError("")
    )
  }

  return (
    <div className="sign-up-container">
      <label for="userEmail">Email</label>
      <input
        id="userEmail"
        type="email"
        placeholder="email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
        onBlur={(event) => validateEmail(event.target.value)}
      />
      {emailError.length > 0 && <span className="validation-error">{`*${emailError}`}</span>}
      <label for="userMobile">Mobile Number</label>
      <input
        id="userMobile"
        type="text"
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChange={(event) =>
          setFormData({ ...formData, mobileNumber: event.target.value })
        }
        onBlur={(event) => validateMobileNumber(event.target.value)}
      />
      {mobileError.length > 0 && <span className="validation-error">{`*${mobileError}`}</span>}
      <label for="userAddress">Address</label>
      <input
        id="userAddress"
        type="text"
        placeholder="Address"
        value={formData.address}
        onChange={(event) =>
          setFormData({ ...formData, address: event.target.value })
        }
      />
    </div>
  );
}

export default StepThree;