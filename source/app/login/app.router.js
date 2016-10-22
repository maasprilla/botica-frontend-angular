(function(){
  'use strict';

  angular.module('app.login.router',[

  ]).config(configure);


  configure.$inject = ['$stateProvider', '$urlRouterProvider'];
  function configure($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
                  .state('login',{
                    url: '/login',
                    views:{
                      'encabezadosimple':{
                         template: '<encabezadosimple/>'
                      },
                      'login':{
                         template: '<login/>'
                      },
                      'piedepagina':{
                         template: '<piedepagina/>'
                      }
                    }
                  });
  }
})();
