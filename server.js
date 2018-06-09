var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
const publicPath = path.join(__dirname, './public');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', function (req, res) {
      res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.get('/', function (req, res) {
    console.log('Going to index');
    res.status(200).render('pracIndex');

});

app.listen(port, function () {
      console.log("== Server is listening on port", port);
});