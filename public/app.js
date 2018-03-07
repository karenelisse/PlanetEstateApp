//Main file
var app = angular.module('PlanetEstateApp', ['addPlanetCtrl', 'galleryCtrl', 'detailCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addPlanet', {          
            templateUrl: 'partials/addPlanet.html',
            controller: 'addPlanetController'            
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'galleryController'
        })
        .when('/detail', {
            templateUrl: 'partials/detail.html',
            controller: 'detailController'
        })
        .when('/home', {
            templateUrl: 'partials/home.html'
        })
        //Redirect to addPlanet in all the other cases.
        .otherwise({redirectTo:'/home'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('AxaJWrEr9SKu6htPFDFxUz');
});
