const express = require("express");

const server = express();

module.exports = server;

const secretsArray = [];
// const post

server.get("/", (request, response) => {
  const secrets = secretsArray.map((secret) => {
    return `<li>${secret} - ANON</li>`;
  });
  response.send(`
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
  <input for="secret" id="secret">
  <button>Tell me</button>
</form>
<ul>
${secrets}
</ul>
</body>
</html>
  

  `);
});

// post
