(function(){
    'use strict';

    angular.module('app.usuarios.list.router', [
      'app.usuarios.list.controller'
    ]).config(configure);

    configure.$inject = ['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/');

      $stateProvider
              .state('usuarios-list',{
                  url: '/usuarioslist',
                  views:{
                    'encabezadoadmin':{
                       template: '<encabezadoadmin/>'
                    },
                    'listausuario':{
                       template: '<listausuario/>'
                    },
                    'piedepagina':{
                       template: '<piedepagina/>'
                    }
                  }
              });


    }

})();
