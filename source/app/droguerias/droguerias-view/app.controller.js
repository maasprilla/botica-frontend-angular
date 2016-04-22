(function(){
  'use strict';

  angular.module('app.droguerias.view.controller', [
  ]).controller('drogueriasViewCtrl', drogueriasViewCtrl);


  drogueriasViewCtrl.$inject = ['$stateParams','$location', '$mdToast','Droguerias'];
  function drogueriasViewCtrl($stateParams, $location, $mdToast, Droguerias){
         this.usuario = Droguerias.get({ idUsuario: $stateParams.idDroguerias });
         console.log(this.usuario);
    }

})();
