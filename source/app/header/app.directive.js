(function(){
  'use strict';

  angular.module('app.header.directive', [

  ]).directive('encabezado', encabezado)
  .directive('encabezadosimple', encabezadosimple)
  .directive('encabezadoportafolio', encabezadoportafolio)
  .directive('encabezadoambiental', encabezadoambiental)
  .directive('encabezadodrog', encabezadodrog)
  .directive('encabezadopedido', encabezadopedido)
  .directive('encabezadoview', encabezadoview)
  .directive('encabezadoadmin', encabezadoadmin)
  .directive('encabezadouser', encabezadouser)
  .directive('encabezadopass', encabezadopass);

  encabezado.$inject = [];
  function encabezado(){
    return {
      scope:{},
      templateUrl: 'app/header/header.html',
      controller:'LoginController',
      controllerAs:'vm'
  };
}

  encabezadosimple.$inject = [];
  function encabezadosimple(){
    return {
      scope:{},
      templateUrl: 'app/header/headeronlynav.html',
      controller:'LoginController',
      controllerAs:'vm'
  };
}

  encabezadoportafolio.$inject = [];
  function encabezadoportafolio(){
    return {
      scope:{},
      templateUrl: 'app/header/headerportafolio.html'
  };
}

encabezadoambiental.$inject = [];
function encabezadoambiental(){
  return {
    scope:{},
    templateUrl: 'app/header/headerambiental.html'
};
}

encabezadodrog.$inject = [];
function encabezadodrog(){
  return {
    scope:{},
    templateUrl: 'app/header/headerdrog.html',
    controller:'LoginController',
    controllerAs:'vm'
};
}

encabezadopedido.$inject = [];
function encabezadopedido(){
  return {
    scope:{},
    templateUrl: 'app/header/headerPedido.html',
    controller:'LoginController',
    controllerAs:'vm'
};
}

encabezadoview.$inject = [];
function encabezadoview(){
  return {
    scope:{},
    templateUrl: 'app/header/headerview.html',
    controller:'LoginController',
    controllerAs:'vm'
};
}

encabezadopass.$inject = [];
function encabezadopass(){
  return {
    scope:{},
    templateUrl: 'app/header/headerpassconfirm.html',
    controller:'LoginController',
    controllerAs:'vm'
};
}

encabezadoadmin.$inject = [];
function encabezadoadmin(){
  return {
    scope:{},
    templateUrl: 'app/header/headeradmin.html',
    controller:'LoginController',
    controllerAs:'vm'
};
}

encabezadouser.$inject = [];
function encabezadouser(){
  return {
    scope:{},
    templateUrl: 'app/header/headeruser.html',
    controller:'LoginController',
    controllerAs:'vm'
};
}



})();
