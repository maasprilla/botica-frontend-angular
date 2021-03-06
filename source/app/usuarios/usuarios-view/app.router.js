(function(){
    'use strict';

    angular.module('app.usuarios.view.router', [
      'app.usuarios.view.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('usuariosview',{
                  url: '/usuariosview/:idUsuario',
                  views:{
                    'encabezadoview':{
                       template: '<encabezadoview/>'
                    },
                    'usuariosview':{
                       template: '<usuariosview/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
