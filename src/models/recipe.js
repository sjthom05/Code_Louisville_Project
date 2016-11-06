'use strict'

var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({ingredient: String, amount: Number})
var RecipeDirectionSchema = new mongoose.Schema({direction: String});

var RecipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [IngredientSchema],
    directions: [RecipeDirectionSchema]
});

var model = mongoose.model('Recipe', RecipeSchema);

module.exports = model