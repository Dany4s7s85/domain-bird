import React, { useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory, Link } from "react-router-dom";

function Register() {
  const history = useHistory();
  const [formdata, setformdata] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [response, setresponse] = useState("");

  //save input fields data in variables
  function InputFormData(e) {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  }
  function FormSubmit(event) {
    event.preventDefault();
    axios
      .post("/signup", formdata)
      .then((res) => {
        if (res.data === "saved") {
          history.push("/info");
        } else {
          setresponse(res.data);
        }
      })
      .catch();
  }

  return (
    <div className="myClass">
      <div className="container">
        <div className="bg-white">
          <div className="text-end">
            <img src="./domainLogo.png" className="domainLogo" />
            <h1 className="registerHeading">Register to</h1>
            <h3 className="registerSubheading">Domain Birds</h3>
            <p className="pRegister">
              If you already have an account register <br />
            </p>
            <p className="p2Register">
              You can
              <Link to="/login" className="text-decoration-none darkGreen b">
                {" "}
                <b>Login here!</b>
              </Link>
            </p>
          </div>

          <div className="registerForm card border-0">
            <h2 className="text-center m-3">Register</h2>
            <input
              className="inputField p-3 my-4 border-0"
              placeholder="Enter Full Name"
              autoComplete="off"
              type="text"
              name="fullname"
              value={formdata.fullname}
              onChange={InputFormData}
            />
            <input
              className="inputField p-3 my-4 border-0"
              placeholder="Enter Email"
              autoComplete="off"
              type="text"
              name="email"
              value={formdata.email}
              onChange={InputFormData}
            />
            <input
              className="inputField p-3 my-3 border-0"
              placeholder="Enter Password"
              autoComplete="off"
              type="password"
              name="password"
              value={formdata.password}
              onChange={InputFormData}
            />
            <p className="text-danger">{response}</p>
            <button
              className="loginButton p-2 my-5 border-0"
              onClick={FormSubmit}
            >
              Register
            </button>
          </div>
        </div>
        <div className="text-center">
          <img src="loginImage.png" className="loginImage" />
        </div>
      </div>
    </div>
  );
}
export default Register;
