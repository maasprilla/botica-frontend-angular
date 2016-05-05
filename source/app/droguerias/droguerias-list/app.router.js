(function(){
    'use strict';

    angular.module('app.droguerias.list.router', [
      'app.droguerias.list.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('drogueriaslist',{
                  url: '/drogueriaslist',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'listdroguerias':{
                       template: '<listdroguerias/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
