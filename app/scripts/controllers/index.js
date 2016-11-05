'use strict'

var angular = require('angular');

angular.module('myApp').controller('MainCtrl', require('./main'));
angular.module('myApp').controller('RecipeListCtrl', require('./recipeList'));
angular.module('myApp').controller('RecipeCtrl', require('./recipe'));