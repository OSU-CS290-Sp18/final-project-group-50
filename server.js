/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:Connor Wilson
 * Email:wilsconn@oregonstate.edu
 */

var path = require('path');
var express = require('express');
<<<<<<< HEAD
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var DBName = 'catalogue';

var mongoDB = null;

//var mongoURL =
//	'mongodb://' + mongoUsername + ':' + mongoPassword + '@' +
//	mongoHost + ':' + mongoPort + '/' + mongoDBName;

var mongoURL = 'mongodb://localhost:27017';

/*

MongoClient.connect(mongoURL, function (err, client) {
    if (err) {
        console.log("Error: mongo client not connected");
        //throw err;
    }
    //db = mongoDBDatabase = client.db(mongoDBName);

    app.listen(3000, function () {
        console.log("== Server listening on port 3000");

    });

    
});

*/



/*

*/

const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Insert some documents
    collection.insertMany([
      { a: 1 }, { a: 2 }, { a: 3 }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}




=======
var exphbs = require('express-handlebars');
var data = require('./twitData.json');
>>>>>>> ChasenY
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

<<<<<<< HEAD
app.get('/', function (req, res) {
    console.log('Going to index');
    res.status(200).sendFile(path.join(__dirname, 'public', 'pracIndex.html'));

});

app.get('*', function (req, res) {
    console.log('reached 404');
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

/*
app.get('/drinks', function (req, res, next) {
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

    console.log('Going to snacks');

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
=======
    });
});


app.get('/snacks', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/public/snacks.html');
>>>>>>> ChasenY
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
<<<<<<< HEAD
      console.log("== Server is listening on port", port);
});




=======
  console.log("== Server is listening on port", port);
});
>>>>>>> ChasenY
*/
