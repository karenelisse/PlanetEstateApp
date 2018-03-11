var SignUpCtrl = angular.module('SignUpCtrl', []);
SignUpCtrl.controller("SignUpCtrl", function($location, $scope, $http, $rootScope) {
  $scope.signup = function(user) {
    if (user.password == user.password2) {
      $http.post('/signup', user)
        .then(function(user) {
          $rootScope.currentUser = user;
          $location.url("/agentHome");
        });
    }
  }
});