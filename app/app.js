'use strict'

var angular = require('angular');


angular.module('myApp', ['ngRoute']);

require('./routes.js');
require('./scripts/services');
require('./scripts/directives');
require('./scripts/controllers');