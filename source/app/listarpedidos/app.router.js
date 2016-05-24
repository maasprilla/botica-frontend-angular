(function(){
  'use strict';

  angular.module('app.listpedido.router',[

  ]).config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.
            state('listpedido',{
              url:'/listpedido',
              views:{
                'encabezadosimple':{
                  template:'<encabezadosimple/>'
                },
                'listpedido':{
                  template:'<listpedido/>'
                },
                'piedepagina':{
                  template:'<piedepagina/>'
                }
              }
            });
  }
})();
