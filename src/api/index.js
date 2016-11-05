'use strict'

var express = require('express');
var Recipe = require('../models/recipe');

var router = express.Router();

//GET: gets all recipes from the database
//TODO: update this to only return the name and id
//      of each recipe
router.get('/recipes', function(req, res){
    Recipe.find({}).select('name _id')
    .exec(function(err, recipes){
        if(err){
            return res.status(500).json({message: err.message});
        }
        res.json({recipes: recipes});
    });
});

//GET: gets one recipe from the database
router.get('/recipe/:id', function(req, res){
    var id = req.params.id;
    Recipe.find({'_id': id}, function(err, recipe){
        if(err){
            return res.status(500).json({message: err.message});
        }
        res.json({recipe: recipe});
    });
});

//POST: Creates a new recipe in the database
router.post('/recipe', function(req, res){
    var recipe = req.body;
    Recipe.create(recipe, function(err, recipe){
        if(err) {
            return res.status(500).json({message: err.message});
        }
        res.json({recipe: recipe, message: 'Recipe Created'});
    });
});

//PUT: Updates a recipe in the database
router.put('/recipe/:id', function(req, res) {
    var id = req.params.id;
    var recipe = req.body;
    if(recipe && recipe._id !== id) {
        return res.status(500).json({err: 'Ids dont match!'});
    }
    Recipe.findByIdAndUpdate(id, recipe, function(err, recipe) {
        if(err) {
            return res.status(500).json({message: err.message});
        }
        res.json({recipe: recipe, message: 'Recipe Updated'});
    });
});

//DELETE: Removes a recipe from the database
router.delete('/recipe/:id', function(req, res){
    var id = req.params.id;
    Recipe.findByIdAndRemove(id, function (err, result) {
        if(err) {
            return res.status(500).json({message: err.message});
        }
        res.json({message: 'Recipe Deleted'})
    });
});

module.exports = router;