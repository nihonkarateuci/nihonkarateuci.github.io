var path = require('path')
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/images')


var listener = app.listen(process.env.PORT || 8000, function() {
    console.log('Test server running on ' + listener.address().port);
});