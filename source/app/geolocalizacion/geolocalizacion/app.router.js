(function(){
    'use strict';

    angular.module('app.geolocalizacion.router', [
      'app.geolocalizacion.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('geolocalizacion',{
                  url: '/geolocalizacion',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'geolocalizacion':{
                       template: '<geolocalizacion/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
