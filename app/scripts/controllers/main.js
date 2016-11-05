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