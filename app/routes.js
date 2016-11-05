'use strict'

var angular = require('angular');

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/home.html'
    })
    .when('/RecipeList', {
        templateUrl: 'templates/recipeList.html',
        controller: 'RecipeListCtrl'
    })
    .when('/Recipe/:recipeId', {
        templateUrl: 'templates/recipe.html',
        controller: 'RecipeCtrl'
    })
    .when('/NewRecipe', {
        templateUrl: 'templates/recipe.html',
        controller: 'RecipeCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });

}]);