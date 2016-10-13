var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var dbConfig = require('./dbConfig');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(dbConfig.getDbConfigString(), function(err){
    if(err){
        console.log(err);
    } else {
        console.log("DB connected successfully");
    }
});

setupController(app);
apiController(app);

var port = Number(process.env.PORT || 8080);

app.listen(port);
