const express = require("express");
const { html } = require("./template.js");
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
  
  res.send(html(secrets));
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
