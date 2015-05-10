var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var passport = require('passport');
var db = require('./db');
var app = express();

app.use(passport.initialize());
app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**Setting up dummy client for Client API Test**/
app.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, access_token");
    next();
});
app.use("/", express.static(__dirname + '/../client'));
app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/../client" } );
});

require('./config/passport.js')(passport);

// user link router for link request
var linkRouter = express.Router();
app.use('/api/links', linkRouter); 

// inject our routers into their respective route files
require('./links/linkRoutes.js')(linkRouter, passport);

module.exports = app;
