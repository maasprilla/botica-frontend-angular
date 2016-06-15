(function(){
  'use strict';

  angular.module('app.bienvenido.controller', [
  ]).controller('bienvenidoCtrl', bienvenidoCtrl);


  bienvenidoCtrl.$inject = ['$q', '$location', '$mdToast','Usuarios', '$stateParams'];
  function bienvenidoCtrl($q, $location, $mdToast, Usuarios, $stateParams){

    var vm=this;

    //console.log($auth.getPayload().sub);




  }





})();
