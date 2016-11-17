'use strict';

function DataService ($http) {

    this.getRecipes = function (callback) {
        $http.get('/api/recipes')
        .then(callback);
    };
    
    this.getRecipe = function (id, callback) {
        $http.get('/api/recipe/' + id)
        .then(callback);
    }

    this.deleteRecipe = function(recipe) {
        if (!recipe._id) {
            return $q.resolve();
        }
        return $http.delete('/api/recipe/' + recipe._id)
        .then(function() {
            console.log('I deleted the ' + recipe.name + " recipe!");
            //this.getRecipes();
        });
    };

    this.saveRecipe = function(recipe) {
        if(!recipe._id) {
            return $http.post('/api/recipe', recipe)
            .then(function(){
                console.log('I saved the recipe!');
            });
        }
        
        $http.put('/api/recipe/' + recipe._id, recipe)
        .then(function (result) {
            recipe = result.data.recipe;
            console.log('Updated recipe!')
            return recipe;
        });
    };
};

module.exports = DataService;