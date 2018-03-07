// Dependencies
var mongoose  = require('mongoose');
var Planet = require('../models/planet');
// App routes
module.exports = function() {
    return {
        /*
         * Get route to retrieve all the planets.
         */
        getAll : function(req, res){
            //Query the DB and if no errors, send all the planets
            var query = Planet.find({});
            query.exec(function(err, planets){
                if(err) res.send(err);
                //If no errors, send them back to the client
                res.json(planets);
            });
        },
        /*
         * Post route to save a new planet into the DB.
         */
        post: function(req, res){
            //Creates a new planet
            var newPlanet = new Planet(req.body);
            //Save it into the DB.
            newPlanet.save(function(err){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(req.body);
            });
        },
        /*
         * Get a single planet based on id.
         */
        getOne: function(req, res){
            Planet.findById(req.params.id, function(err, planet){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(planet);
            });     
        }
    }
};  