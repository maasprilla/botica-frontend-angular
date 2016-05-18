(function(){
    'use strict';

    angular.module('app.geolocalizacion.directive', [

    ]).directive('geolocalizacion', geolocalizacion);


    geolocalizacion.$inject = [];
    function geolocalizacion(){
      return{
        scope:{},
        templateUrl:'app/geolocalizacion/geolocalizacion/geolocalizacion.html',
        controller: 'geolocalizacionCtrl',
        controllerAs: 'vm'
      }
    }




})();
