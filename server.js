/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:Connor Wilson
 * Email:wilsconn@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var data = require('./twitData.json');
var app = express();
var port = process.env.PORT || 3000;

/*Added*/
var MongoClient = require('mongodb').MongoClient;
var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;
const assert = require('assert');

var DBName = 'productDB';

var mongoURL = 'mongodb://localhost:27017';

var mongoDB = null;
/**/

MongoClient.connect(mongoURL, function (err, client) {
    if (err) {
        console.log("Error: mongo client not connected");
        throw err;
    }
    db = mongoDBDatabase = client.db(DBName);

    app.listen(3000, function () {
        console.log("== Server listening on port 3000");

    });
});


app.get('/snacks', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/public/snacks.html');
});

app.get('/drinks', function (req, res, next) {

    res.status(200).sendFile(__dirname + '/public/drinks.html');
});
app.get('/cart', function (req, res, next) {

    res.status(200).sendFile(__dirname + '/public/cart.html');
});


app.use(express.static('public'));

app.get('/',function (req, res,next){
res.status(200).render('body',{
     twit: data,
});

});
/*
app.get('/twits/:n',function(req,res,next){
  var number = req.params.n;
  console.log(typeof number);
  console.log("number is "+ number);

  if(number >= 0 || number <= 1)
  {

        if(data[number]){
          res.status(200).render('body',{
            twit:[data[number]]
          });
        }

  }
  else{
    next();
  }
});
*/

app.get('/snacks', function (req, res, next) {

    var snack = db.collection('catalogue');
    
    snack.find({ type: 'snack' }).toArray(function (err, snackDocs) {
        if (err) {
            res.status(500).send("Error fetching snack from DB.");
        } else if (snack.length > 0) {
            console.log("rendering body now");
            res.status(200).render('body', {
                twit: snackDocs[0]
            });
        } else {
            next();
        }
    });
});

app.get('*', function (req, res, next) {
    res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(3000, function (err) {
    if (!err) {
        console.log("== Server listening on port 3000");
    }
});


/*
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
*/
