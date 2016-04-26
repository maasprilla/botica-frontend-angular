(function(){
    'use strict';

    angular.module('app.password.recovery.router', [
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
