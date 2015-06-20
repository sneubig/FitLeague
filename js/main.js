/**
* Main AngularJS Web Application
*/
var app = angular.module('tutorialWebApp', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider

		// Home
		.when("/", {templateUrl: "partials/home.html", <span class="highlight">controller: "PageCtrl"</span>})
		// Pages
		.when("/about", {templateUrl: "partials/about.html", <span class="highlight">controller: "PageCtrl"</span>})
		.when("/faq", {templateUrl: "partials/faq.html", <span class="highlight">controller: "PageCtrl"</span>})
		/* etc… routes to other pages… */
		// Blog
		.when("/blog", {templateUrl: "partials/blog.html", <span class="highlight">controller: "BlogCtrl"</span>})
		.when("/blog/post", {templateUrl: "partials/blog_item.html", <span class="highlight">controller: "BlogCtrl"</span>})
		// else 404
		.otherwise("/404", {templateUrl: "partials/404.html", <span class="highlight">controller: "PageCtrl"</span>});
	}
]);

/**
* Controls the Blog
*/
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
console.log("Blog Controller reporting for duty.");
});

/**
* Controls all other Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");

// Activates the Carousel
$('.carousel').carousel({
interval: 5000
});

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
selector: "a[data-toggle=tooltip]"
})
});