const express = require("express");

const server = express();

const staticHandler = express.static("public");

server.use(staticHandler);

const secretList = [];

server.get("/", (req, res) => {
  const secrets = secretList.map((secret) => {
    const date = new Date;
    const todayDate = date.toLocaleDateString("en-GB");
    return `<li>${secret}<br>
    - Anonymous - ${todayDate}</li>`;
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
  <title>Dirty Little Secret</title>
</head>
<body>
<div id="logo"></div>

<section class="circle">
  <div class="circle-text">
  <h1>Dirty Little Secret</h1>
  <h2>A place to share your deepest darkest secrets anonymously</h2>
  </div>
</section>
<form method="POST">
  <label for="secret">Enter your secrets:</label>
  <textarea name="secret" id="secret" placeholder="I like to collect dead leaves and paint them green"></textarea>
  <button>Tell me</button>
</form>
<ul>
${secrets.join(" ")}
</ul>
</body>
</html>
`;
  res.send(html);
});

server.post(
  "/",
  express.urlencoded({ extended: false }),
  (request, response) => {
    secretList.push(request.body.secret);
    response.redirect("/");
  }
);

module.exports = server;
