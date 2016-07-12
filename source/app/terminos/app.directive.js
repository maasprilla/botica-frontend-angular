(function(){
    'use strict';

    angular.module('app.terminos.directive', [

    ]).directive('terminos', terminos);

    terminos.$inject = [];
    function terminos(){
      return{
        scope:{},
        templateUrl:'app/terminos/terminos.html'
      };
    }

})();
