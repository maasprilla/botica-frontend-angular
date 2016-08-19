(function(){
    'use strict';

    angular.module('app.droguerias.precios.directive', [

    ]).directive('precios', precios);

    precios.$inject = [];
    function precios(){
      return{
        scope:{},
        templateUrl:'app/droguerias/precios/precios.html',
        controller: '',
        controllerAs: 'vm'
      };
    }

})();
