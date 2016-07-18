(function(){
    'use strict';

    angular.module('app.medioambiente.directive', [

    ]).directive('medioambiente', medioambiente);

    medioambiente.$inject = [];
    function medioambiente(){
      return{
        scope:{},
        templateUrl:'app/medioambiente/medioambiente.html'
      };
    }

})();
