//Main file
var app = angular.module('PlanetEstateApp', ['addPlanetCtrl', 'listingCtrl', 'detailCtrl', 'detailAgentCtrl', 'agentCtrl', 'addAgentCtrl', 'modAgentCtrl', 'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider.when('/addPlanet', {          
            templateUrl: 'partials/inner/addPlanet.html',
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
            templateUrl: 'partials/home.html',
            controller: 'listingController'
        })
        
        .when('/listingAgent', {
            templateUrl: 'partials/inner/listingAgent.html',
            controller: 'listingController'
        })
        
        .when('/detailAgent/:id', {
            templateUrl: 'partials/inner/detailAgent.html',
            controller: 'detailAgentController'
        })
        .when('/agents', {
            templateUrl: 'partials/agents.html',
            controller: 'agentController'
        })
        
        .when('/agentHome', {
            templateUrl: 'partials/inner/agentHome.html'
        })
        
        .when('/allAgents', {
            templateUrl: 'partials/inner/allAgents.html',
            controller: 'agentController'
        })
        .when('/addAgent', {
            templateUrl: 'partials/inner/addAgent.html',
            controller: 'addAgentController'
        })
        .when('/modAgent/:id', {
            templateUrl: 'partials/inner/modAgent.html',
            controller: 'modAgentController'
        })
        
        //Redirect to home in all the other cases.
        .otherwise({redirectTo:'/home'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('AxaJWrEr9SKu6htPFDFxUz');
});
