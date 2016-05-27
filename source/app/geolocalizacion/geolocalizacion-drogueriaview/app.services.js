
angular.module('app.geolocalizacion-drogueriaview.services', ['uiGmapgoogle-maps']).config(
    ['uiGmapGoogleMapApiProvider', function(GoogleMapApiProviders) {
        GoogleMapApiProviders.configure({
          //  key: 'your api key',
    v: '3.20',
    libraries: 'places'
        });
    }]
);
