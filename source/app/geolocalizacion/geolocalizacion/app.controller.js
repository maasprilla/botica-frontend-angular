(function() {
    'use strict';

    angular.module('app.geolocalizacion.controller', []).controller('geolocalizacionCtrl', geolocalizacionCtrl);


    var map;

    function geolocalizacionCtrl(Usuarios, $stateParams, $location, $mdToast) {


        var vm = this;

        var lat = null;
        var lng = null;
        var map = null;
        var geocoder = null;
        vm.marker = null;
        var direccion = null;
        var ciudad = null;
        vm.usuario = null;


        //jQuery(document).ready(function(){
        //   lat = jQuery('#lat').val();
        // lng = jQuery('#long').val();
        //jQuery('#pasar').click(function(){
        //  codeAddress();
        // return false;
        // });
        initialize();
        //});
        function initialize() {
            geocoder = new google.maps.Geocoder();
            if (lat && lng) { //if(lat !='' && lng != '') {
                var latLng = new google.maps.LatLng(lat, lng);
                console.log('latLng');
                console.log(lat);
                console.log(lng);
            } else if (direccion && ciudad) {
                var latLng = new google.maps.LatLng(3.5329039, -76.2946308);
                console.log('direccion and ciudad');
                codeAddress(direccion + '' + ciudad);
            } else {
                var latLng = new google.maps.LatLng(3.5329039, -76.2946308);
            }
            var myOptions = {
                center: latLng,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map"), myOptions);
            vm.marker = new google.maps.Marker({
                map: map,
                position: latLng,
                draggable: false
            });

            // Create the search box and link it to the UI element.
            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            // Bias the SearchBox results towards current map's viewport.
            map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds());
            });
            var markers = [];
            // [START region_getplaces]
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function() {
              searchBox.setBounds(map.getBounds());
});

var markers = [];
// [START region_getplaces]
// Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.
searchBox.addListener('places_changed', function() {
 var places = searchBox.getPlaces();
 vm.marker.setMap(null);

 if (places.length == 0) {
   return;
 }

 // Clear out the old markers.
 markers.forEach(function(marker) {

   marker.setMap(null);
 });
 markers = [];

 // For each place, get the icon, name and location.
 var bounds = new google.maps.LatLngBounds();
 places.forEach(function(place) {
  //  var icon = {
  //    url: place.icon,
  //    size: new google.maps.Size(71, 71),
  //    origin: new google.maps.Point(0, 0),
  //    anchor: new google.maps.Point(17, 34),
  //    scaledSize: new google.maps.Size(25, 25)
  //  };
  var infowindow = new google.maps.InfoWindow({
      content: '<input type="button" value="guardar"></input>',
      maxWidth: 350,
  });

   // Create a marker for each place.
   var newMarker=new google.maps.Marker({
     map: map,
     //icon: icon,
     title: place.name,
     position: place.geometry.location,
     draggable: true
   });

   newMarker.addListener('click', function() {
           infowindow.open(map, newMarker);
   });

   markers.push(newMarker);



   updatePosition(place.geometry.location);

   if (place.geometry.viewport) {
     // Only geocodes have viewport.
     bounds.union(place.geometry.viewport);
   } else {
     bounds.extend(place.geometry.location);
   }
 });
 map.fitBounds(bounds);
});
            // [END region_getplaces]


        }

        function codeAddress(direccion) {
            var address = direccion;
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    console.log('code');
                    console.log(results[0].geometry.location.lng());
                    console.log(results[0].geometry.location.lat());
                    vm.marker.setPosition(results[0].geometry.location);
                    updatePosition(results[0].geometry.location);
                    google.maps.event.addListener(vm.marker, 'dragend', function() {
                        updatePosition(vm.marker.getPosition());
                    });
                } else {
                    alert("No podemos encontrar la dirección, error: " + status);
                }
            });
        }

        function updatePosition(latLng) {
            jQuery('#lat').val(latLng.lat());
            jQuery('#long').val(latLng.lng());

        }


        function getUsuarios() {

            return Usuarios.get({
                idUsuario: $stateParams.idUsuario
            }).$promise.then(function(data) {
                console.log('data');
                console.log(data);
                vm.usuario = data;
                data.latitud;
                data.longitud;
                if (data.latitud != null && data.latitud != null) {
                    console.log('map');

                    lat = data.latitud;
                    lng = data.longitud;
                    initialize();
                } else {
                    direccion = data.direccion;
                    ciudad = data.ciudad.nombre;
                    console.log(direccion);
                    console.log(ciudad);
                    initialize();
                }

                vm.saveLocation = function() {
                    console.log('mappp');
                    console.log(map.getCenter().lng());
                    console.log(map.getCenter().lat());
                    // vm.usuario.longitud=marker.getPosition().lng();
                    // vm.usuario.latitud=marker.getPosition().lat();
                    // Usuarios.update(vm.usuario, function() {
                    //     $location.path('/geolocalizaciondrogueriasview/'+$stateParams.idUsuario);
                    //     $mdToast.show(
                    //         $mdToast.simple()
                    //             .textContent('Se ha  actualizado el usuario...')
                    //             .position('bottom right'));
                    // });
                }


            });
        }




    }
})();
