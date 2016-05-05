(function(){
    'use strict';

    angular.module('app.bienvenido.directive', [

    ]).directive('bienvenido', bienvenido);

    home.$inject = [];
    function bienvenido(){
      return{
        scope:{},
        templateUrl:'app/bienvenido/bienvenido.html'
      };
    }

})();
