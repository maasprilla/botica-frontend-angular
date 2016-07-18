(function(){
  'use strict';

  angular.module('app.bienvenido.controller', [
  ]).controller('bienvenidoCtrl', bienvenidoCtrl);


  bienvenidoCtrl.$inject = ['$q', '$location', '$mdToast','Usuarios', '$stateParams', '$auth'];
  function bienvenidoCtrl($q, $location, $mdToast, Usuarios, $stateParams, $auth){

    var vm=this;

    vm.isAuthenticated = isAuthenticated;
    vm.isAdmin = isAdmin;
    vm.isUser = isUser;
    vm.isDrog = isDrog;

    isAuthenticated.$inject = [];
    function isAuthenticated() {
      return $auth.isAuthenticated();
    }

    isAdmin.$inject = [];
    function isAdmin() {
      if (isAuthenticated()){

        return $auth.getPayload().roles.indexOf('ADMIN') !== -1;
      }else{
        return false;
      }

    }

    isUser.$inject = [];
    function isUser() {
      if (isAuthenticated()){
        return $auth.getPayload().roles.indexOf('USER') !== -1;
      }else{
        return false;
      }

    }

    isDrog.$inject = [];
    function isDrog() {
      if (isAuthenticated()){
        return $auth.getPayload().roles.indexOf('DROG') !== -1;
      }else{
        return false;
      }

    }

    //console.log($auth.getPayload().sub);




  }





})();
