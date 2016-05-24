(function(){
  'use strict';

  angular.module('app.listpedido.directive', [

  ]).directive('listpedido',listpedido);

  listpedido.$inject = [];
  function listpedido(){
    return {
      scope:{},
      templateUrl:'app/listarpedidos/pedidos-list.html'
  };
  }

})();
