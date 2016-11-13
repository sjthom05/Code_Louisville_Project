'use strict'

var express = require('express');
var parser = require('body-parser');
var router = require('./api')

var app = express();

//Connect to the database
require('./database');

//seed the database
require('../mock/seed.js')

//serve the static files
app.use(parser.json());
app.use('/', express.static('public'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));
app.use('/jquery', express.static('node_modules/jquery/dist'));

//Our Routes
app.use('/api', router);

//Start the server
app.listen(3000, function(){
  console.log("The server is running on port 3000");
});
