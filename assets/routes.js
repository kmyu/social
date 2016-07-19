angular.module('app')
.config(function ($routeProvider, $locationProvider){
	console.log('this is app router');
	$routeProvider
	.when('/',{controller:'PostsCtrl', templateUrl:'posts.html'})
	.when('/register',{controller:'RegisterCtrl', templateUrl:'register.html'})
	.when('/login', {controller:'LoginCtrl', templateUrl: 'login.html'})

	$locationProvider.html5Mode(true)
})