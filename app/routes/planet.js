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
        },
        /**
         * Update()
         */
        update: function(req, res) { 
            Planet.findById(req.params.id, function(err, planet){
                if(err) {
                    return res.status(500).json({
                        message: 'Error saving Planet',
                        error: err
                    });
                }
                if(!planet) {
                    return res.status(404).json({
                        message: 'No such planet'
                    });
                }

                planet.name =  req.body.name;
                planet.size =  req.body.size;
                planet.price =  req.body.price;
                planet.galaxy =  req.body.galaxy;
                planet.solarsystem =  req.body.solarsystem;
                planet.bio =  req.body.bio;
                planet.agent =  req.body.agent;
                planet.picture = req.body.picture;
                planet.morePictures = req.body.morePictures;
                
                planet.save(function(err, planet){
                    if(err) {
                        return res.status(500).json({
                            message: 'Error updating planet '+req.params.id
                        });
                    }
                    if(!planet) {
                        return res.status(404).json({
                            message: 'No such planet'
                        });
                    }
                    return res.json(planet);
                });
            });

        },

        /**
         * planet.remove()
         */
        remove: function(req, res) {
            var id = req.params.id;
            Planet.findByIdAndRemove(id, function(err, planet){
                if(err) {
                    return res.status(500).json({
                        message: 'Error getting planet.'
                    });
                }
                return res.json(planet);
            });
        }
    }
};  
    