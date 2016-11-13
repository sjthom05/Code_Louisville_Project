'use strict'

var Recipe = require('../src/models/recipe.js')

var recipes = [
    {
        name: 'German Chocolate Cake',
        ingredients: [
            {ingredient: "2 sticks unsalted butter 226 grams, at room temperature, plus more to grease pan"},
            {ingredient: "2 ½ cups all-purpose flour 315 grams, plus more to dust the pan"},
            {ingredient: '3 tablespoons (30 grams) plus 1/2 cup (80 grams) bourbon or rye whiskey'},
            {ingredient: '½ cup (90 grams) candied ginger, chopped'},
            {ingredient: '1 ¾ cup (330 grams) light brown sugar'},
            {ingredient: '4 large eggs, at room temperature'},
            {ingredient: '2 teaspoons (8 grams) baking powder'},
            {ingredient: '1 teaspoon (5 grams) baking soda'},
            {ingredient: '1 ½ teaspoons (3 grams) ground cinnamon'},
            {ingredient: '1 teaspoon (5 grams) fine sea salt'},
            {ingredient: '½ teaspoon grated nutmeg'},
            {ingredient: '1 cup (227 grams) sour cream'},
            {ingredient: '1 tablespoon (15 grams) vanilla extract'},
            {ingredient: '1 ½ teaspoon (5 grams) finely grated lemon zest'},
            {ingredient: '2 medium Granny Smith apples about a pound, 454 grams, peeled, cored, and coarsely grated'},
            {ingredient: '1 cup (120 grams) finely chopped, toasted pecans'},
            {ingredient: '½ cup (100 grams) granulated sugar'},
            {ingredient: 'Juice of 1/2 lemon (20 grams)'}

        ],
        directions: [
            {direction: 'Heat the oven to 325 degrees. Grease and flour a 12-cup bundt pan. In a small bowl, combine 3 tablespoons bourbon and the candied ginger. Let stand 10 minutes.'},
            {direction: 'In the bowl of an electric mixer fitted with the paddle attachment, beat together the brown sugar and remaining butter on medium-high speed, until light and fluffy, about 5 minutes. Beat in the eggs, 1 at a time, until incorporated.'},
            {direction: 'In a separate bowl, whisk together the remaining flour with the baking powder, baking soda, cinnamon, salt and nutmeg. In a separate bowl, whisk together the sour cream and vanilla. Pour in the bourbon from the ginger mixture (reserve ginger) and whisk until smooth. Stir in zest.'},
            {direction: 'With the mixer on medium speed, add the dry mixture and sour cream mixture to the wet mixture in three additions, alternating between the two. Fold in the ginger, apples and pecans. Scrape the batter into the prepared pan. Bake until the cake is golden brown and a skewer inserted into the cake comes out dry, about 1 hour 10 minutes. Cool in the pan 20 minutes, then run a paring knife around the sides of the pan to release the cake; cool, flat side down, on a wire rack.'},
            {direction: 'While the cake cools, combine the 1/2 cup granulated sugar and 1/2 cup whiskey in a small saucepan. Over low heat, gently stir until the sugar dissolves. Stir in the lemon juice and take off the heat.'},
            {direction: 'While the cake cools, make 10 slits on top with a paring knife and pour half the bourbon-sugar mixture on the still-warm cake. When the cake is fully cool, flip it and pour the rest of the glaze on the other side, then flip again to serve.'}
        ]
    }
]

//create the seed data for the recipe list if it doesent exist
recipes.forEach(function(recipe, index){
    Recipe.find({name: recipe.name}, function(err, recipes){
        if(!err && !recipes.length) {
            Recipe.create(recipe, function(err){
                if (err) {
                    console.error(err.message);
                } else {
                    console.log(recipe.name + ' created!');
                }
            });
        }
    });
});