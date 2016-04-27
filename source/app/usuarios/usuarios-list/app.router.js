(function(){
    'use strict';

    angular.module('app.usuarios.list.router', [
      'app.usuarios.list.controller'
    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('usuarios-list',{
                  url: '/usuarioslist',
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
