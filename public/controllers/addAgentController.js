var addAgentCtrl = angular.module('addAgentCtrl', []);
addAgentCtrl.controller('addAgentController', function($scope, $http, filepickerService){
    $scope.agent = {};
    //Send the newly created agent to the server to store in the db
    $scope.createAgent = function(){
        $http.post('/agent', $scope.agent)
            .then(function(data){
                //console.log(JSON.stringify(data));
                //Clean the form to allow the user to create new agents
                $scope.agent = {};
                //$scope.successAlert = true;
                
            });
        //$scope.addCtrl.successAlert = true;
    };
    
    //Single file upload, you can take a look at the options
    $scope.upload = function(){
        filepickerService.pick(
            {
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
            function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.agent.picture = Blob;
                $scope.$apply();
            }
        );
    };

    /*
    $scope.dismissSuccess = function(){
    $scope.agent.successAlert = false;
        //$scope.$apply();
    }
    $scope.dismissError = function(){
        $scope.errorAlert = false;
    };*/
});