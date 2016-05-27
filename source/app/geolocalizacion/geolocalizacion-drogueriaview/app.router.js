(function(){
    'use strict';

    angular.module('app.geolocalizacion-drogueriaview.router', [
      'app.geolocalizacion-drogueriaview.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('geolocalizacion-drogueriasview',{
                  url: '/geolocalizaciondrogueriasview/:idUsuario',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'geolocalizaciondrogueriaview':{
                       template: '<geolocalizaciondrogueriaview/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
