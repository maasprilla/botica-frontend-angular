(function(){
    'use strict';

    angular.module('app.home.router', [

    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('home',{
                  url: '/',
                  views:{
                    'encabezado':{
                       template: '<encabezado/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
