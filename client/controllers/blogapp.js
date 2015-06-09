var blogApp = angular.module('blogApp', ['ngRoute']);


blogApp.config(['$routeProvider',function($routeProvider) {
	console.log('Inside route');

	$routeProvider
		.when('/login',{
			templateUrl:'views/login.html',
			controller:'loginController'
		})
	
}])


blogApp.controller('loginController', ['$scope', function($scope){
	console.log('Inside login controller');
	
	$scope.login = function(){
		console.log("Inside login function");
	}
}])

blogApp.controller('mainController', ['$scope','$http', function($scope,$http){
	console.log('Inside main controller');
	$scope.pageURL = 'views/login.html'
	$http.get('/user').success(function(data,status,headers,config){
		$scope.pageURL = 'views/user.html'
		window.localStorage.setItem("other response",JSON.stringify(data));
	})

}])