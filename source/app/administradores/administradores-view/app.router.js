(function(){
    'use strict';

    angular.module('app.administradores.view.router', [
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('administradoresview',{
                  url: '/administradoresview/:idUsuario',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'administradoresview':{
                       template: '<administradoresview/>'
                    },

                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
