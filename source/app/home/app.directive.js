(function(){
    'use strict';

    angular.module('app.home.directive', [

    ]).directive('home', home);

    function home(){
      return{
        scope:{},
        templateUrl:'app/home/home.html'
      };
    }

})();
