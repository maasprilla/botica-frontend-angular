(function(){
    'use strict';

    angular.module('app.portafolioservicios.router', [

    ]).config(configure);

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
