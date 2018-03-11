var agentCtrl = angular.module('agentCtrl', []);

agentCtrl.controller('agentController', function($scope, $http, $routeParams){
    $scope.agents = [];
    var id = $routeParams.id;
    //Retrieve all the agents to show the agent
    $http.get('/agent')
        .then(function(data){
            //console.log("THIS MY DATA!!"+JSON.stringify(data));
            $scope.agents = data;
        });
    
    $scope.deleteAgent = function(id){
        $http.delete('/agent/'+id)
            .then(function(data, status){
                console.log("SUCCESS!!"+status);
                $http.get('/agent')
                    .then(function(data){
                    $scope.agents=data;
                    $scope.successTextAlert = "Agent has been successfully Deleted!";
                    $scope.showSuccessAlert = true;

                    // switch flag
                    $scope.switchBool = function (value) {
                    $scope[value] = !$scope[value];
                    };
                });
            });
    }; 

});