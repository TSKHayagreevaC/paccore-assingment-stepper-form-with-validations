import React, {useState} from "react";

function StepTwo({ formData, setFormData }) {
  const [usernameError, setUsernameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [passwordMatchError, setPasswordMatchError] = useState("")

  function validateUsername(username) {
    const re = /^[A-Za-z][A-Za-z0-9_]{7,29}$/g
    const myArray = username.match(re);
    if (!myArray) {
      setUsernameError("Please Enter Valid Username")
    } else (
      setUsernameError("")
    )
  }

  function validatePassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/g;
    const myArray = password.match(re);
    if (!myArray) {
      setPasswordError("Please Enter Valid Password")
    } else (
      setPasswordError("")
    )
  }

  function matchPassword(p1, p2) {
    if (p1 !== p2) {
      setPasswordMatchError("Password Does not Match")
    } else {
      setPasswordMatchError("")
    }
  }

  return (
    <div className="sign-up-container">
      <label for="userName">Username</label>
      <input
        id="userName"
        type="text"
        placeholder="username"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
        onBlur={(event) => validateUsername(event.target.value)}
      />
      {usernameError.length > 0 && <span className="validation-error">{`*${usernameError}`}</span>}
      <div class="tooltip">
        <span class="tooltiptext">
          Password need to have :
          <ol>
            <li>Atleast one lower case alphabet a-z.</li>
            <li>Atleast one upper alaphabet A-Z.</li>
            <li>Atleast one number 0-9.</li>
            <li>Atleast one special character @,$,%,etc.</li>
            <li>Length of 8 to 16 letters.</li>
          </ol>
        </span>
        <label for="userPassword">Password</label>
      </div>
      <input
        id="userPassword"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
        onBlur={(event) => validatePassword(event.target.value)}
      />
      {passwordError.length > 0 && <span className="validation-error">{`*${passwordError}`}</span>}
      <label for="userPasswordCheck">Confirm Password</label>
      <input
        id="userPasswordCheck"
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
        onBlur={(event) => matchPassword(formData.password, event.target.value)}
      />
      {passwordMatchError.length > 0 && <span className="validation-error">{`*${passwordMatchError}`}</span>}
    </div>
  );
}

export default StepTwo;