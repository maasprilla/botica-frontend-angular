(function(){
    'use strict';

    angular.module('app.bienvenido.router', [

    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('bienvenido',{
                  url: 'bienvenido',
                  views:{
                    'encabezado':{
                       template: '<encabezado/>'
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
