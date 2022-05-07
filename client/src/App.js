import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home.js";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
import { Route, Switch } from "react-router-dom";
import Personalinfo from "./LoginRegister/Personalinfo";
import Emailverify from "./LoginRegister/VerifyEmail";
import GoogleAnalytics from "./GoogleAnalytics/GoogleAnalytics";
import Analytics from "./GoogleAnalytics/Analytics";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/info" component={Personalinfo} />
        <Route path="/verimail" component={Emailverify} />
        <Route path="/ganalytics" component={GoogleAnalytics} />
        <Route path="/analytics" component={Analytics} />
      </Switch>
    </div>
  );
}

export default App;


// G-7HLPNXV972
