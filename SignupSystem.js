const user = require("./dbConn");
const jwt = require("jsonwebtoken");
const validator = require("validator");

// velidate Patient information
function formValidation(req, res, next) {
  const data = req.body;

  const { fullname, email, password } = data;

  if (!fullname || !email || !password) {
    res.end("All fields required");
  } else if (!validator.isEmail(email)) {
    res.end("Invalid email");
  } else {
    next();
  }
}

//check email in database
function findEmail(req, res, next) {
  const email = req.body.email;
  user
    .findOne({ email: email })
    .then((isEmail) => {
      if (isEmail) {
        res.end("email already exist");
      } else {
        next();
      }
    })
    .catch(() => {
      console.log("oops 500 anything went wrong");
    });
}

function SignupDataSave(req, res) {
  const { fullname, email, password } = req.body;
  var token = jwt.sign(email, "1234ertuy7egbrty54fh5tg");
  const accountActive = false;
  const userAttribute = {
    fullname,
    email,
    password,
    accountActive,
    token,
  };
  const newUser = new user(userAttribute);
  newUser.save();
  res.cookie("DomainBird", token);
  res.end("saved");
}

module.exports = { SignupDataSave, findEmail, formValidation };
