import React, { useState } from "react";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useHistory, Link } from "react-router-dom";

function Personalinfo() {
  const history = useHistory();
  //state for using response
  const [phone, setphone] = useState();
  // state for all data
  const [info, setinfo] = useState({
    company: "",
    phone: "",
    siturl: "",
    clients: "",
  });
  // state for backend response that recieve
  const [response, setresponse] = useState("");

  //save input fields data in variables
  function SaveInfo(e) {
    setinfo({ ...info, [e.target.name]: e.target.value });
  }

  // send form data to backend
  function SubmitInfo(event) {
    event.preventDefault();
    const personalinformation = { ...info, phone };
    axios
      .post("/info", personalinformation)
      .then((res) => {
        if (res.data === "register") {
          history.push("/verimail");
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
            <h1 className="registerHeading">Register to</h1>
            <h3 className="registerSubheading">Domain Birds</h3>
            <p className="pRegister">
              If you already have an account register <br />
            </p>
            <p className="p2Register">
              You can
              <Link to="/login" className="text-decoration-none darkGreen">
                {" "}
                <b>Login here!</b>
              </Link>
            </p>
          </div>

          <div className="registerForm card border-0">
            <h2 className="text-center m-3">Register</h2>
            <input
              className="inputField p-3 my-5 border-0"
              placeholder="Company Name"
              autoComplete="off"
              type="text"
              name="company"
              value={info.company}
              onChange={SaveInfo}
            />
            <input
              className="inputField p-3 border-0"
              placeholder="Mobile Number"
              value={phone}
              onChange={setphone}
            />
            <input
              className="inputField p-3 my-5 border-0"
              placeholder="Website URL"
              autoComplete="off"
              type="text"
              name="siturl"
              value={info.siturl}
              onChange={SaveInfo}
            />
            <input
              className="inputField p-3 border-0"
              placeholder="Number of Clients"
              autoComplete="off"
              type="text"
              name="clients"
              value={info.clients}
              onChange={SaveInfo}
            />
            <p className="text-danger text-center">{response}</p>
            <button
              className="loginButton p-2 my-5 border-0"
              onClick={SubmitInfo}
            >
              Next
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
export default Personalinfo;
