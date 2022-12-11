const express = require('express');
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const router = express.Router();

// Define variables for Spotify API access
const client_id = "23a3c6f9357c415085bd245ca334cfab";
const client_secret = "aa5e3e7a7313476dbe60910e78022075";
const auth_str = "Basic " +
  Buffer.from(client_id + ":" + client_secret).toString('base64');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Slurp that dick till it cum!');
});

router.get('/code', async function (req, res) {
  // Receive code from front-end
  const code = req.query.code;
  console.log("Code", code);

  // Send token request to Spotify API
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": auth_str
    },
    body: `grant_type=authorization_code&code=${code}&redirect_uri=http://127.0.0.1:3000/`
  });
  console.log("RESPONSE", response)
});

module.exports = router;
