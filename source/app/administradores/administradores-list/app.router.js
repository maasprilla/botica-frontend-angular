(function(){
    'use strict';

    angular.module('app.administradores.list.router', [
      'app.administradores.list.controller'
    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('administradoreslist',{
                  url: '/administradoreslist',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'listadministrador':{
                       template: '<listadministrador/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
