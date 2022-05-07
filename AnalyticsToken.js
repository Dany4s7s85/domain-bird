const { google } = require("googleapis");
const axios = require("axios");

const urlParse = require("url-parse");
const queryParse = require("query-string");
const getToken = async (req, res) => {
  try {
    const view_id = "260502616";
    const code = JSON.parse(JSON.stringify(req.body));
    const authToken = code["http://localhost:3000/analytics?code"];

    console.log(authToken);

    const YOUR_CLIENT_ID =
      "743421227540-p7s3c5i0pa4t3oft54ae0mnn56ssq224.apps.googleusercontent.com";
    const YOUR_CLIENT_SECRET = "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";
    const YOUR_REDIRECT_URL = "http://localhost:3000/analytics";

    const oauth2Client = new google.auth.OAuth2(
      YOUR_CLIENT_ID,
      YOUR_CLIENT_SECRET,
      YOUR_REDIRECT_URL
    );

    const tokens = await oauth2Client.getToken(authToken);
    oauth2Client.setCredentials(tokens);
    oauth2Client.refreshAccessToken(function (err, tokens) {
      // your access_token is now refreshed and stored in oauth2Client
      // store these new tokens in a safe place (e.g. database)
    });

    console.log(tokens);

    var credentials = {};
    (credentials.expiry_date = "1463514280558"),
      (credentials["refresh_token"] = tokens.tokens.refresh_token);
    credentials["access_token"] = tokens.tokens.access_token;
    oauth2Client.setCredentials(credentials);

    async function getData() {
      const result = await google.analytics("v3").data.ga.get({
        auth: oauth2Client,
        ids: "ga:" + view_id,
        "start-date": "30daysAgo",
        "end-date": "today",
        metrics: "ga:pageviews",
      });

      // console.dir(result);
    }
    getData();
  } catch (error) {
    console.log(error);
  }
};

module.exports = getToken;