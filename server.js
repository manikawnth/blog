var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var path = require('path');
var static_files = path.resolve(__dirname,'client')

app.use(bodyParser());
app.use(cookieParser());

app.use(express.static(static_files));

app.get('/',function(req,res){
	console.log('Inside the root');
	res.redirect('/login');
})

app.get('/login',function(req,res){
	var options = {root:static_files};
	console.log('Inside the login')
	res.sendFile('login.html',options);
})



app.listen(8080,function(){
	console.log("App is listening");
})