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
        'app.ciudades',
        'app.home',
        'app.usuarios',
        'app.droguerias',
        'app.login',
        'app.administradores',
        'app.administrarpedido',
        'app.realizarpedido',
        'app.medioambiente',
        'app.portafolioservicios',
    ]);

})();
