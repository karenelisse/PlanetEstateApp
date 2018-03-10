var listingCtrl = angular.module('listingCtrl', []);

listingCtrl.controller('listingController', function($scope, $http, $routeParams){
    $scope.planets = [];
    var id = $routeParams.id;
    //Retrieve all the planets to show the listing
    $http.get('/planet')
        .then(function(data){
            //console.log("THIS MY DATA!!"+JSON.stringify(data));
            $scope.planets = data;
        });
    
    $scope.deletePlanet = function(id){

        $http.delete('/planet/'+id)
            .then(function(data, status){
                console.log("SUCCESS!!"+status);
                $http.get('/planet')
                    .then(function(data){
                    $scope.planets=data;
                });
            });
    }; 
    /*
        .error(function(data) {
            console.log('Error: ' + data);
        }); */

});