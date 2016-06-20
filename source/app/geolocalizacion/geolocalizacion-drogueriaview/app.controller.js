(function() {
    'use strict';

    angular.module('app.geolocalizacion-drogueriaview.controller', []).controller('mapaView', mapaView);

    function mapaView(Usuarios, $stateParams) {
        var vm = this;

        var lat = null;
        var lng = null;
        var map = null;
        var geocoder = null;
        var marker = null;
        var direccion=null;
        var ciudad=null;

        function funcionClick() {
            console.log('event');
        }

        getUsuarios();

        //jQuery(document).ready(function(){
        //   lat = jQuery('#lat').val();
        // lng = jQuery('#long').val();
        //jQuery('#pasar').click(function(){
        //  codeAddress();
        // return false;
        // });
        //initialize();
        //});
        function initialize() {
            geocoder = new google.maps.Geocoder();
            if (lat && lng) { //if(lat !='' && lng != '') {
                console.log('aqui bien');
                console.log(lat);
                console.log(lng);


                var latLng = new google.maps.LatLng(lat, lng);
            } else if (direccion && ciudad) {
              var latLng = new google.maps.LatLng(3.5329039, -76.2946308);
                console.log('direccion and ciudad');
                codeAddress(direccion+''+ciudad);
            }else {
                var latLng = new google.maps.LatLng(3.5329039, -76.2946308);
            }
            console.log('pos');
            console.log(latLng.lng());
            var myOptions = {
                center: latLng,
                zoom: 18,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(document.getElementById("map"), myOptions);
            marker = new google.maps.Marker({
                map: map,
                position: latLng,
                title: "miguel",
                animation: google.maps.Animation.BOUNCE,
                draggable: false
            });

            marker.addListener('click', function() {
                if (marker.getAnimation() != null) {
                    marker.setAnimation(null);
                    vm.infowindow.open(map, marker);
                } else {
                    marker.setAnimation(google.maps.Animation.BOUNCE);
                    vm.infowindow.close(map, marker);
                }


            });

            google.maps.event.addListener(vm.infowindow, 'domready', function() {



            });





            updatePosition(latLng);
        }

        function codeAddress(direccion) {
            var address = direccion;
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    map.setCenter(results[0].geometry.location);
                    marker.setPosition(results[0].geometry.location);
                    updatePosition(results[0].geometry.location);
                    google.maps.event.addListener(marker, 'dragend', function() {
                        updatePosition(marker.getPosition());
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
                data.latitud;
                data.longitud;
                var content = '<div id="iw-container">' +
                    '<div class="iw-title">' + data.nombre + '</div>' +
                    '<div class="iw-content">' +
                    '<div class="iw-subTitle">History</div>' +
                    '<img src="http://maps.marnoto.com/en/5wayscustomizeinfowindow/images/vistalegre.jpg" alt="Porcelain Factory of Vista Alegre" height="115" width="83">' +
                    '<p>Founded in 1824, the Porcelain Factory of Vista Alegre was the first industrial unit dedicated to porcelain production in Portugal. For the foundation and success of this risky industrial development was crucial the spirit of persistence of its founder, José Ferreira Pinto Basto. Leading figure in Portuguese society of the nineteenth century farm owner, daring dealer, wisely incorporated the liberal ideas of the century, having become "the first example of free enterprise" in Portugal.</p>' +
                    '<div class="iw-subTitle">Contacts</div>' +
                    '<p>VISTA ALEGRE ATLANTIS, SA<br>3830-292 Ílhavo - Portugal<br>' +
                    '<br>Phone. +351 234 320 600<br>e-mail: geral@vaa.pt<br>www: www.myvistaalegre.com</p>' +
                    '</div>' +
                    '<div class="iw-bottom-gradient"></div>' +
                    '</div>';

                vm.infowindow = new google.maps.InfoWindow({
                    content: content,
                    maxWidth: 350,
                });
                if (data.latitud != null && data.latitud != null) {
                    console.log('map');

                    lat = data.latitud;
                    lng = data.longitud;


                    initialize();



                }else{
                  direccion=data.direccion;
                  ciudad=data.ciudad.nombre;
                  console.log(direccion);
                  console.log(ciudad);
                  initialize();
                }


            });
        }



    }

})();
