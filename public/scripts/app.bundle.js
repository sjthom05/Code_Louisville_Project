webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(15);


	angular.module('myApp', ['ngRoute']);

	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(20);
	__webpack_require__(21);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(15);

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(15);

	angular.module('myApp').service('DataService', __webpack_require__(19));

/***/ },
/* 19 */
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

	    /*
	    this.getRecipe = function (id){
	        $http.get('/api/recipe/' + id)
	        .then(function(result){
	            recipe = result.data.recipe;
	            return recipe;
	        });
	    };
	    */
	    

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
	            todo = result.data.recipe;
	            console.log('Updated recipe!')
	            return recipe;
	        });
	    };
	};

	module.exports = DataService;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(15);



/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	var angular = __webpack_require__(15);

	angular.module('myApp').controller('MainCtrl', __webpack_require__(22));
	angular.module('myApp').controller('RecipeListCtrl', __webpack_require__(23));
	angular.module('myApp').controller('RecipeCtrl', __webpack_require__(24));

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict'



	function MainCtrl($scope, $log, DataService) {
	    $scope.navItems = [
	        {'title': 'Home', 'path': '#/'},
	        {'title': 'Recipe List', 'path': '#/RecipeList'}
	    ]
	    $scope.activeNav = 'Home'
	    
	    $scope.isActive = function(title){
	        return $scope.activeNav === title;
	    }

	    $scope.toggle = function(title){
	        $scope.activeNav = title;
	    };

	    $scope.activate = function(element){
	        console.log(element)
	        $(element).addClass('active');
	    }
	};

	module.exports = MainCtrl;

/***/ },
/* 23 */
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
/* 24 */
/***/ function(module, exports) {

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

/***/ }
]);