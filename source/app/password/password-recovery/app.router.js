(function(){
    'use strict';

    angular.module('app.password.recovery.router', [
      'app.password.recovery.controller'
    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('password-recovery',{
                  url: '/passrecover',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'passrecover':{
                       template: '<passrecover/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
