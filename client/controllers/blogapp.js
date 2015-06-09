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
	console.log('Inside controller');
}])

blogApp.controller('mainController', ['$scope', function($scope){
	console.log("Inside main controller");
	$scope.loginUrl = 'views/login.html';
}])