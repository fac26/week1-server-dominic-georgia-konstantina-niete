const express = require("express");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Roboto:wght@500&display=swap" rel="stylesheet">
  <title>Document</title>
</head>
<body>
<div id="logo"></div>

<div id="circle">
  <h1>Dirty Little Secret</h1>
  <h2>A place to share your deepest darkest secrets anoymously</h2>
</div>

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
