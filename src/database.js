'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recipe', function(err){
  if(err) {
    console.log('Failed connecting to Mongodb');
  } else {
    console.log('Succecssfully connected to Mongo!');
  }
});
