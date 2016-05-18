(function(){
  'use strict';

  angular.module('app.geolocalizacion.controller', [
  ]).controller('geolocalizacionCtrl', geolocalizacionCtrl);


  geolocalizacionCtrl.$inject = ['$scope', '$location', '$mdToast', '$stateParams'];
  function geolocalizacionCtrl($scope, $location, $mdToast, $stateParams){

    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };



  }





})();
