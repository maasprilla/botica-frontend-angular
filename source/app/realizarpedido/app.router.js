(function(){
  'use strict';

  angular.module('app.realizarpedido.router',[
      'app.realizarpedido.controller'
  ]).config(configure);

  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
                  .state('realizarpedido',{
                  url: '/realizarpedido',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'realizarpedido':{
                      template: '<realizarpedido/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
                });
  }

})();
