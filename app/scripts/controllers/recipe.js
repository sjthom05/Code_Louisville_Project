'use strict'

RecipeCtrl.$inject = ['$scope', '$routeParams', 'DataService', '$location']

function RecipeCtrl($scope, $routeParams, DataService, $location) {

    $scope.recipeId = $routeParams.recipeId;

    $scope.addIngredient = function () {
        $scope.recipe.ingredients.push({ingredient: 'New Ingredient', amount: 0});
    };

    $scope.deleteIngredient = function (index) {
        $scope.recipe.ingredients.splice(index, 1);
    };

    $scope.addDirection = function () {
        $scope.recipe.directions.push({direction: 'New Direction'})
    }

    $scope.deleteDirection = function (index) {
        $scope.recipe.directions.splice(index, 1);
    }

    if($scope.recipeId) {
        DataService.getRecipe($scope.recipeId, function(response){
            console.log(response)
            var recipe = response.data.recipe[0];
            $scope.recipe = recipe;
        });
    } else {
        $scope.recipe = {name: 'New Recipe',
                         ingredients: [],
                         directions: []}
        $scope.addIngredient();
        $scope.addDirection();
        $scope.editing = true;
    }

    $scope.saveRecipe = function(){
        
        $scope.editing = false;

        DataService.saveRecipe($scope.recipe);
    };

    $scope.deleteRecipe = function() {
        DataService.deleteRecipe($scope.recipe)
        $location.path('/RecipeList');
    };
};

module.exports = RecipeCtrl;