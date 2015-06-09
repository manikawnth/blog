
var path = require('path');
var root = path.resolve(__dirname,'client')

exports.getLogin = function(req,res){
	res.sendFile('login.html',{root:root});
}

