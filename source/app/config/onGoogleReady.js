(function(){
    'use strict';

    angular.module('app.mapa.onGoogleReady',[])
    .directive('onGoogleReady', onGoogleReady);

    function onGoogleReady() {
      angular.bootstrap(document.getElementById("map"), ['app.ui-map']);
    }

})();
