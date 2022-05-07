const user = require("./dbConn");

function verifyEmail(req, res) {
  const token = req.query.token;
  user
    .findOne({ token: token })
    .then((havetoken) => {
      if (havetoken) {
        havetoken.token = null;
        havetoken.accountActive = true;
        havetoken.save();
        res.end("your account has been activated");
      }
    })
    .catch((error) => {
      res.end("err");
    });
}

module.exports = verifyEmail;
