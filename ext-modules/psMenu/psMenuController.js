"use strict";
console.log("in menu ctrl");

angular.module("psMenu").controller("psMenuController",
['$scope','$rootScope',
    function($scope,$rootScope){
           this.getActiveElement = function(){
               return $scope.getActiveElement;
           }
           this.setActiveElement = function(el){
             $scope.setActiveElement = el;
           };
           this.setRoute =  function(route){
           $rootScope.$broadcast('ps-menu-item-selected-event',{route:route});
     };
    }
]);