(function(){
    'use strict';

    angular.module('app.registrousuarios.router', [
      'app.registrousuarios.controller'
    ]).config(configure);

    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('regisuser',{
                  url: '/regisuser',
                  views:{
                    'encabezadosimple':{
                       template: '<encabezadosimple/>'
                    },
                    'registrousuario':{
                       template: '<registrousuario/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
