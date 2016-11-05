'use strict'

var mongoose = require('mongoose');

var IngredienteSchema = new mongoose.Schema({ingredient: String, amount: Number})
var RecipeDirectionSchema = new mongoose.Schema({direction: String});

var RecipeSchema = new mongoose.Schema({
    name: String,
    ingredientes: [IngredienteSchema],
    directions: [RecipeDirectionSchema]
});

var model = mongoose.model('Recipe', RecipeSchema);

module.exports = model