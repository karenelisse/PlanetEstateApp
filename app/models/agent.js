//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defines Agent Schema
var AgentSchema = new Schema({
    name: {type: String, required: true},
    number: {type: String, required: true},
    email: {type: String, required: true},
    bio: {type: String}, //not required
    picture: {type: Schema.Types.Mixed}, //not required
    createdAt: {type: Date, default: Date.now},    
    
});

//Sets the createdAt parameter equal to current time
AgentSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt){
        this.createdAt = now;
    }
    next();
});

//exports the Agent Schema
module.exports = mongoose.model('agent', AgentSchema);
