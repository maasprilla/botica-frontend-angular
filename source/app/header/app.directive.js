(function(){
  'use strict';

  angular.module('app.header.directive', [

  ]).directive('encabezado', encabezado)
  .directive('encabezadosimple', encabezadosimple)
  .directive('encabezadoportafolio', encabezadoportafolio)
  .directive('encabezadoambiental', encabezadoambiental);

  function encabezado(){
    return {
      scope:{},
      templateUrl: 'app/header/header.html',
      controller:'LoginController',
      controllerAs:'vm'
  };
}

  function encabezadosimple(){
    return {
      scope:{},
      templateUrl: 'app/header/headeronlynav.html'
  };
}

  function encabezadoportafolio(){
    return {
      scope:{},
      templateUrl: 'app/header/headerportafolio.html'
  };
}

function encabezadoambiental(){
  return {
    scope:{},
    templateUrl: 'app/header/headerambiental.html'
};
}





})();
