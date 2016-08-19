(function(){
    'use strict';

    angular.module('app.droguerias.precios.router', [
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){


      $stateProvider
              .state('precios',{
                  url: '/precios',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'precios':{
                       template: '<precios/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
