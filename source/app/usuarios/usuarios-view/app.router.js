(function(){
    'use strict';

    angular.module('app.usuarios.view.router', [
      'app.usuarios.view.controller'
    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('usuariosview',{
                  url: '/usuariosview',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
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
