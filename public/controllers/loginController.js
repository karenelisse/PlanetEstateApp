var LoginCtrl = angular.module('LoginCtrl', []);
LoginCtrl.controller("LoginCtrl", function($location, $scope, $http, $rootScope) {
  $scope.login = function(user) {
    $http.post('/login', user)
      .then(function(response) {
        $rootScope.currentUser = response;
        $location.url("/agentHome");
      });
  }
});