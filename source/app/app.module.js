(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'ngResource',
        'angular.filter',
        'ngMaterial',
        //'templates',
        'app.config',
        'app.footer',
        'app.header',
        'app.home',
        'app.registrousuario',
        'app.registrodroguerias',
        'app.login',
        'app.administrarpedido',
        'app.realizarpedido',
        'app.medioambiente',
        'app.portafolioservicios'
    ]);

})();
