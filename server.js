var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser());

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var path = require('path');
var static_files = path.resolve(__dirname,'client')
app.use(express.static(static_files));


var router = require('./routes.js');
app.use('/',router);


app.listen(8080,function(){
	console.log("App is listening");
})