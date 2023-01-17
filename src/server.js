const express = require("express");

const server = express();

const secretList = [];

server.post("/", express.urlencoded({extended:false}),(req,res)=>{
    const secretMsg = req.body.secret;
    secretList.push({secretMsg});
    res.redirect("/");
})


module.exports = server;

