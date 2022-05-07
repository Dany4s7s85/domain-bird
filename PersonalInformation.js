const user = require("./dbConn");
const nodemailer = require("nodemailer");

//nodmailer mail sender detail
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "domainbird03@gmail.com",
    pass: "domainbird@123",
  },
});

function PersonalInfo(req, res) {
  const token = req.cookies.DomainBird;
  const { company, phone, siturl, clients } = req.body;
  if (!company || !phone || !siturl || !clients) {
    res.end("All fields required");
  } else {
    user
      .findOne({ token: token })
      .then((isFound) => {
        isFound.company = req.body.company;
        isFound.phone = req.body.phone;
        isFound.siturl = req.body.siturl;
        isFound.clients = req.body.clients;
        isFound.save();
        //setup varification email for user
        var mailOption = {
          from: "domainbird03@gmail.com",
          to: isFound.email,
          subject: "Email Varification",
          html: `<h2>Hello, ${isFound.fullname} </h2>
                <p>This email only for verification click on <br /><a href="http://${req.headers.host}/verified?token=${isFound.token}"><br />Click Me</a> for activating your account
                and then login. you can able to access our services. </p>`,
        };

        //send email to user for verify
        transporter.sendMail(mailOption, function (error, info) {
          if (error) {
            console.log("nodemailer show error");
          } else {
            res.end("register");
          }
        });
      })
      .catch((error) => {
        res.end("Unexpected error occured");
      });
  }
}

module.exports = { PersonalInfo };
