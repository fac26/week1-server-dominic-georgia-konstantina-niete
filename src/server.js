const express = require("express");

const server = express();

const secretList = [];

server.get("/", (req, res) => {
  const secrets = secretList.map((secret) => {
    const date = new Date;
    const todayDate = date.toLocaleDateString("en-GB");
    return `<li>${secret} - Anonymous - ${todayDate} </li>`;
  });

  const html = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>Dirty Little Secrets</title>
</head>
<body>
<h1>Dirty Little Secrets</h1>
<form method="POST">
  <label for="secret">Enter your secrets:</label>
  <textarea name="secret" id="secret" placeholder="I like to collect dead leaves and paint them green"></textarea>
  <button>Tell me</button>
</form>
<ul>
${secrets.join("<br>")}
</ul>
</body>
</html>
`
response.send(html);
});

server.post("/", express.urlencoded({extended:false}),(request,response)=>{
    secretList.push(request.body.secret);
    response.redirect("/");
})

module.exports = server;