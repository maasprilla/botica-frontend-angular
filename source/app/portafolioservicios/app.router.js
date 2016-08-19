(function(){
    'use strict';

    angular.module('app.portafolioservicios.router', [

    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('portafolioservicios',{
                  url: '/portafolioservicios',
                  views:{
                    'encabezadoportafolio':{
                       template: '<encabezadoportafolio/>'
                    },
                    'portafolioservicios':{
                       template: '<portafolioservicios/>'
                    },

                  }
              });


    }

})();
