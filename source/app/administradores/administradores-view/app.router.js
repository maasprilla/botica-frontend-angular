(function(){
    'use strict';

    angular.module('app.administradores.view.router', [
    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('administradoresview',{
                  url: '/administradoresview',
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
