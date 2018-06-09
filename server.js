var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', function (req, res) {
    console.log('reached 404');
      res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.get('/', function (req, res) {
    console.log('Going to index');
    res.sendFile('/pracIndex.html');

});
/*

app.get('/snacks', function (req, res) {
    res.sendFile('/snacks.html');
});

app.get('/sitemap', function (req, res) {
    res.sendFile('/drinks.html');
});
*/

app.listen(port, function () {
      console.log("== Server is listening on port", port);
});