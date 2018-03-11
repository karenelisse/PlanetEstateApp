//Main file
var app = angular.module('PlanetEstateApp', ['addPlanetCtrl', 'listingCtrl', 'detailCtrl', 'detailAgentCtrl', 'agentCtrl', 'addAgentCtrl', 'modAgentCtrl', 'LoginCtrl','SignUpCtrl','NavCtrl', 'ngRoute',  'angular-filepicker'])
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
            controller: 'listingController',
            resolve: {
                logincheck: checkLoggedin
              }
        })
        
        .when('/detailAgent/:id', {
            templateUrl: 'partials/inner/detailAgent.html',
            controller: 'detailAgentController',
            resolve: {
                logincheck: checkLoggedin
              }
        })
        .when('/agents', {
            templateUrl: 'partials/agents.html',
            controller: 'agentController'
        })
        
        .when('/agentHome', {
            templateUrl: 'partials/inner/agentHome.html',
            controller: 'navController',
            resolve: {
                logincheck: checkLoggedin
              }
        })
        
        .when('/allAgents', {
            templateUrl: 'partials/inner/allAgents.html',
            controller: 'agentController',
            resolve: {
                logincheck: checkLoggedin
              }
            
        })
        .when('/addAgent', {
            templateUrl: 'partials/inner/addAgent.html',
            controller: 'addAgentController',
            resolve: {
                logincheck: checkLoggedin
              }
        })
        .when('/modAgent/:id', {
            templateUrl: 'partials/inner/modAgent.html',
            controller: 'modAgentController',
            resolve: {
                logincheck: checkLoggedin
              }
        })
        .when('/about', {
            templateUrl: 'partials/about.html'
        })
        .when('/login', {
          templateUrl: 'partials/inner/login.html',
          controller: 'LoginCtrl'
        })
        .when('/signup', {
          templateUrl: 'partials/inner/signup.html',
          controller: 'SignUpCtrl',
            resolve: {
                logincheck: checkLoggedin
              }
        })
        
        .when('/contact/:id', {
            templateUrl: 'partials/contact.html',
            controller: 'modAgentController'
        })
        
        //Redirect to home in all the other cases.
        .otherwise({redirectTo:'/home'});
        //Add the API key to use filestack service
        filepickerProvider.setKey('ADGvbGDtKScCRuNHOs7Qgz');
});


var checkLoggedin = function($http, $location, $rootScope) {
    return $http
        .get('/loggedin')
        .then(response => response.data)
        .then(function(user) {
            $rootScope.errorMessage = null;
            //User is Authenticated
            if (user != '0') {
                $rootScope.currentUser = user;
            } else {
                //User is not Authenticated
                $rootScope.errorMessage = 'You need to log in.';
                $location.url('/home');
                throw new Error('You need to log in.');
            }
        });
};
