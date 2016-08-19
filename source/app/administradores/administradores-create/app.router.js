(function(){
    'use strict';

    angular.module('app.administradores.create.router', [
      'app.usuarios.create.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('regisadmin',{
                  url: '/regisadmin',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'registroadministrador':{
                       template: '<registroadministrador/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
