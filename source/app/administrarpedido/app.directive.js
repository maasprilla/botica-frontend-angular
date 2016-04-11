(function(){
  'use strict';

  angular.module('app.administrarpedido.directive', [

  ]).directive('administrarpedido',administrarpedido);


  function administrarpedido(){
    return {
      scope:{},
      templateUrl:'app/administrarpedido/administrarpedido.html'
  };
  }

})();
