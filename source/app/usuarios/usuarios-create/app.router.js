(function(){
    'use strict';

    angular.module('app.usuarios.create.router', [
      'app.usuarios.create.controller'
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
