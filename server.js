var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoDB = null;



//var mongoURL =
//	'mongodb://' + mongoUsername + ':' + mongoPassword + '@' +
//	mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoURL = 'mongodb://localhost:27017';

MongoClient.connect(mongoURL, function (err, client) {
    if (err) {
        throw err;
    }
    db = mongoDBDatabase = client.db(mongoDBName);
    app.listen(3000, function () {
        console.log("== Server listening on port 3000");
    });
});



/*

*/



var app = express();
var port = process.env.PORT || 3000;

app.use(express.static('public'));


app.get('*', function (req, res) {
    console.log('reached 404');
      res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.get('/', function (req, res) {
    console.log('Going to index');
    res.sendFile(path.join(__dirname, '../public', 'pracIndex.html'));

});

/*
app.get('/snacks', function (req, res, next) {
    var catalogueCollection = mongoDB.collection('catalogue');
    catalogueCollection.find().toArray(function (err, products) {
        if (err) {
            res.status(500).send("Error fetching people from DB.");
        } else {
            //res.status(200).sendFile(path.join(__dirname, 'public', 'catalogue.html'));
        }
    });
});

*/

app.get('/snacks', function (req, res, next) {
    var drink = req.params.person.toLowerCase();
    var catalogueCollection = mongoDB.collection('products');
    catalogueCollection.find({ type: snack }).toArray(function (err, snackDocs) {
        if (err) {
            res.status(500).send("Error fetching person from DB.");
        } else if (snackDocs.length > 0) {
            
            res.status(200).sendFile('snacks.html', snackDocs[0]);
        } else {
            next();
        }
    });
});
/*

app.get('/snacks', function (req, res) {
    res.sendFile('/snacks.html');
});

app.get('/sitemap', function (req, res) {
    res.sendFile('/drinks.html');
});


app.listen(port, function () {
      console.log("== Server is listening on port", port);
});




*/
