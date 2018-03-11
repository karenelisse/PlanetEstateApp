var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.PORT || 5000;
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var planet = require('./app/routes/planet')();
var agent = require('./app/routes/agent')();


//Passport
var passport = require('passport');
require('./app/config/passport')(passport); // pass passport for configuration

//Cookie and session
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(session({
  secret: 'this is the secret'
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

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

app.route('/agent')
    .post(agent.post)
    .get(agent.getAll);
app.route('/agent/:id')
    .get(agent.getOne)
    .delete(agent.remove)
    .put(agent.update);

require('./app/routes/auth.js')(app, passport); // load our routes and pass in our app and fully configured passport

app.listen(port);
console.log('listening on port ' + port);
