import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./NavDesign.css";

function Togle() {
  const [mystate, setstate] = useState(false);

  // check user login or not
  function Checklogin() {
    axios
      .get("/togle")
      .then((response) => {
        if (response.data === true) {
          setstate(true);
        } else {
          setstate(false);
        }
      })
      .catch((error) => {
        setstate(false);
      });
  }
  useEffect(() => {
    Checklogin();
  });

  // main function return there
  if (mystate === true) {
    return (
      <li>
        <Link className="">Profile</Link>
      </li>
    );
  } else {
    return (
      <>
        <li>
          <Link to="/login" className="text-white text-decoration-none">
            Login
          </Link>
        </li>
        <li>
          <Link
            to="register"
            className="text-success text-decoration-none bg-white p-2 rounded text-center"
          >
            SignUp
          </Link>
        </li>
      </>
    );
  }
}

export default Togle;
