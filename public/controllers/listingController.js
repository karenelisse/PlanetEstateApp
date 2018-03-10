var listingCtrl = angular.module('listingCtrl', []);

listingCtrl.controller('listingController', function($scope, $http, $routeParams){
    $scope.planets = [];
    var id = $routeParams.id;
    //Retrieve all the planets to show the listing
    $http.get('/planet')
        .then(function(data){
            console.log("THIS MY DATA!!"+JSON.stringify(data));
            $scope.planets = data;
        });
    
    $http.delete('/planet/' + id)
        .then(function(data){
            console.log("PLEASE DELETE!");
           
        });
    
    /*
        .error(function(data) {
            console.log('Error: ' + data);
        }); */

});