import React, { useState } from "react";
import axios from "axios";

function GoogleAnalytics() {
  const [link, setlink] = useState("");
  function FunctionCall() {
    axios
      .post("/ganalytics")
      .then((response) => {
        setlink(response.data);
        window.open(response.data);
      })
      .catch();
  }
  return (
    <div>
      <button onClick={FunctionCall}>click me</button>
    </div>
  );
}

export default GoogleAnalytics;

// https://dev.to/ramonak/how-to-develop-a-custom-google-analytics-dashboard-using-google-analytics-reporting-api-v4-and-react-js-3k49
