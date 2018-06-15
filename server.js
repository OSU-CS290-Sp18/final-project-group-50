var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser');

var twitdata = require('./twitData');



app.engine('handlebars', exphbs({

    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',

}));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());


var pictureData = require('./pictureurls');
var catalogueData = require('./catalogue');


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


var logger = require('./logger');
app.use(logger);


app.use(express.static('public'));


MongoClient.connect(mongoURL, function (err, client) {
    if (err) {
        console.log("Error: mongo client not connected");
        throw err;
    }
    db = mongoDBDatabase = client.db(DBName);

    app.listen(3001, function () {
        console.log("== Server listening on port 3001");

    });
});

app.get('/snacks', function (req, res, next) {

    var snackCollection = db.collection('snacks');

    snackCollection.find().toArray(function (err, snackDocs) {
        if (err) {
            res.status(500).send("Error fetching people from DB.");
        } else if (snackDocs.length > 0) {
            res.status(200).render('snackspage', {
                pic: snackDocs
            });
        } else {
            next();
        }
    });
});

app.get('/drinks', function (req, res, next) {

    var drinkCollection = db.collection('drinkcollection');

    drinkCollection.find().toArray(function (err, drinkDocs) {
        if (err) {
            res.status(500).send("Error fetching people from DB.");
        } else if (drinkDocs.length > 0) {
            res.status(200).render('drinkspage', {
                pic: drinkDocs
            });
        } else {
            next();
        }
    });
});



app.get('/cart', function (req, res, next) {
    
    res.render('cart', {
        pic: twitdata
    });
    res.status(200);
});

app.get('/add', function (req, res, next) {

    console.log("in main file");


    res.status(200).render('body', {
        twit: twitdata,
    });

});


app.get('*', function (req, res, next) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.get('*', function (req, res, next) {
    res.status(200).sendFile(__dirname + '/public/adding.html');
});




app.post('/cart/add/:n', function (req, res, next) {

    var num = req.params.n;
    var url;
    if (num == 1) {
        console.log("number is one");
        url = "https://i5.walmartimages.com/asr/d9ca8a3e-7155-42cd-b9cf-b77f14a25718_1.52be72f9444f75ad5b8d36fde3455cfb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF";
    }
    else if (num == 2) {
        console.log("number is two")
        url = "https://images-na.ssl-images-amazon.com/images/I/81FuiByap6L._SX355_.jpg";
    }
    else if (num == 3) {
        console.log("number is two")
        url = "https://www.fritolay.com/images/default-source/blue-bag-image/doritos-cool-ranch.png?sfvrsn=a64e563a_2";
    }
    else if (num == 4) {
        console.log("number is two")
        url = "https://images-na.ssl-images-amazon.com/images/I/71ZXdOk08nL._SY355_.jpg";
    }
    else if (num == 5) {
        console.log("number is two")
        url = "https://www.generalmillscf.com/~/media/images/product/product-detail/snacks-and-bars/bars/nature-valley/11582000-nature-valley-crunchy-oats-honey-074oz.ashx";
    }
    else if (num == 6) {
        console.log("number is two")
        url = "https://sep.yimg.com/ay/candy-crate/m-m-s-plain-candy-2ct-coming-soon-3.gif";
    }


    /*url =  "https://images-na.ssl-images-amazon.com/images/I/81FuiByap6L._SX355_.jpg";*/
    var photo = 
      {
          pic: url,
      };
    twitdata.push(photo);
    res.status(200).end();
    console.log("added" + url);

});


/*

app.post('/cart/:item', function (req, res) {
    var item = req.params.item.toLowerCase();

    console.log("== Reached Something");


  if (req.body && req.body.photoURL && req.body.caption) {
    console.log("== Client added the following product to cart:");

      // Add photo to mongoDB here.
      
    db.cart.insertOne(
        {
            pic: "https://images-na.ssl-images-amazon.com/images/I/81FuiByap6L._SX355_.jpg"
        });


    res.status(200).send("Photo successfully added");
  } else {
    res.status(400).send("Requests to this path must " +
      "contain a JSON body with photoURL and caption " +
      "fields.");
  }
});


app.get('/cart/:item', function (req, res, next) {

  var shopitem = req.params.item.toLowerCase();
  if (shopperData[shopitem]) {
    console.log("== req.body:", req.body);
    if (shopitem == "oreos") {

        console.log("~~~~~~~~~~~inserting");
        insertItem();
        res.status(200).sendFile(__dirname + '/public/cart.html');
        
    } else {
       
        res.status(400).send("Request needs a JSON body with caption and photoURL.");
    }
  } else {
     
    next();
  }
});


*/