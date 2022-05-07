const { google } = require("googleapis");
var opn = require("opn");
const analytics = google.analytics("v3");

function Googleanalytics(req, res) {
  const scopes = ["https://www.googleapis.com/auth/analytics.readonly"];
  const YOUR_CLIENT_ID =
    "743421227540-p7s3c5i0pa4t3oft54ae0mnn56ssq224.apps.googleusercontent.com";
  const YOUR_CLIENT_SECRET = "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";
  const YOUR_REDIRECT_URL = "http://localhost:3000/analytics";

  const oauth2Client = new google.auth.OAuth2(
    YOUR_CLIENT_ID,
    YOUR_CLIENT_SECRET,
    YOUR_REDIRECT_URL
  );

  const url = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: scopes,
  });
  // res.send(url);
  opn(url);
}

module.exports = Googleanalytics;

// client-ID = 743421227540-p7s3c5i0pa4t3oft54ae0mnn56ssq224.apps.googleusercontent.com
// client secret ID = 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
