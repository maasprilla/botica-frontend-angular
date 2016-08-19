(function(){
  'use strict';

  angular.module('app.home.controller', [
  ]).controller('homeCtrl', homeCtrl);


  homeCtrl.$inject = ['$location', '$mdToast', 'Droguerias'];
  function homeCtrl($location, $mdToast, Droguerias){

    var vm=this;

    vm.goRegistroUser=function(){
      $location.url('/regisuser');
    }

    vm.goLogin=function(){
      $location.url('/login');
    }

    vm.foundDrogueriasByNombre= function(nombre){
        return Droguerias.findDrogueriaByNombre({
            nombre:nombre
        });
    }

    vm.goDogueria=function(item){
      var id=item+'';
      $location.url('/drogueriasview/'+id);
    }

  }




})();
