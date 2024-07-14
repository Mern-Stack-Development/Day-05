const express = require('express');

var app = express();

app.get('/hello', function(req, res){
    res.send('Get Hello World!');
});

app.post('/hello', function(req, res){
    res.send("Post method called");
});

app.all('/newhello', function(req, res){
    res.send("All method called");
});

app.listen(8080);