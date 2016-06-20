(function(){
    'use strict';

    angular.module('app.geolocalizacion-drogueriaview.directive', [

    ]).directive('geolocalizaciondrogueriaview', geolocalizaciondrogueriaview);


    geolocalizaciondrogueriaview.$inject = [];
    function geolocalizaciondrogueriaview(){
      return{
        scope:{},
        templateUrl:'app/geolocalizacion/geolocalizacion-drogueriaview/geolocalizacion.html',
        controller: 'mapaView',
        controllerAs: 'vm'
      }
    }




})();
