const express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Hello 123!');
});


app.listen(8080);