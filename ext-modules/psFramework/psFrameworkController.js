"use strict";
console.log("in ctrl");

angular.module("psFramework").controller("psFrameworkController",
['$scope',
    function($scope){
        $scope.$on('ps-menu-item-selected-event',function(evt,data){

            $scope.routeString= data.route;
            
        });
    }
]);