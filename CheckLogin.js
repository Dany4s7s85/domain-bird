const user = require("./dbConn");
function CheckLogin(req, res) {
  const token = req.cookies.DomainBird;
  user
    .findOne({ token: token })
    .then((isData) => {
      if (isData && isData.accountActive === true) {
        res.end("true");
      } else {
        res.end("false");
      }
    })
    .catch(() => {
      console.log("error occured");
      res.end("false");
    });
}

module.exports = CheckLogin;
