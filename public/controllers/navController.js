var NavCtrl = angular.module('NavCtrl', []);
NavCtrl.controller("navController", function($location, $scope, $http, $rootScope) {
  $scope.logout = function(user) {
  $http.post('/logout')
    .then(function() {
      $rootScope.currentUser = null;
      $location.url("/home");
    });
    
  }
});
