(function(){
    'use strict';

    angular.module('app.administradores.list.router', [
      'app.administradores.list.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('administradoreslist',{
                  url: '/administradoreslist',
                  views:{
                    'encabezadoadmin':{
                       template: '<encabezadoadmin/>'
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
