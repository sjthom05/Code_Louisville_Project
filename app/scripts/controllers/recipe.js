'use strict'

RecipeCtrl.$inject = ['$scope', '$routeParams', 'DataService']

function RecipeCtrl($scope, $routeParams, DataService) {

    $scope.recipeId = $routeParams.recipeId;
    
    DataService.getRecipe($scope.recipeId, function(response){
        console.log(response)
        var recipe = response.data.recipe;
        $scope.recipeArray = recipe;
    });

    $scope.saveRecipe = function(recipe){
        
        DataService.saveRecipe(recipe)
        .finally(
            //TODO: pop a message on the screen
            //      that the recipe has been saved
        );

    };
};

module.exports = RecipeCtrl;