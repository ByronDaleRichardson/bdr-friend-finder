// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Data for "database"
var friends = require('./app/data/friends.js');

var app = express();
var PORT = 3313; 

// this makes the style.css work
app.use(express.static('app/public'));
app.use(express.static('app'));

// Set up the Express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Start server listening
app.listen(process.env.PORT || PORT, function () {
	console.log('App listening on PORT: ' + PORT);
});