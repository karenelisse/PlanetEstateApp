var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
    $scope.planets = [];
    //Retrieve all the planets to show the gallery
    $http.get('/planet')
        .then(function(data){
            console.log(JSON.stringify(data));
            $scope.planets = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

});