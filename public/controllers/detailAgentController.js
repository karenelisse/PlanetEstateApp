var detailAgentCtrl = angular.module('detailAgentCtrl', []);
detailAgentCtrl.controller('detailAgentController', function($scope, $http, $routeParams, filepickerService){
    $scope.planet = {};
    //get the id to query the db and retrieve the correct planet
    var id = $routeParams.id;
    
    $http.get('/planet/' + id)
        .then(function(data){
            //console.log(data);
            $scope.planet = data;
        })
    /*
        .error(function(data) {
            console.log('Error: ' + data);
        }); */    


    $scope.updatePlanet = function(){
        $http.put('/planet/'+ id, $scope.planet)
            .then(function(data){
                console.log(JSON.stringify(data));
                //Clean the form to allow the user to create new planets
            });
    };
    
    //gets Agent Info
    $scope.agents = [];
    var id = $routeParams.id;
    //Retrieve all the agents to show the agent
    $http.get('/agent')
        .then(function(agentdata){
            //console.log("THIS MY DATA!!"+JSON.stringify(agentdata));
            $scope.agents = agentdata;
        });
    
    
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
                $scope.planet.picture = Blob;
                $scope.$apply();
            }
        );
    };
    //Multiple files upload set to 3 as max number
    $scope.uploadMultiple = function(){
        filepickerService.pickMultiple(
            {
                mimetype: 'image/*',
                language: 'en',
                maxFiles: 3, //pickMultiple has one more option
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
                openTo: 'IMAGE_SEARCH'
            },
      function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.planet.morePictures = Blob;
                $scope.$apply();
            }
        );
    };  
    
    });