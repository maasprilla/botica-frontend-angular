
angular.module('app.geolocalizacion.services', ['uiGmapgoogle-maps']).config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
          //  key: 'your api key',
    v: '3.20',
    libraries: 'places'
        });
    }]
);
