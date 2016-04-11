(function(){
    'use strict';

    angular.module('app.registrodroguerias.router', [
      'app.registrodroguerias.controller'
    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('regisdrog',{
                  url: '/regisdrog',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'registrodroguerias':{
                       template: '<registrodroguerias/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
