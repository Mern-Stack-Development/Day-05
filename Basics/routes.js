const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send('This is GET!');
});

router.post('/', function(req, res){
    res.send('This is POST!');
});

module.exports = router;