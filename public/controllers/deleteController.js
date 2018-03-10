var deleteCtrl = angular.module('deleteCtrl', []);
deleteCtrl.controller('deleteController', function($scope, $http, $routeParams){
        $scope.planet = function(value){
          $http.delete("/planet", { '_id': value }).then(function(result) {
          console.log(result);
          $scope.resultDelete = result;
      });
    };
});