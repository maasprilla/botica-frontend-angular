(function(){
  'use strict';
  angular.module('app.login.directive', [

  ]).directive('login', login);

  login.$inject = [];
  function login(){
    return{
      scope:{},
      templateUrl:'app/login/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    };
  }
})();
