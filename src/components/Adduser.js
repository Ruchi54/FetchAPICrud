import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    status: "",
    gender: "",
  });

  const { name, email, status, gender } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let history = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const url = "https://gorest.co.in/public/v2/users";
    fetch(url, {
      method: "POST",
      headers: {
        //Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer c46c8176c189a01803d43cac358c36f5f778aff6736d80dd6e0199445626e3fb`,
      },
      body: JSON.stringify(user),
    })
      .then((resp) => {
        console.log("Resp", resp);
      })
      .catch((e) => {
        console.log("e", e);
      });

    console.log("Output", user);
    history("/");
  };

  return (
    <>
      <h2>Add User</h2>
      <div style={{ width: "30%", marginLeft: "35%", marginTop: "50px" }}>
        <form className="row g-3" onSubmit={submitForm}>
          <div>
            <label for="inputEmail4" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              name="name"
              onChange={(e) => onInputChange(e)}
              value={name}
            />
          </div>
          <div>
            <label for="inputPassword4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputPassword4"
              name="email"
              onChange={(e) => onInputChange(e)}
              value={email}
            />
          </div>

          <div>
            <label for="inputState" className="form-label">
              Status
            </label>
            <select
              id="inputState"
              name="status"
              className="form-select"
              onChange={(e) => onInputChange(e)}
              value={status}
            >
              <option selected>Choose...</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="col-12">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              onChange={(e) => onInputChange(e)}
              value="male"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="col-12">
            <input
              class="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              onChange={(e) => onInputChange(e)}
              value="female"
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Female
            </label>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Adduser;
