(function(){
    'use strict';

    angular.module('app.portafolioservicios.directive', [

    ]).directive('portafolioservicios', portafolioservicios);

    function portafolioservicios(){
      return{
        scope:{},
        templateUrl:'app/portafolioservicios/portafolioservicios.html'
      };
    }

})();
