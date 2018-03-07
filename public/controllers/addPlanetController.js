var addCtrl = angular.module('addPlanetCtrl', []);
addCtrl.controller('addPlanetController', function($scope, $http, filepickerService){
    $scope.planet = {};
    //Send the newly created planet to the server to store in the db
    $scope.createPlanet = function(){
        $http.post('/planet', $scope.planet)
            .success(function(data){
                console.log(JSON.stringify(data));
                //Clean the form to allow the user to create new planets
                $scope.planet = {};
            })
            .error(function(data) {
                console.log('**Error: ' + data);
            });
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