(function(){
    'use strict';

    angular.module('app.bienvenido.router', [
        'app.bienvenido.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('bienvenido',{
                  url: '/bienvenido',
                  views:{
                    'encabezadoview':{
                       template: '<encabezadoview/>'
                    },
                    'bienvenido':{
                       template: '<bienvenido/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
