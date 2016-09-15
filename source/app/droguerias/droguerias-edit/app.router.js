(function(){
    'use strict';

    angular.module('app.droguerias.edit.router', [
      'app.droguerias.edit.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('drogueriasedit',{
                  url: '/drogueriasedit/:idUsuario',
                  views:{
                    'encabezadouser':{
                       template: '<encabezadouser/>'
                    },
                    'drogueriasedit':{
                       template: '<drogueriasedit/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
