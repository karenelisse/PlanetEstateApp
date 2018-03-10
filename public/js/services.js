angular.module('PlanetEstateApp.services', []).factory('Planet', function($resource) {
  return $resource('planet/:id', { id: '@_id' }, {
    update: {
      method: 'PUT'
    }
  });
});