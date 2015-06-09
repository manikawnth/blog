
exports.isAuthenticated = function(req,res,next){
	if(1){
		res.redirect('/login');
	}
	else{
		next();
	}
}

exports.homePage = function(req,res){
	res.json("Welcome to user route");
}