var listingCtrl = angular.module('listingCtrl', []);
listingCtrl.controller('listingController', function($scope, $http){
    $scope.planets = [];
    //Retrieve all the planets to show the listing
    $http.get('/planet')
        .then(function(data){
            console.log("THIS MY DATA!!"+JSON.stringify(data));
            $scope.planets = data;
        });
    /*
        .error(function(data) {
            console.log('Error: ' + data);
        }); */

});