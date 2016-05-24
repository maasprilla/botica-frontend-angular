(function(){
  'use strict';

  angular.module('app.administrarpedido.router',[

  ]).config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.
            state('administrarpedido',{
              url:'/administrarpedido',
              views:{
                'encabezadosimple':{
                  template:'<encabezadosimple/>'
                },
                'administrarpedido':{
                  template:'<administrarpedido/>'
                },
                'piedepagina':{
                  template:'<piedepagina/>'
                }
              }
            });
  }
})();
