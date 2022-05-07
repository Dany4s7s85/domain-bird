import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [response, setresponse] = useState("");
  const [getformdata, setformdata] = useState({ email: "", password: "" });
  function GetUserData(e) {
    setformdata({ ...getformdata, [e.target.name]: e.target.value });
  }
  function SubmitForm(event) {
    event.preventDefault();
    axios
      .post("/login", getformdata)
      .then((res) => {
        if (res.data === "login") {
          history.push("/");
        } else {
          setresponse(res.data);
        }
      })
      .catch();
  }
  return (
    <div>
      <div className="container">
        <div className="bg-white">
          <div className="text-end">
            <img src="./domainLogo.png" className="domainLogo" />
            <h1 className="loginHeading">Login to</h1>
            <h3 className="loginSubheading">Domain Birds</h3>
            <p className="pTagDesign">
              If you don,t have account register <br />
            </p>
            <p className="p2TagDesign">
              You can
              <Link to="/register" className="text-decoration-none darkGreen">
                {" "}
                <b>Register here!</b>
              </Link>
            </p>
          </div>

          <div className="formPage card border-0">
            <h2 className="text-center m-3">Login</h2>
            <input
              className="inputField p-3 my-5 border-0"
              placeholder="Enter Email"
              autoComplete="off"
              type="text"
              value={getformdata.email}
              name="email"
              onChange={GetUserData}
            />
            <input
              className="inputField p-3 border-0"
              placeholder="Enter Password"
              autoComplete="off"
              name="password"
              value={getformdata.password}
              onChange={GetUserData}
              type="password"
            />
            <Link className="text-end text-black text-decoration-none">
              Forgot Password
            </Link>
            <p className="text-danger text-center">{response}</p>
            <button
              className="loginButton p-2 my-5 border-0"
              onClick={SubmitForm}
            >
              Login
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

export default Login;
