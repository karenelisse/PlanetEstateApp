//Main file
var app = angular.module('PlanetEstateApp', ['addPlanetCtrl', 'listingCtrl', 'detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addPlanet', {          
            templateUrl: 'partials/addPlanet.html',
            controller: 'addPlanetController'            
        })
        .when('/listing', {
            templateUrl: 'partials/listing.html',
            controller: 'listingController'
        })
        .when('/detail/:id', {
            templateUrl: 'partials/detail.html',
            controller: 'detailController'
        })
        .when('/home', {
            templateUrl: 'partials/home.html'
        })
        //Redirect to home in all the other cases.
        .otherwise({redirectTo:'/home'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('AxaJWrEr9SKu6htPFDFxUz');
});
