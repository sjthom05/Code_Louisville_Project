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