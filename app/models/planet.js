//Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defines Planet Schema
var PlanetSchema = new Schema({
    name: {type: String, required: true},
    size: {type: Number, required: true },
    price: {type: Number, required: true},
    galaxy: {type: String, required: true},
    solarsystem: {type: String, required: true},
    bio: {type: String, required: true},
    agent: {type: Number, required: true},
    picture: {type: Schema.Types.Mixed, required: true},
    morePictures: Schema.Types.Mixed, //not required
    createdAt: {type: Date, default: Date.now},    
    
});

//Sets the createdAt parameter equal to current time
PlanetSchema.pre('save', function(next){
    now = new Date();
    if (!this.createdAt){
        this.createdAt = now;
    }
    next();
});

//exports the Planet Schema
module.exports = mongoose.model('planet', PlanetSchema);
