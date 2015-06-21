angular.module('fitLeague', [
	'ngRoute'
]).config(function ($routeProvider){
	'use strict';

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html', 
			controller: 'HomeCtrl', 
			controllerAs: 'Home'
		})
})