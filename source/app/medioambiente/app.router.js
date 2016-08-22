(function(){
    'use strict';

    angular.module('app.medioambiente.router', [

    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('medioambiente',{
                  url: '/medioambiente',
                  views:{
                    'encabezadoambiental':{
                       template: '<encabezadoambiental/>'
                    },
                    'medioambiente':{
                       template: '<medioambiente/>'
                    },
                    'piedepaginaambiental':{
                       template: '<piedepaginaambiental/>'
                    }
                  }
              });


    }

})();
