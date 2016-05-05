(function(){
    'use strict';

    angular.module('app.droguerias.view.router', [
      'app.droguerias.view.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('drogueriasview',{
                  url: '/drogueriasview/:idUsuario',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'drogueriasview':{
                       template: '<drogueriasview/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
