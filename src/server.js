const express = require("express");

const server = express();

const secretList = [];

server.get("/", (req, res) => {
  const secrets = secretList.map((secret) => {
    return `<li>${secret} - ANON</li>`;
  });
  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>Document</title>
</head>
<body>
<h1>Dirty Little Secret</h1>

<form method="POST">
  <label for="secret">Enter your secrets:</label>
  <input name="secret" id="secret">
  <button>Tell me</button>
</form>
<ul>
  ${secrets.join("<br>")}
</ul>
</body>
</html>
  
  `;
  res.send(html);
});

server.post("/", express.urlencoded({ extended: false }), (req, res) => {
  secretList.push(req.body.secret);
  res.redirect("/");
});

module.exports = server;
