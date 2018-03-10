// Dependencies
var mongoose  = require('mongoose');
var Agent = require('../models/agent');
// App routes
module.exports = function() {
    return {
        /*
         * Get route to retrieve all the agents.
         */
        getAll : function(req, res){
            //Query the DB and if no errors, send all the agents
            var query = Agent.find({});
            query.exec(function(err, agents){
                if(err) res.send(err);
                //If no errors, send them back to the client
                res.json(agents);
            });
        },
        /*
         * Post route to save a new agent into the DB.
         */
        post: function(req, res){
            //Creates a new agent
            var newAgent = new Agent(req.body);
            //Save it into the DB.
            newAgent.save(function(err){
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(req.body);
            });
        },
        /*
         * Get a single agent based on id.
         */
        getOne: function(req, res){
            Agent.findById(req.params.id, function(err, agent){ 
                            
                if(err) res.send(err);
                //If no errors, send it back to the client
                res.json(agent);
            });     
        },
        /**
         * Update()
         */
        update: function(req, res) { 
            Agent.findById(req.params.id, function(err, agent){
                if(err) {
                    return res.status(500).json({
                        message: 'Error saving Agent',
                        error: err
                    });
                }
                if(!agent) {
                    return res.status(404).json({
                        message: 'No such agent'
                    });
                }

                agent.name =  req.body.name;
                agent.number =  req.body.number;
                agent.email =  req.body.email;
                agent.bio =  req.body.bio;
                
                agent.save(function(err, agent){
                    if(err) {
                        return res.status(500).json({
                            message: 'Error updating agent '+req.params.id
                        });
                    }
                    if(!agent) {
                        return res.status(404).json({
                            message: 'No such agent'
                        });
                    }
                    return res.json(agent);
                });
            });

        },

        /**
         * agent.remove()
         */
        remove: function(req, res) {
            var id = req.params.id;
            Agent.findByIdAndRemove(id, function(err, agent){
                if(err) {
                    return res.status(500).json({
                        message: 'Error getting agent.'
                    });
                }
                return res.json(agent);
            });
        }
    }
};  
    