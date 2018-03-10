var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 5000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

var planet = require('./app/routes/planet')();

// Just some options for the db connection
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } }; 

mongoose.connect('mongodb://vader:Darth1@ds257838.mlab.com:57838/planetestate', options);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// Log with Morgan
app.use(morgan('dev'));

// parse application/json and look for raw text                                   
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

// Static files
app.use(express.static(__dirname + '/public')); 

app.route('/planet')
    .post(planet.post)
    .get(planet.getAll);
app.route('/planet/:id')
    .get(planet.getOne)
    .delete(planet.remove)
    .put(planet.update);

app.listen(port);
console.log('listening on port ' + port);
