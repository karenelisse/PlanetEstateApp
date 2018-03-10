var modAgentCtrl = angular.module('modAgentCtrl', []);
modAgentCtrl.controller('modAgentController', function($scope, $http, $routeParams, filepickerService){
    $scope.agent = {};
    //get the id to query the db and retrieve the correct agent
    var id = $routeParams.id;
    
    $http.get('/agent/' + id)
        .then(function(data){
            //console.log(data);
            $scope.agent = data;
        })
    /*
        .error(function(data) {
            console.log('Error: ' + data);
        }); */    


    $scope.updateAgent = function(){
        $http.put('/agent/'+ id, $scope.agent)
            .then(function(data){
                console.log(JSON.stringify(data));
                //Clean the form to allow the user to create new agents
            });
    };
    //Single File Upload
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
    
    });