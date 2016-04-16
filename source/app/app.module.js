(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngResource',
        'angular.filter',
        'ngMessages',
        'ngMaterial',
        'satellizer',
        //'templates',
        'app.config',
        'app.footer',
        'app.header',
        'app.home',
        'app.usuarios',
        'app.registrodroguerias',
        'app.login',
        'app.administrarpedido',
        'app.realizarpedido',
        'app.medioambiente',
        'app.portafolioservicios'
    ]);

})();
