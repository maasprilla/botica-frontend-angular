(function(){
  'use strict';

  angular.module('app.realizarpedido.router',[

  ]).config(configure);

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
