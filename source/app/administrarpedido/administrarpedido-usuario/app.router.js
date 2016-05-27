(function(){
  'use strict';

  angular.module('app.administrarpedido-usuario.router',[
      'app.administrarpedido-usuario.controller'
  ]).config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.
            state('administrarpedido-usuario',{
              url:'/administrarpedido/usuario',
              views:{
                'encabezadosimple':{
                  template:'<encabezadosimple/>'
                },
                'administrarpedidousuario':{
                  template:'<administrarpedidousuario/>'
                },
                'piedepagina':{
                  template:'<piedepagina/>'
                }
              }
            });
  }
})();
