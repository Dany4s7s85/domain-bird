const express = require("express");
const app = express();
const user = require("./dbConn");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const SigninSave = require("./LoginSystem");
const verifyEmail = require("./emailVerify");
const CheckLogin = require("./CheckLogin");
const { PersonalInfo } = require("./PersonalInformation");
const { SignupDataSave, findEmail, formValidation } = require("./SignupSystem");
const Googleanalytics = require("./GoogleAnalytics");
const getToken = require("./AnalyticsToken");
var path = require("path");
app.use(cookieParser());
dotenv.config({ path: "./.env" });
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(cors());

// Register in system
app.post("/signup", formValidation, findEmail, SignupDataSave);

// login to our system
app.post("/login", SigninSave);

//google analytics
app.post("/ganalytics", Googleanalytics);

//get token
app.post("/analytics", getToken);

//save personal information
app.post("/info", PersonalInfo);

// check user login or not
app.get("/togle", CheckLogin);

//this is for verify email of patient or user
app.get("/verified", verifyEmail);

//this is for heroku don,t touch
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function () {
  console.log("listen port 5000");
});



