var detailCtrl = angular.module('detailCtrl', []);
detailCtrl.controller('detailController', function($scope, $http, $routeParams){
    $scope.planet = [];
    //get the id to query the db and retrieve the correct planet
    var id = $routeParams.id;
    $http.get('/planet/' + id)
        .then(function(data){
            console.log("PLEASE WORK!"+data);
            $scope.planet = data;
        })
    /*
        .error(function(data) {
            console.log('Error: ' + data);
        }); */    
});

