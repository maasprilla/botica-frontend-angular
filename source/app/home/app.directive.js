(function(){
    'use strict';

    angular.module('app.home.directive', [

    ]).directive('home', home);

    home.$inject = [];
    function home(){
      return{
        scope:{},
        templateUrl:'app/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      };
    }

})();
