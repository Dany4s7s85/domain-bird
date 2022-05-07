const jwt = require("jsonwebtoken");
const user = require("./dbConn");
function SigninSave(req, res) {
  const data = req.body;

  const { email, password } = data;
  if (!email || !password) {
    res.end("Both fields required");
  } else {
    user
      .findOne({ email: email })
      .then((isEmail) => {
        if (isEmail.password === password) {
          const token = jwt.sign(email, "1234ertuy7egbrty54fh5tg");
          isEmail.token = token;
          isEmail.save();
          res.cookie("DomainBird", token);
          res.end("login");
        } else {
          res.end("invalid email or password");
        }
      })
      .catch((error) => {
        res.end("Oops! error:500 anything went wrong");
      });
  }
}

module.exports = SigninSave;
