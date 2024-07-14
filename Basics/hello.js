const express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello New Output!');
});

app.listen(8080);