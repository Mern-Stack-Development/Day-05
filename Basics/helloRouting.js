const express = require('express');

var app = express();

app.get('/abc', function(req, res){
    res.send('Hello Routing!');
});


app.listen(8080);