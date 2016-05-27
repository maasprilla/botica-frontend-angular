(function(){
    'use strict';

    angular.module('app.bienvenido.directive', [

    ]).directive('bienvenido', bienvenido);

    bienvenido.$inject = [];
    function bienvenido(){
      return{
        scope:{},
        templateUrl:'app/bienvenido/bienvenido.html',
        controller: 'bienvenidoCtrl',
        controllerAs: 'vm'
      }
    }

})();
