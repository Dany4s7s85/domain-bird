import { useEffect } from "react";
import axios from "axios";
function Analytics() {
  const url = window.location.href;
  useEffect(() => {
    axios.post("/analytics", url);
  });

  return (
    <div>
      <h1>success</h1>
    </div>
  );
}

export default Analytics;
