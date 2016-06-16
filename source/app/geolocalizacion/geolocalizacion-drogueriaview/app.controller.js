(function(){
  'use strict';

  angular.module('app.geolocalizacion-drogueriaview.controller', [
  ]).controller('geolocalizacionDrogueriaViewCtrl', geolocalizacionDrogueriaViewCtrl)
  .controller('geoCtrl', geoCtrl);

  function geoCtrl($scope, Usuarios, $stateParams) {
      var vm=this;

      vm.mapOptions = {
          zoom: 4,
          center: new google.maps.LatLng(40.0000, -98.0000),
          mapTypeId: google.maps.MapTypeId.TERRAIN
      }

      $scope.map = new google.maps.Map(document.getElementById('map'), vm.mapOptions);
      $scope.markers = [];
      console.log('map');
      console.log( $scope.map);

      var infoWindow = new google.maps.InfoWindow();

      vm.createMarker = function(info) {

          var marker = new google.maps.Marker({
              map: $scope.map,
              position: new google.maps.LatLng(info.lat, info.long),
              title: info.city
          });
          marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

          google.maps.event.addListener(marker, 'click', function() {
              infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
              infoWindow.open($scope.map, marker);
          });

          $scope.markers.push(marker);

      }

      // for (var i = 0; i < cities.length; i++) {
      //   createMarker(cities[i]);
      // }

      // vm.createMarker({
      //     city: 'Los Angeles',
      //     desc: 'This city is live!',
      //     lat: 34.0500,
      //     long: -118.2500
      // });





      $scope.openInfoWindow = function(e, selectedMarker) {
          e.preventDefault();
          google.maps.event.trigger(selectedMarker, 'click');
      }
      getUsuarios();


      function getUsuarios() {

          return Usuarios.get({
              idUsuario: $stateParams.idUsuario
          }).$promise.then(function(data) {
              console.log('data');
              console.log(data);
              data.latitud;
              data.longitud;
              if(data.latitud!=null && data.latitud!=null){
              vm.mapOptions = {
                  zoom: 18,
                  center: new google.maps.LatLng(data.latitud, data.longitud),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }
              $scope.map = new google.maps.Map(document.getElementById('map'), vm.mapOptions);
              console.log('aaa');
              console.log(vm.mapOptions.center.lat());
              //map.center.latitude = places[0].geometry.location.lat()
              vm.createMarker({
                  city: data.nombre,
                  desc: data.direccion,
                  lat: data.latitud,
                  long: data.longitud
              })
            }


          });

      }


  }


  geolocalizacionDrogueriaViewCtrl.$inject = ['$scope', '$timeout', 'uiGmapLogger', '$http','uiGmapGoogleMapApi', '$stateParams','$mdToast', 'Usuarios', '$q'];
  function geolocalizacionDrogueriaViewCtrl($scope, $timeout, $log, $http, GoogleMapApi, $stateParams, $mdToast, Usuarios, $q){
    var vm = this;
    console.log('user');
    activate();
    $log.doLog = true;
    var places={};
    var newMarkers={};

    $scope.lat= 40.74349;
    $scope.lng= -73.990822;


    $scope.toggleMap = function () {
      $scope.searchbox.options.visible = !$scope.searchbox.options.visible
    }

    GoogleMapApi.then(function(maps) {
      maps.visualRefresh = true;
      $scope.defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(40.82148, -73.66450),
        new google.maps.LatLng(40.66541, -74.31715));


      $scope.map.bounds = {
        northeast: {
          latitude:$scope.defaultBounds.getNorthEast().lat(),
          longitude:$scope.defaultBounds.getNorthEast().lng()
        },
        southwest: {
          latitude:$scope.defaultBounds.getSouthWest().lat(),
          longitude:-$scope.defaultBounds.getSouthWest().lng()

        }
      }
      $scope.searchbox.options.bounds = new google.maps.LatLngBounds($scope.defaultBounds.getNorthEast(), $scope.defaultBounds.getSouthWest());
    });

    angular.extend($scope, {
      window: {
        show: false,
        options: {
          pixelOffset: { width: 0, height: -40 }
        },
        templateurl:'window.tpl.html',
        templateparameter: {},
        closeClick: function () {
          $scope.window.show = false;
        }
      },
      map: {
        control: {},
        center: {
          latitude: 3.5567217,
          longitude: -76.28885220000001
        },
        zoom: 12,
        dragging: false,
        bounds: {},
        markers: [],
        idkey: 'place_id',
        events: {
          idle: function (map) {

          },
          dragend: function(map) {
            //update the search box bounds after dragging the map
            var bounds = map.getBounds();
            var ne = bounds.getNorthEast();
            var sw = bounds.getSouthWest();
            $scope.searchbox.options.bounds = new google.maps.LatLngBounds(sw, ne);
            //$scope.searchbox.options.visible = true;
          }
        }
      },
      searchbox: {
        template: 'searchbox.tpl.html',
        //position:'top-right',
        position:'top-left',
        options: {
          bounds: {},
          visible: true
        },
        //parentdiv:'searchBoxParent',
        events: {
          places_changed: function (searchBox) {

            places = searchBox.getPlaces()
            console.log(places);
            $scope.lat=places[0].geometry.location.lat();

            $scope.map.center.latitude=places[0].geometry.location.lat();
            $scope.map.center.longitude=places[0].geometry.location.lng();
            $scope.map.zoom=18;
            console.log($scope.map.center);




            if (places.length == 0) {
              return;
            }
            // For each place, get the icon, place name, and location.
            newMarkers = [];
            var bounds = new google.maps.LatLngBounds();
            for (var i = 0, place; place = places[i]; i++) {
              // Create a marker for each place.
              var marker = {
                idKey:i,
                place_id: place.place_id,
                name: place.name,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng(),
                templateurl:'window.tpl.html',
                templateparameter: place,
                events: {
                  click: function (marker) {
                    $scope.window.coords = {
                      latitude: marker.model.latitude,
                      longitude: marker.model.longitude
                    }
                    $scope.window.templateparameter = marker.model.templateparameter;
                    $scope.window.show = true;

                  }
                }
              };
              newMarkers.push(marker);
              bounds.extend(place.geometry.location);
            }

            $scope.map.bounds = {
              northeast: {
                latitude: bounds.getNorthEast().lat(),
                longitude: bounds.getNorthEast().lng()
              },
              southwest: {
                latitude: bounds.getSouthWest().lat(),
                longitude: bounds.getSouthWest().lng()
              }
            }

            $scope.map.markers = newMarkers;
          }
        }
      }
    });

    function activate() {
        var promises = [getUsuarios()];
        return $q.all(promises).then(function() {

        });
    }

    function getUsuarios() {

  return Usuarios.get(
    {idUsuario: $stateParams.idUsuario }
  ).$promise.then(function(data) {
    console.log('data');
    console.log(data);
    $scope.map.center.latitude=data.latitud;
    $scope.map.center.longitude=data.longitud;
    $scope.map.zoom=18;


  });

}



  }

})();
