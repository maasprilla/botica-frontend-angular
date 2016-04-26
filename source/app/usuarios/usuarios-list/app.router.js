(function(){
    'use strict';

    angular.module('app.usuarios.list.router', [
      'app.usuarios.list.controller'
    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('usuarios-list',{
                  url: '/usuarios-list',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'listausuario':{
                       template: '<listausuario/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
