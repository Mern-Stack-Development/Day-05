const express = require('express');

var app = express();

app.use(function(req, res, next) {
    console.log("Request received at"+Date.now());
    next();
});

app.listen(8080);