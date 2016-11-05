'use strict'

function RecipeListCtrl($scope, $location, $log, DataService) {
    
    DataService.getRecipes(function(response){
        var recipes = response.data.recipes
        $scope.recipes = recipes;
    });

    $scope.deleteRecipe = function(recipe, index) {
        $scope.recipes.splice(index, 1);
        DataService.deleteRecipe(recipe)
    };

    $scope.go = function ( recipe ) {
        var path = '/Recipe/' + recipe._id;
        console.log(path)
        $location.path( path );
    };

};

module.exports = RecipeListCtrl;