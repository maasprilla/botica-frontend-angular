(function(){
  'use strict';

  angular.module('app.home.controller', [
  ]).controller('homeCtrl', homeCtrl);


  homeCtrl.$inject = ['$location', '$mdToast'];
  function homeCtrl($location, $mdToast){

    var vm=this;

    vm.goRegistroUser=function(){
      $location.url('/regisuser');
    }

  }




})();
