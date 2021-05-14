var express = require('express');
var app = express();

// var { MongoClient } = require("mongodb");
// var url = "mongodb+srv://cluster0.obyul.mongodb.net/myFirstDatabase";
// var client = new MongoClient(url, {
// 	user: 'kshenoy', 
// 	password: 'welcome123',
// 	useUnifiedTopology: true
// });
// var obj = [{"image":"http://dummyimage.com/249x100.png/cc0000/ffffff","name":"Cookies Almond Hazelnut","price":"$264.19","brand":"Jenkins, Boyer and Harvey","category":"Tools","pid":"a650a7a1-2559-40ae-b4c4-0f8630eb34df"}];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', (req, res) => {
    // client.connect(function(err, db){
    //     var dbo = db.db("db900");
    //     dbo.collection("products").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         res.send(result);
    //         db.close();
    //     });
    // });
	res.send("Success");
});

app.post('/insert', (req, res, next) => {
	console.log("POST RESPONSE BODY------------>", req);
	res.redirect('/');
});

app.listen(3000, function () {
    console.log('Port running at 3000!');
});
