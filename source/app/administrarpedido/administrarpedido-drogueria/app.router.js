(function(){
  'use strict';

  angular.module('app.administrarpedido-drogueria.router',[
      'app.administrarpedido-drogueria.controller'
  ]).config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.
            state('administrarpedido-drogueria',{
              url:'/administrarpedido/drogueria',
              views:{
                'encabezadosimple':{
                  template:'<encabezadosimple/>'
                },
                'administrarpedidodrogueria':{
                  template:'<administrarpedidodrogueria/>'
                },
                'piedepagina':{
                  template:'<piedepagina/>'
                }
              }
            });
  }
})();
