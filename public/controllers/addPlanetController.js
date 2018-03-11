var addCtrl = angular.module('addPlanetCtrl', []);
addCtrl.controller('addPlanetController', function($scope, $http, $routeParams, filepickerService){
    $scope.planet = {};
    //Send the newly created planet to the server to store in the db
    $scope.createPlanet = function(){
        $http.post('/planet', $scope.planet)
            .then(function(data){
                console.log(JSON.stringify(data));
                //Clean the form to allow the user to create new planets
                $scope.planet = {};
                //$scope.successAlert = true;
                $scope.successTextAlert = "Planet Listing has been successfully updated!";
                $scope.showSuccessAlert = true;

                // switch flag
                $scope.switchBool = function (value) {
                $scope[value] = !$scope[value];
                };
                
            });
        //$scope.addCtrl.successAlert = true;
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
    /*
    $scope.dismissSuccess = function(){
    $scope.planet.successAlert = false;
        //$scope.$apply();
    }
    $scope.dismissError = function(){
        $scope.errorAlert = false;
    };*/
});