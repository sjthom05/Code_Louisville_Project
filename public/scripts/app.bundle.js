webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1);


	angular.module('myApp', ['ngRoute']);

	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(6);
	__webpack_require__(7);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1);

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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);

	angular.module('myApp').service('DataService', __webpack_require__(5));

/***/ },
/* 5 */
/***/ function(module, exports) {

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
	        return $http.delete('/api/recipe' + recipe._id)
	        .then(function() {
	            console.log('I deleted the ' + recipe.name + " recipe!");
	            this.getRecipes();
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

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1);



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(1);

	angular.module('myApp').controller('MainCtrl', __webpack_require__(8));
	angular.module('myApp').controller('RecipeListCtrl', __webpack_require__(9));
	angular.module('myApp').controller('RecipeCtrl', __webpack_require__(10));

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict'



	function MainCtrl($scope, DataService, $location) {
	    $scope.navItems = [
	        {'title': 'Home', 'path': '#/'},
	        {'title': 'Recipe List', 'path': '#/RecipeList'}
	    ]
	    $scope.activeNav = '#'+$location.url();
	    
	    $scope.isActive = function(title){
	        return $scope.activeNav === title;
	    }

	    $scope.toggle = function(path){
	        $scope.activeNav = path;
	    };

	    $scope.activate = function(element){
	        console.log(element)
	        $(element).addClass('active');
	    }
	};

	module.exports = MainCtrl;

/***/ },
/* 9 */
/***/ function(module, exports) {

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

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict'

	RecipeCtrl.$inject = ['$scope', '$routeParams', 'DataService']

	function RecipeCtrl($scope, $routeParams, DataService) {

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
	};

	module.exports = RecipeCtrl;

/***/ }
]);